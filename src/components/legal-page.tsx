import type { ReactNode } from "react";

const LEGAL_LINKS = [
  { href: "/aviso-de-privacidad", label: "Aviso de privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/cancelaciones-y-reembolsos", label: "Cancelaciones y reembolsos" },
];

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="legal-wrap legal-nav">
          <a href="/" aria-label="Lealtio, volver al inicio">
            <img src="/lealtio-logo.webp" alt="Lealtio" width={600} height={300} />
          </a>
          <a className="legal-back" href="/">
            Volver a Lealtio
          </a>
        </div>
      </header>

      <main className="legal-wrap legal-main">
        <div className="legal-hero">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-intro">{intro}</div>
          <span>Última actualización: 17 de septiembre de 2026</span>
        </div>

        <div className="legal-layout">
          <aside aria-label="Documentos legales">
            <strong>Documentos legales</strong>
            <nav>
              {LEGAL_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <p>
              ¿Tienes una duda? Escríbenos a <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>.
            </p>
          </aside>

          <article className="legal-content">{children}</article>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="legal-wrap">
        <div>
          <img src="/lealtio-logo.webp" alt="Lealtio" width={600} height={300} loading="lazy" />
          <p>Producto operado por Eduardo B Cano desde el Estado de México, México.</p>
        </div>
        <nav aria-label="Enlaces legales">
          {LEGAL_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>
        </nav>
        <span>© {new Date().getFullYear()} Lealtio</span>
      </div>
    </footer>
  );
}
