import type { ReactNode } from "react";

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

        <article className="legal-content">{children}</article>
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
        <div className="legal-footer-brand">
          <img src="/lealtio-logo.webp" alt="Lealtio" width={600} height={300} loading="lazy" />
        </div>
        <a className="legal-footer-contact" href="mailto:hola@lealtio.com">
          Contacto: hola@lealtio.com
        </a>
        <span>© {new Date().getFullYear()} Lealtio</span>
      </div>
    </footer>
  );
}
