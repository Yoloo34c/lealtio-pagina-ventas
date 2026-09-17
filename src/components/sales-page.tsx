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

function TrialLink({
  className = "",
  label = "Probar 14 días gratis",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a className={`sales-cta ${className}`} href="#planes">
      {label} <ArrowRight aria-hidden="true" size={19} />
    </a>
  );
}

function RepeatPurchase() {
  return (
    <section className="sales-wrap sales-repeat" aria-labelledby="repeat-title">
      <div className="sales-repeat-pain">
        <h2 id="repeat-title">
          Te desvives por atenderlo.
          <br />
          <span>Pasan las semanas y no vuelve.</span>
        </h2>
        <p>
          Miras el negocio flojo mientras la renta y los sueldos siguen corriendo. Vuelves a gastar
          tiempo y dinero para atraer a alguien nuevo. Y el cliente que ya te había elegido puede
          estar haciendo su siguiente compra en otro lugar, sin que siquiera te enteres.
        </p>
        <div className="sales-pain-path" aria-label="Lo que ocurre cuando el cliente no vuelve">
          <span>
            <small>HOY</small>Te compra
          </span>
          <ArrowRight size={18} aria-hidden="true" />
          <span>
            <small>DESPUÉS</small>Dejas de verlo
          </span>
          <ArrowRight size={18} aria-hidden="true" />
          <strong>
            <small>SU PRÓXIMA COMPRA</small>Otro puede cobrarla
          </strong>
        </div>
      </div>
      <div className="sales-repeat-opportunity">
        <p className="sales-eyebrow">QUE SU PRÓXIMA COMPRA NO SE VAYA CON OTRO</p>
        <h3>La siguiente venta puede empezar con alguien que ya confía en ti.</h3>
        <p>
          Lo atendiste bien. Ahora dale una razón para que la próxima compra también sea contigo.{" "}
          <strong>Lealtio lo hace posible con tu propio programa de lealtad:</strong> una tarjeta de
          tu negocio en su celular le muestra cómo cada compra lo acerca a un premio por seguir
          comprándote. Volver le conviene a él; esa venta que otro podía cobrar puede quedarse en tu
          negocio, sin que tengas que rogarle ni empezar de cero con un desconocido.
        </p>
        <div className="sales-hope-path">
          <span>
            <b>HOY</b> Te compra
          </span>
          <ArrowRight size={16} aria-hidden="true" />
          <span>
            <b>DESPUÉS</b> Tiene algo que ganar al volver
          </span>
          <ArrowRight size={16} aria-hidden="true" />
          <strong>
            <b>SU PRÓXIMA COMPRA</b> Puede ser contigo
          </strong>
        </div>
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
    withLealtio:
      "La compra de hoy deja una razón para volver. El esfuerzo de atraerlo puede abrirte una segunda, tercera y cuarta venta.",
  },
  {
    without: "Miras el negocio vacío mientras la renta y los sueldos siguen corriendo.",
    withLealtio:
      "En un día flojo no te quedas mirando la puerta: puedes invitar a volver a quienes ya conocen lo que vendes.",
  },
  {
    without:
      "Bajas el precio para llamar la atención. Trabajas igual, pero ganas menos dinero en cada venta.",
    withLealtio:
      "Tu cliente vuelve por el premio que quiere alcanzar, sin obligarte a poner todo tu negocio en oferta.",
  },
  {
    without:
      "Ese cliente que venía seguido deja de aparecer. Pasan las semanas y puede terminar comprando en otro lugar.",
    withLealtio:
      "Le recuerdas que lo esperas antes de que se enfríe la costumbre de volver a tu negocio.",
  },
  {
    without:
      "Te desvives por atender bien. Se va feliz, pero su recomendación queda en un “luego les cuento”.",
    withLealtio:
      "Le das una forma concreta de invitar a alguien y conviertes su buena experiencia en una nueva oportunidad de venta.",
  },
  {
    without:
      "Pruebas otra promoción. Gastas más tiempo y dinero. Cuando termina, vuelves al mismo punto.",
    withLealtio:
      "Ves las visitas y los canjes registrados para decidir qué repetir y qué dejar de pagar.",
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
        <p className="sales-eyebrow">DOS MANERAS MUY DISTINTAS DE LLEGAR A LA SIGUIENTE VENTA</p>
        <h2 id="comparison-title">
          Seguir empezando de cero
          <br />
          <span>o hacer que cada cliente valga más.</span>
        </h2>
        <p className="sales-intro">
          Ya viste cómo funciona y cuánto cuesta. Ahora mira qué cambia cuando la relación no
          termina al cobrar.
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
            {COMPARISON.map(({ without, withLealtio }) => (
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
                    <p>{withLealtio}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sales-comparison-action">
        <TrialLink />
        <p>La diferencia empieza con la próxima persona que te compre.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="sales-wrap sales-section" id="como-funciona" aria-labelledby="how-title">
      <div className="sales-section-heading">
        <p className="sales-eyebrow">DE UNA COMPRA AISLADA A UNA RAZÓN PARA VOLVER</p>
        <h2 id="how-title">
          Tres pasos para que una venta
          <br />
          <span>no termine cuando cobras.</span>
        </h2>
        <p className="sales-intro">
          Un programa de lealtad premia a tu cliente por seguir eligiéndote. Lealtio pone ese
          incentivo en su celular, con tu marca y las reglas que tú decides.
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
          <p className="sales-eyebrow">OCHO FORMAS DE CONVERTIR HOY EN OTRA OPORTUNIDAD DE VENTA</p>
          <h2 id="examples-title">
            Elige la razón que hará
            <br />
            <span>que quiera volver.</span>
          </h2>
          <p className="sales-intro">
            Más visitas, paquetes cobrados por adelantado, saldo para gastar contigo o regalos que
            traen a alguien nuevo. Aquí puedes ver qué haría cada tarjeta en un negocio como el
            tuyo.
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
            <p className="sales-eyebrow">CUANDO SE VA, TU NEGOCIO PUEDE SEGUIR PRESENTE</p>
            <h2 id="benefits-title">
              Que no te olvide justo cuando
              <br />
              <span>está listo para comprar otra vez.</span>
            </h2>
          </div>
          <p>
            Invítalo a volver, recuérdale lo que puede ganar y mira qué ocurre después. Lealtio te
            da formas concretas de actuar entre una visita y la siguiente.
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
    "1 geo-localización (radio 100m)": "1 ubicación con aviso automático por cercanía (100 m)",
    "3 geo-localizaciones": "3 ubicaciones con aviso automático por cercanía (100 m)",
    "10 geo-localizaciones": "10 ubicaciones con aviso automático por cercanía (100 m)",
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
    "Para empezar a convertir compras sueltas en visitas con motivo.",
    "Para activar más formas de volver, recomendar y dejar una reseña.",
    "Para recuperar clientes y conectar la fidelización con tu operación.",
  ];

  return (
    <section
      className="sales-wrap sales-section sales-pricing"
      id="planes"
      aria-labelledby="plans-title"
    >
      <div className="sales-section-heading">
        <p className="sales-eyebrow">YA VISTE LO QUE PODRÍA CAMBIAR. AHORA ELIGE CÓMO EMPEZAR.</p>
        <h2 id="plans-title">
          Pon a trabajar la próxima compra.
          <br />
          <span>Los primeros 14 días son gratis.</span>
        </h2>
        <p className="sales-intro">
          Elige el alcance que necesita tu negocio. Puedes cambiar entre mensual y anual y ver
          exactamente cuánto pagas y qué incluye cada plan.
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
      <p className="sales-plan-legal">
        Las condiciones aplicables de la prueba, el cobro y la renovación se muestran antes de
        completar el registro. Al continuar aceptas los{" "}
        <a href="/terminos-y-condiciones">Términos y condiciones</a> y la{" "}
        <a href="/cancelaciones-y-reembolsos">Política de cancelaciones y reembolsos</a>.
      </p>
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
        <p className="sales-eyebrow">NO TIENES QUE IMAGINARLO. PUEDES VERLO EN TU NEGOCIO.</p>
        <h2 id="trial-title">Pon tu primera tarjeta en marcha durante 14 días.</h2>
        <p>
          Elige un plan, crea una tarjeta con tu marca y úsala con tus propios clientes. Verla en
          sus celulares y registrar sus compras te dirá más que cualquier promesa de esta página.
        </p>
        <a className="sales-text-link" href="#planes">
          Elegir mi plan y probarlo <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <ul className="sales-trial-checks">
        <li>
          <Check size={18} aria-hidden="true" />
          Una tarjeta con tu marca
        </li>
        <li>
          <Check size={18} aria-hidden="true" />
          Un premio y reglas elegidos por ti
        </li>
        <li>
          <Check size={18} aria-hidden="true" />
          Visitas y canjes registrados
        </li>
      </ul>
    </section>
  );
}

const FAQS = [
  {
    id: "wallet",
    q: "¿Mi cliente tendrá que descargar y aprender a usar una app desconocida?",
    a: "No. Escanea el QR de tu negocio, se registra y guarda su tarjeta en la billetera digital del celular: Apple Wallet en iPhone o Google Wallet en Android, el mismo lugar donde guarda entradas al cine y boletos de conciertos. Desde ahí ve su tarjeta y lo que le falta para ganar, sin aprender a usar una app nueva o desconocida de tu negocio.",
  },
  {
    id: "equipo",
    q: "¿Necesito comprar lectores, una tableta o cambiar mi caja?",
    a: "No. Las personas de tu equipo que elijas como managers abren el escáner en un celular con internet y cámara. Tú decides quién tiene acceso, sigues cobrando como siempre y no compras equipo especial.",
  },
  {
    id: "margen",
    q: "¿Voy a terminar regalando mi ganancia?",
    a: "Tú decides el premio, su costo y cuántas compras hacen falta para ganarlo. Puedes premiar después de varias ventas o usar puntos, saldo, membresías y paquetes prepagados. La idea es dar un motivo valioso para volver sin descontar cada compra ni poner todo tu negocio en oferta.",
  },
  {
    id: "negocio",
    q: "¿Esto sirve para un negocio como el mío?",
    a: "Si una persona puede volver a comprarte, puedes darle un motivo para hacerlo. Cafés, cortes, comidas, tratamientos, clases, compras y servicios caben en los ocho tipos de tarjeta. Tú eliges la mecánica que tenga sentido para tu negocio.",
  },
  {
    id: "compatibilidad",
    q: "¿Funciona igual en iPhone y Android?",
    a: "La tarjeta se guarda en Apple Wallet, en iPhone, o en Google Wallet, en Android. En ambos puede verla y recibir tus notificaciones con los permisos activados. El aviso automático por cercanía se activa mediante Apple Wallet cuando el cliente entra en el radio de 100 m de una ubicación configurada.",
  },
  {
    id: "planes-duda",
    q: "¿Cómo sé qué plan elegir?",
    a: "Empieza con Impulso si necesitas un programa de lealtad y una persona registrando visitas. Turbo permite tres programas, diez personas, referidos y solicitudes de reseñas. Cohete amplía a diez programas y cincuenta personas, y añade recuperación de clientes inactivos y conexión API. En las tarjetas de precio tienes cada límite por escrito.",
  },
  {
    id: "prueba",
    q: "¿Qué puedo comprobar durante los 14 días?",
    a: "Puedes crear tu tarjeta, mostrar el QR a tus clientes, guardar la tarjeta en sus celulares y registrar visitas o canjes con tu equipo. Así compruebas el uso real en tu negocio antes de juzgarlo solo por una demostración.",
  },
  {
    id: "anual",
    q: "¿Qué diferencia hay entre pagar mensual o anual?",
    a: "En mensual pagas $1,499, $2,199 o $4,399 al mes. En anual haces un solo pago de $12,588, $18,588 o $36,588; su equivalente mensual es $1,049, $1,549 o $3,049. Todos los precios están en MXN e incluyen IVA. El selector de los planes te muestra ambos cálculos.",
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
        <p className="sales-eyebrow">LO QUE NORMALMENTE FRENA LA DECISIÓN</p>
        <h2 id="faq-title">
          Menos dudas.
          <br />
          <span>Más claridad para decidir.</span>
        </h2>
        <p className="sales-intro">
          Sin equipo especial, sin una app desconocida para tu cliente y con las reglas de tu
          negocio.
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
        <p className="sales-eyebrow">LA SIGUIENTE OPORTUNIDAD PUEDE ENTRAR HOY POR TU PUERTA</p>
        <h2 id="close-title">
          Que la próxima compra
          <br />
          <span>no vuelva a empezar de cero.</span>
        </h2>
        <p>
          Ya haces el trabajo difícil: atraerlo y atenderlo bien.
          <br />
          Ahora deja en su celular una razón para elegirte otra vez.
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
        Tu primera tarjeta puede estar en marcha durante 14 días.{" "}
        <a href="#planes">
          Ver cómo empezar <ArrowRight size={14} aria-hidden="true" />
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
              <span /> YA HICISTE LO MÁS DIFÍCIL: CONSEGUIR QUE ENTRE
            </p>
            <h1 id="hero-title">
              Que el cliente que te costó tiempo y dinero
              <em> no te compre una vez y desaparezca.</em>
            </h1>
            <p className="sales-hero-lead">
              Dale una razón visible para volver antes de que termine comprando en otro lugar.
            </p>
            <p className="sales-hero-description">
              Lealtio deja en su celular tu marca, su avance y el premio que puede ganar; y tú
              puedes invitarlo a regresar cuando quieras.
            </p>
            <div className="sales-hero-actions">
              <TrialLink label="Quiero que vuelvan a comprar" />
              <a className="sales-text-link" href="#como-funciona">
                Así funciona <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="sales-hero-reassurance" aria-label="Facilidades para empezar">
              <span>
                <Check size={14} aria-hidden="true" /> 14 días gratis
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> Sin comprar equipo
              </span>
              <span>
                <Check size={14} aria-hidden="true" /> Sin app de Lealtio para tu cliente
              </span>
            </div>
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
                <strong>Tu marca y su próxima recompensa viajan con él.</strong>
                <br />
                En la billetera digital de su celular.
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
        <div className="sales-footer-brand">
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
        </div>
        <nav aria-label="Enlaces legales">
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
          <a href="/cancelaciones-y-reembolsos">Cancelaciones y reembolsos</a>
        </nav>
        <div className="sales-footer-contact">
          <a href="mailto:hola@lealtio.com">Contacto: hola@lealtio.com</a>
          <span>© {new Date().getFullYear()} Lealtio</span>
        </div>
      </footer>
    </div>
  );
}
