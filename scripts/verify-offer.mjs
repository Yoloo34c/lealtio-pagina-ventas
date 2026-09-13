import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const current = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const expectedPlans = [
  {
    name: "Impulso",
    tagline: "El plan más simple para empezar a fidelizar clientes hoy mismo.",
    priceMonthly: 1499,
    priceAnnual: 1049,
    annualYear: 12588,
    features: [
      "1 promoción activa",
      "1 geo-localización (radio 100m)",
      "1 manager (Scanner App)",
      "Tarjetas y descargas en Wallet ilimitadas",
      "Contactos ilimitados",
      "Notificaciones push ilimitadas gratis",
      "Control de duplicados",
      "Analítica en tiempo real",
      "Soporte 24/7",
    ],
    popular: false,
  },
  {
    name: "Turbo",
    tagline: "El equilibrio perfecto entre potencia y precio para crecer sin frenos.",
    priceMonthly: 2199,
    priceAnnual: 1549,
    annualYear: 18588,
    features: [
      "3 promociones activas",
      "3 geo-localizaciones",
      "10 managers (Scanner App)",
      "Tarjetas y descargas en Wallet ilimitadas",
      "Contactos ilimitados",
      "Notificaciones push ilimitadas gratis",
      "Control de duplicados",
      "Analítica en tiempo real",
      "Campos personalizados en tus tarjetas",
      "Programa de referidos automatizado",
      "Reseñas de Google automáticas",
      "Soporte 24/7",
    ],
    popular: true,
  },
  {
    name: "Cohete",
    tagline: "Máxima potencia de fidelización, para negocios que ya piensan en grande.",
    priceMonthly: 4399,
    priceAnnual: 3049,
    annualYear: 36588,
    features: [
      "10 promociones activas simultáneas",
      "10 geo-localizaciones",
      "50 managers (Scanner App)",
      "Todo lo anterior, ilimitado",
      "Campos personalizados en tus tarjetas",
      "Programa de referidos automatizado",
      "Reseñas de Google automáticas",
      "Recuperación automática de clientes inactivos",
      "Conexión API con tu propio software",
      "Soporte prioritario 24/7",
    ],
    popular: false,
  },
];
const expectedPaletteHash = "816bacafc37d285d16456e46dbb2413f90ec3c3f8251802a9285c30e97e403f1";

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

const after = readPlans(current("src/lib/lealtio-offer.ts"));
assert.deepEqual(
  after,
  expectedPlans,
  "Los precios, nombres y prestaciones deben conservarse exactamente",
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
      value
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\(\s+/g, "(")
        .replace(/\s+\)/g, ")")
        .replace(/\s*,\s*/g, ","),
    ]);
}
assert.equal(
  createHash("sha256")
    .update(JSON.stringify(palette(current("src/styles.css"))))
    .digest("hex"),
  expectedPaletteHash,
  "La paleta aprobada debe conservarse",
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
