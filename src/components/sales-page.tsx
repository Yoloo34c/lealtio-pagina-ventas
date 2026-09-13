import { useEffect, useState } from "react";
import { ArrowRight, Check, ScanLine, Sparkles, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LoyaltySteps,
  CardShowcase,
  ContactShowcase,
  FamiliarStrategy,
} from "@/components/sales-visuals";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PLANS, formatMXN, getSignupUrl, type BillingPeriod } from "@/lib/lealtio-offer";
import heroPhones from "@/assets/hero-phones.webp";

import avatar1 from "@/assets/avatars/avatar-1.webp";
import avatar2 from "@/assets/avatars/avatar-2.webp";
import avatar3 from "@/assets/avatars/avatar-3.webp";
import avatar4 from "@/assets/avatars/avatar-4.webp";
import avatar5 from "@/assets/avatars/avatar-5.webp";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function TrialLink({ className = "" }: { className?: string }) {
  return (
    <a className={`sales-cta ${className}`} href="#planes">
      Probar 14 días gratis <ArrowRight aria-hidden="true" size={19} />
    </a>
  );
}

function RepeatPurchase() {
  return (
    <section className="sales-wrap sales-repeat" aria-labelledby="repeat-title">
      <div className="sales-repeat-pain">
        <p className="sales-eyebrow">¿TE PASA?</p>
        <h2 id="repeat-title">
          El negocio está flojo.
          <br />
          <span>Los gastos siguen corriendo.</span>
        </h2>
        <p>
          La renta no espera. Los sueldos tampoco. Publicas otra promoción y vuelves a preguntarte
          dónde están los clientes que ya te compraron.
        </p>
      </div>
      <div className="sales-repeat-opportunity">
        <p className="sales-eyebrow">EMPIEZA POR QUIENES YA TE CONOCEN</p>
        <h3>Ya te costó traerlos. Que no todo termine al cobrar.</h3>
        <p>
          Su próxima compra podría ser contigo. Dales un premio que quieran ganar, recuérdales que
          los esperas y deja de depender de que vuelvan por casualidad.
        </p>
        <a className="sales-text-link" href="#como-funciona">
          Mira cómo lo harías <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

const COMPARISON = [
  {
    without: "Te cuesta tiempo y dinero conseguir un cliente. Te compra una vez y desaparece.",
    outcome: "Haz que conseguirlo valga más.",
    withLealtio: "Dale motivos para repetir, para que tu esfuerzo no termine en una sola venta.",
  },
  {
    without: "Miras el negocio vacío mientras la renta y los sueldos siguen corriendo.",
    outcome: "Ten a quién acudir en un día flojo.",
    withLealtio:
      "Ve por la siguiente compra de quienes ya te conocen, en lugar de esperar a que aparezca alguien nuevo.",
  },
  {
    without: "Bajas el precio para llamar la atención. Trabajas igual, pero te queda menos.",
    outcome: "Cuida lo que ganas en cada venta.",
    withLealtio: "Da motivos para elegirte sin tener que ofrecer una rebaja cada vez.",
  },
  {
    without:
      "Ese cliente que venía seguido deja de aparecer. Pasan las semanas y dejas de venderle.",
    outcome: "Que una ausencia no sea un cliente perdido.",
    withLealtio: "Retoma el contacto y abre la puerta a que vuelva a comprarte.",
  },
  {
    without:
      "Te desvives por atender bien, pero conseguir al próximo cliente vuelve a depender de ti.",
    outcome: "Que tus clientes te ayuden a traer a los siguientes.",
    withLealtio:
      "Dales motivos para recomendarte y convertir el buen servicio en nuevas oportunidades de venta.",
  },
  {
    without:
      "Pruebas otra promoción. Gastas más tiempo. Sigues sin saber quién vuelve a comprarte.",
    outcome: "Decide dónde vale la pena poner tu esfuerzo.",
    withLealtio: "Reconoce quién regresa y qué aprovecha, para dejar de probar a ciegas.",
  },
] as const;

function Comparison() {
  return (
    <section
      className="sales-wrap sales-section sales-comparison"
      id="con-lealtio"
      aria-labelledby="comparison-title"
    >
      <div className="sales-section-heading">
        <p className="sales-eyebrow">LO QUE QUIERES CAMBIAR EN TU NEGOCIO</p>
        <h2 id="comparison-title">
          Que cada cliente te deje
          <br />
          <span>más que una sola venta.</span>
        </h2>
        <p className="sales-intro">
          Piensa en lo que cambiaría en tu día si más clientes volvieran a elegirte.
        </p>
      </div>
      <div className="sales-comparison-frame">
        <table>
          <caption className="sr-only">
            Comparación entre esperar la próxima visita y utilizar Lealtio para incentivar que el
            cliente regrese.
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <div>
                  <X size={24} aria-hidden="true" />
                  <span>
                    Sin Lealtio<small>Persiguiendo la siguiente venta.</small>
                  </span>
                </div>
              </th>
              <th scope="col">
                <div>
                  <Check size={24} aria-hidden="true" />
                  <span>
                    Con Lealtio<small>Más compras de quienes ya te eligieron.</small>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(({ without, outcome, withLealtio }) => (
              <tr key={without}>
                <td>
                  <span className="sales-comparison-mobile">Sin Lealtio</span>
                  <div>
                    <X size={18} aria-hidden="true" />
                    <p>{without}</p>
                  </div>
                </td>
                <td>
                  <span className="sales-comparison-mobile">Con Lealtio</span>
                  <div>
                    <Check size={19} aria-hidden="true" />
                    <p>
                      <strong>{outcome}</strong>
                      {withLealtio}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sales-comparison-action">
        <TrialLink />
        <p>Tu próxima oportunidad está en quienes ya te compraron.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="sales-wrap sales-section" id="como-funciona" aria-labelledby="how-title">
      <div className="sales-section-heading">
        <p className="sales-eyebrow">TU NEGOCIO, EN SU PRÓXIMA VISITA</p>
        <h2 id="how-title">
          Que quien te compra hoy
          <br />
          <span>tenga motivos para comprarte otra vez.</span>
        </h2>
        <p className="sales-intro">
          Un programa de lealtad es esto: premiar a tus clientes por seguir comprándote. Lealtio lo
          pone en su celular, con tu marca y tus reglas.
        </p>
      </div>
      <LoyaltySteps />
    </section>
  );
}

function BusinessExamples() {
  return (
    <section
      className="sales-examples sales-section"
      id="para-tu-negocio"
      aria-labelledby="examples-title"
    >
      <div className="sales-wrap">
        <div className="sales-section-heading">
          <p className="sales-eyebrow">ASÍ PODRÍA VERSE EN TU NEGOCIO</p>
          <h2 id="examples-title">
            Que piense en tu negocio
            <br />
            <span>antes de comprar otra vez.</span>
          </h2>
          <p className="sales-intro">
            Más visitas, paquetes cobrados por adelantado o regalos que traen personas a
            descubrirte. Elige por dónde quieres empezar.
          </p>
        </div>
        <CardShowcase />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section
      className="sales-benefits sales-section"
      id="beneficios"
      aria-labelledby="benefits-title"
    >
      <div className="sales-wrap">
        <div className="sales-benefits-heading">
          <div>
            <p className="sales-eyebrow">DESPUÉS DE COBRAR, LA RELACIÓN CONTINÚA</p>
            <h2 id="benefits-title">
              Que salir de tu negocio
              <br />
              <span>no sea dejar de comprarte.</span>
            </h2>
          </div>
          <p>
            Un día flojo. Un cliente que lleva semanas sin venir. Tu próxima venta también puede
            empezar con alguien que ya te eligió.
          </p>
        </div>
        <ContactShowcase />
      </div>
    </section>
  );
}

// Preserve the original offer data; explain each entitlement where it is read.
function planFeatureLabel(feature: string) {
  const labels: Record<string, string> = {
    "1 geo-localización (radio 100m)": "1 ubicación con avisos por cercanía en iPhone (100 m)",
    "3 geo-localizaciones": "3 ubicaciones con avisos por cercanía en iPhone (100 m)",
    "10 geo-localizaciones": "10 ubicaciones con avisos por cercanía en iPhone (100 m)",
    "1 manager (Scanner App)": "1 persona de tu equipo con acceso al escáner (manager)",
    "10 managers (Scanner App)": "10 personas de tu equipo con acceso al escáner (managers)",
    "50 managers (Scanner App)": "50 personas de tu equipo con acceso al escáner (managers)",
    "Contactos ilimitados": "Contactos de clientes ilimitados",
    "Notificaciones push ilimitadas gratis": "Envíos de notificaciones push ilimitados, incluidos",
    "Control de duplicados": "Control de registros duplicados de clientes",
    "Analítica en tiempo real": "Analítica en tiempo real: visitas y canjes registrados",
    "Campos personalizados en tus tarjetas":
      "Campos personalizados en tus tarjetas para los datos que necesitas",
    "Reseñas de Google automáticas": "Solicitudes automáticas de reseñas en Google",
    "Conexión API con tu propio software": "API para conectar Lealtio con tu propio software",
    "Todo lo anterior, ilimitado":
      "Tarjetas, descargas en Wallet, contactos y envíos push ilimitados; incluye control de duplicados y analítica en tiempo real",
  };
  return (
    labels[feature] ||
    feature
      .replace("promociones activas simultáneas", "programas de lealtad activos simultáneos")
      .replace("promoción activa", "programa de lealtad activo")
      .replace("promociones activas", "programas de lealtad activos")
  );
}

function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const annual = period === "annual";
  const planGuidance = [
    "Para que atraer un cliente no termine en una sola venta.",
    "Para que tus clientes vuelvan y te ayuden a traer a los siguientes.",
    "Para volver a invitar a quienes se alejan, mientras tú atiendes el negocio.",
  ];

  return (
    <section
      className="sales-wrap sales-section sales-pricing"
      id="planes"
      aria-labelledby="plans-title"
    >
      <div className="sales-section-heading">
        <p className="sales-eyebrow">EL PLAN PARA EMPEZAR A HACERLO</p>
        <h2 id="plans-title">
          Elige cómo quieres empezar.
          <br />
          <span>Los primeros 14 días son gratis.</span>
        </h2>
        <p className="sales-intro">
          Empieza a buscar más ventas entre quienes ya te compran. Elige el plan para tu equipo;
          abajo puedes ver exactamente qué incluye.
        </p>
      </div>
      <ToggleGroup
        className="sales-billing"
        type="single"
        value={period}
        onValueChange={(value) => {
          if (value === "monthly" || value === "annual") setPeriod(value);
        }}
        aria-label="Periodo de facturación"
      >
        <ToggleGroupItem value="monthly">Mensual</ToggleGroupItem>
        <ToggleGroupItem value="annual">
          Anual <span>Ahorra al año</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="sales-billing-note" aria-live="polite">
        {annual
          ? "Un pago al año. Abajo ves el total y su equivalente mensual."
          : "Precios mensuales en pesos mexicanos (MXN). IVA incluido."}
      </p>
      <div className="sales-plan-grid">
        {PLANS.map((plan, i) => {
          const url = getSignupUrl(plan.name, period);
          const savings = plan.priceMonthly * 12 - plan.annualYear;
          return (
            <article
              className={`sales-plan ${i === 1 ? "sales-plan-featured" : ""}`}
              key={plan.name}
              aria-labelledby={`plan-${i}`}
            >
              {i === 1 && (
                <div className="sales-plan-ribbon">
                  <Sparkles size={15} aria-hidden="true" /> MÁS POPULAR
                </div>
              )}
              <div className="sales-plan-heading">
                <span className="sales-plan-index">0{i + 1}</span>
                <h3 id={`plan-${i}`}>{plan.name}</h3>
                <p>{planGuidance[i]}</p>
              </div>
              <div className="sales-plan-amount" aria-live="polite" aria-atomic="true">
                <div>
                  <strong>{formatMXN(annual ? plan.priceAnnual : plan.priceMonthly)}</strong>
                  <span> /mes</span>
                </div>
                <p>{annual ? "Equivalente mensual · IVA incluido" : "MXN · IVA incluido"}</p>
                <div className="sales-plan-billing">
                  {annual ? (
                    <>
                      <strong>Un pago anual de {formatMXN(plan.annualYear)}</strong>
                      <span className="sales-saving">Ahorras {formatMXN(savings)} al año</span>
                    </>
                  ) : (
                    <>
                      <strong>Facturación mensual</strong>
                      <span>O ahorra {formatMXN(savings)} con pago anual</span>
                    </>
                  )}
                </div>
              </div>
              {url ? (
                <a
                  className={`sales-plan-cta ${i === 1 ? "sales-cta" : ""}`}
                  href={url}
                  aria-label={`Probar ${plan.name} 14 días gratis, facturación ${annual ? "anual" : "mensual"}`}
                >
                  Quiero {plan.name} <ArrowRight size={17} aria-hidden="true" />
                </a>
              ) : (
                // The owner requested final-looking buttons while payment URLs are supplied later.
                <button type="button" className={`sales-plan-cta ${i === 1 ? "sales-cta" : ""}`}>
                  Quiero {plan.name} <ArrowRight size={17} aria-hidden="true" />
                </button>
              )}
              <span className="sales-plan-trial">14 días de prueba gratis</span>
              <div className="sales-plan-includes">LO QUE TE LLEVAS</div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    <span>{planFeatureLabel(feature)}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Trial() {
  return (
    <section className="sales-wrap sales-trial" aria-labelledby="trial-title">
      <div className="sales-trial-number">
        <strong>14</strong>
        <span>DÍAS GRATIS</span>
      </div>
      <div className="sales-trial-copy">
        <p className="sales-eyebrow">TU PRIMER PASO, CON TUS PROPIOS CLIENTES</p>
        <h2 id="trial-title">De la próxima compra a una razón para volver.</h2>
        <p>
          Prueba 14 días con tus propios clientes. Crea tu tarjeta e invítalos a guardarla al
          cobrar: esa primera compra ya puede ser el comienzo de las siguientes.
        </p>
        <a className="sales-text-link" href="#planes">
          Elegir mi plan y probarlo <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <ul className="sales-trial-checks">
        <li>
          <Check size={18} aria-hidden="true" />
          Tu marca en su celular
        </li>
        <li>
          <Check size={18} aria-hidden="true" />
          Una recompensa elegida por ti
        </li>
        <li>
          <Check size={18} aria-hidden="true" />
          Tu primera compra registrada
        </li>
      </ul>
    </section>
  );
}

const FAQS = [
  {
    id: "negocio",
    q: "¿Esto sirve para un negocio como el mío?",
    a: "Si tus clientes pueden volver a comprarte, puedes premiar que te sigan eligiendo. Cortes, cafés, comidas, tratamientos: tú defines la recompensa y las reglas de tu negocio.",
  },
  {
    id: "margen",
    q: "¿Voy a terminar regalando mi ganancia?",
    a: "Tú eliges el premio y cuántas compras necesita para ganarlo. Puedes ofrecer un beneficio después de varias compras, sin descontar cada venta. Revisa su costo y elige algo que tu cliente valore y a tu negocio le convenga.",
  },
  {
    id: "equipo",
    q: "Ya tengo mucho que hacer. ¿Cómo lo usaría mi equipo?",
    a: "Eliges una plantilla y creas tu tarjeta. Al cobrar, tu equipo abre el escáner desde el navegador de un celular, lee la tarjeta y registra la compra o el canje. Necesita internet y permiso de cámara; no un lector especial.",
  },
  {
    id: "wallet",
    q: "¿Mis clientes van a tener que descargar otra app?",
    a: "Tu cliente guarda su tarjeta en Apple Wallet, en iPhone, o en Google Wallet, en Android compatible. Escanea el QR de tu mostrador, se registra y pulsa para añadirla. No necesita una app de Lealtio. Google Wallet está disponible para descargar si aún no lo tiene.",
  },
  {
    id: "compatibilidad",
    q: "¿Funciona igual en iPhone y Android?",
    a: "Tus clientes pueden llevar su tarjeta en Apple Wallet o Google Wallet. Los avisos por cercanía están disponibles en iPhone, dentro de 100 m de una ubicación configurada. Para recibir mensajes, el cliente guarda la tarjeta y habilita las notificaciones y los permisos correspondientes. Puedes realizar los envíos incluidos en tu plan; Google Wallet muestra hasta tres notificaciones al día.",
  },
  {
    id: "planes-duda",
    q: "¿Cómo sé qué plan elegir?",
    a: "Impulso: 1 programa y 1 persona registrando visitas. Turbo: 3 programas, 10 personas, referidos y solicitudes de reseñas. Cohete: 10 programas, 50 personas, recordatorios a clientes inactivos y conexión con tu software. Elige según lo que vas a usar.",
  },
  {
    id: "anual",
    q: "¿Cómo se cobra el plan anual?",
    a: "Se cobra el año completo: $12,588 en Impulso, $18,588 en Turbo y $36,588 en Cohete (MXN, IVA incluido). La cifra por mes es el equivalente. Ahorras $5,400, $7,800 o $16,200, respectivamente, frente a doce mensualidades.",
  },
  {
    id: "resultados",
    q: "¿Cómo sé si está funcionando?",
    a: "El panel muestra visitas y recompensas registradas. Durante la prueba, revisa que tus clientes guarden la tarjeta y tu equipo la use al cobrar. Las compras repetidas dependen del tiempo entre visitas, el premio y la experiencia en tu negocio.",
  },
];

function Questions({
  open,
  onOpenChange,
}: {
  open: string;
  onOpenChange: (value: string) => void;
}) {
  return (
    <section
      className="sales-wrap sales-section sales-faq"
      id="preguntas"
      aria-labelledby="faq-title"
    >
      <div>
        <p className="sales-eyebrow">ANTES DE DECIDIR</p>
        <h2 id="faq-title">
          Tus dudas
          <br />
          <span>tienen respuesta.</span>
        </h2>
        <p className="sales-intro">
          Tu tiempo, tu ganancia y cómo encaja en tu negocio. Hablemos de lo que importa.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        value={open}
        onValueChange={onOpenChange}
        className="sales-faq-list"
      >
        {FAQS.map(({ id, q, a }) => (
          <AccordionItem key={id} value={id} id={id}>
            <AccordionTrigger className="sales-faq-question">{q}</AccordionTrigger>
            <AccordionContent className="sales-faq-answer">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Close() {
  return (
    <section className="sales-close" aria-labelledby="close-title">
      <div className="sales-wrap">
        <p className="sales-eyebrow">EMPIEZA CON LA PRÓXIMA PERSONA QUE TE COMPRE</p>
        <h2 id="close-title">
          No dejes tu próxima venta
          <br />
          <span>en manos de la suerte.</span>
        </h2>
        <p>
          Ya hiciste el esfuerzo de traerlo hasta tu negocio.
          <br />
          Dale una razón para que la próxima compra también sea contigo.
        </p>
        <TrialLink />
        <div className="sales-close-note">
          14 días gratis para empezar con quienes ya te compran.
        </div>
      </div>
    </section>
  );
}

export default function SalesPage() {
  const [openQuestion, setOpenQuestion] = useState("");
  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.slice(1);
      if (FAQS.some((question) => question.id === id)) setOpenQuestion(id);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);
  return (
    <div className="sales-page" id="inicio">
      <a className="sales-skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="sales-announcement">
        Empieza por quienes ya te compraron.{" "}
        <a href="#planes">
          Conoce la prueba de 14 días <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
      <header className="sales-header">
        <div className="sales-wrap sales-nav">
          <a href="#inicio" aria-label="Lealtio, inicio">
            <img
              className="sales-logo"
              src="/lealtio-logo.webp"
              alt="Lealtio"
              width={600}
              height={300}
            />
          </a>
          <nav aria-label="Navegación principal">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#planes">Planes y precios</a>
            <a href="#preguntas">Tus dudas</a>
          </nav>
          <TrialLink className="sales-nav-cta" />
        </div>
      </header>
      <main id="contenido">
        <section className="sales-wrap sales-hero" aria-labelledby="hero-title">
          <div className="sales-hero-copy">
            <p className="sales-eyebrow">
              <span /> PARA DUEÑOS DE NEGOCIOS LOCALES
            </p>
            <h1 id="hero-title">
              Que tus ventas no dependan <em>siempre de clientes nuevos.</em>
            </h1>
            <p className="sales-hero-lead">
              Conseguir un cliente cuesta trabajo.{" "}
              <strong>Que ese esfuerzo no termine en una sola venta.</strong>
            </p>
            <p className="sales-hero-description">
              Lealtio te ayuda a vender de nuevo a quienes ya te conocen. Creas una tarjeta digital
              con tu marca que guardan en su celular, premias sus compras y los invitas a volver con
              mensajes.
            </p>
            <div className="sales-hero-actions">
              <TrialLink />
              <a className="sales-text-link" href="#como-funciona">
                Así funciona <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="sales-fine">Desde $1,499 MXN/mes después de la prueba · IVA incluido</p>
            <div className="sales-social">
              <div className="sales-avatars">
                {avatars.map((src) => (
                  <img key={src} src={src} alt="" width={44} height={44} />
                ))}
              </div>
              <p>
                <strong>+50</strong> negocios ya fidelizan clientes
                <br className="sales-desktop-break" /> con nuestra plataforma.
              </p>
            </div>
          </div>
          <figure className="sales-hero-visual">
            <div className="sales-visual-label">
              <ScanLine size={17} aria-hidden="true" /> Así puede verse tu tarjeta
            </div>
            <img
              className="sales-hero-phones"
              src={heroPhones}
              alt="Ejemplos de tarjetas de lealtad para una clínica dental y una barbería, con sellos y recompensas en el celular"
              width={912}
              height={944}
              fetchPriority="high"
            />
            <figcaption>
              <span className="sales-caption-icon">
                <Check size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>Una primera compra. Más oportunidades de volver a venderle.</strong>
                <br />
                En Apple Wallet o Google Wallet.
              </span>
            </figcaption>
          </figure>
        </section>
        <div className="sales-business-strip">
          <div className="sales-wrap">
            <span>HECHO PARA EL NEGOCIO QUE ABRES CADA DÍA</span>
            <p>
              Barberías <b>·</b> Cafeterías <b>·</b> Restaurantes <b>·</b> Spas <b>·</b> Salones{" "}
              <b>·</b> Y muchos más
            </p>
          </div>
        </div>
        <RepeatPurchase />
        <HowItWorks />
        <FamiliarStrategy />
        <BusinessExamples />
        <Benefits />
        <Pricing />
        <Comparison />
        <Trial />
        <Questions open={openQuestion} onOpenChange={setOpenQuestion} />
        <Close />
      </main>
      <footer className="sales-footer sales-wrap">
        <a href="#inicio" aria-label="Lealtio, volver al inicio">
          <img
            className="sales-logo"
            src="/lealtio-logo.webp"
            alt="Lealtio"
            width={600}
            height={300}
            loading="lazy"
          />
        </a>
        <p>Que el esfuerzo de atraerlos te rinda más de una venta.</p>
        <span>© {new Date().getFullYear()} Lealtio</span>
      </footer>
    </div>
  );
}
