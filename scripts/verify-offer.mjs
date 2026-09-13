import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const baseline = "fa24cb4906ff46f8931e3b61d87fead697df3f29";
const original = (path) =>
  execFileSync("git", ["show", `${baseline}:${path}`], { cwd: root, encoding: "utf8" });
const current = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

function readPlans(source) {
  const ast = ts.createSourceFile(
    "offer.tsx",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let initializer;
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && node.name.getText(ast) === "PLANS")
      initializer = node.initializer;
    ts.forEachChild(node, visit);
  };
  visit(ast);
  assert.ok(initializer, "Debe existir una fuente única de planes");
  const expression = ts.transpileModule(
    `const plans = ${initializer.getText(ast)}; JSON.stringify(plans);`,
    { compilerOptions: { target: ts.ScriptTarget.ES2022 } },
  ).outputText;
  return JSON.parse(runInNewContext(expression, {}, { timeout: 1000 }));
}

const before = readPlans(original("src/routes/index.tsx"));
const after = readPlans(current("src/lib/lealtio-offer.ts"));
assert.deepEqual(
  after,
  before,
  "Todos los precios, nombres y prestaciones deben conservarse exactamente",
);
assert.deepEqual(
  after.map((p) => p.priceMonthly * 12 - p.annualYear),
  [5400, 7800, 16200],
);
after.forEach((p) =>
  assert.equal(p.priceAnnual * 12, p.annualYear, `Equivalente anual de ${p.name}`),
);

function palette(source) {
  const tokens = [...source.matchAll(/(--[a-z-]+):\s*([^;]+);/g)];
  return tokens
    .filter(([, name]) => !name.startsWith("--font-"))
    .map(([, name, value]) => [
      name,
      value.trim().replace(/\s+/g, " ").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")").replace(/\s*,\s*/g, ","),
    ]);
}
assert.deepEqual(
  palette(current("src/styles.css")),
  palette(original("src/styles.css")),
  "La paleta original debe conservarse",
);

const page = current("src/components/sales-page.tsx");
for (let i = 1; i <= 5; i++) assert.ok(page.includes(`@/assets/avatars/avatar-${i}.webp`));
assert.ok(page.includes("/lealtio-logo.webp"));
assert.ok(page.includes("negocios ya fidelizan clientes"));
assert.ok(!page.includes('href="#"'), "No debe haber enlaces vacíos");
assert.ok(!page.includes("30%"), "No debe presentarse un porcentaje de ahorro uniforme inexacto");
assert.ok(!page.includes("4.9"), "No deben añadirse puntuaciones sin respaldo");
console.log(
  "PASS: 3 planes idénticos al original, 31 prestaciones intactas, importes y ahorros correctos, paleta y activos obligatorios preservados.",
);
