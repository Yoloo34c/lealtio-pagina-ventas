import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BatteryFull,
  Bell,
  Check,
  ChevronRight,
  Coins,
  Crown,
  Gift,
  Layers,
  MapPin,
  MessageCircle,
  Percent,
  ScanLine,
  Share2,
  Smartphone,
  Sparkles,
  Stamp,
  Ticket,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const STAMP_CARD = "/cards/sellos.png";

function CardImage({ src = STAMP_CARD, alt = "" }: { src?: string; alt?: string }) {
  return (
    <img
      className="lv2-card-image"
      src={src}
      alt={alt}
      width={744}
      height={1110}
      loading="lazy"
      decoding="async"
    />
  );
}

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`lv2-phone ${className}`}>
      <div className="lv2-phone-screen">
        <div className="lv2-status">
          <span>9:41</span>
          <i />
          <span>
            <Wifi size={11} />
            <BatteryFull size={14} />
          </span>
        </div>
        {children}
        <div className="lv2-home" />
      </div>
    </div>
  );
}

// A single, uniformly scaled artboard preserves the phone's proportions at every width.
// Motion starts on entry, finishes within five seconds and stops outside the viewport.
function Scene({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const size = () => {
      const artboard = el.firstElementChild as HTMLElement | null;
      el.style.setProperty(
        "--scene-scale",
        String(el.clientWidth / (artboard?.offsetWidth || 560)),
      );
    };
    size();
    const resize = new ResizeObserver(size);
    resize.observe(el);
    const visibility = new IntersectionObserver(
      ([entry]) => {
        el.dataset.play = entry.isIntersecting ? "true" : "false";
      },
      { threshold: 0.25 },
    );
    visibility.observe(el);
    return () => {
      resize.disconnect();
      visibility.disconnect();
    };
  }, []);
  return (
    <div ref={ref} className={`lv2-scene ${className}`} role="img" aria-label={label}>
      <div className="lv2-artboard" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

// Illustrative QR. It deliberately contains no registration or payment destination.
function DemoQR() {
  const cells = Array.from({ length: 21 }, (_, y) =>
    Array.from({ length: 21 }, (_, x) => {
      const finder = [
        [0, 0],
        [14, 0],
        [0, 14],
      ].find(([a, b]) => x >= a && x < a + 7 && y >= b && y < b + 7);
      if (finder) {
        const dx = x - finder[0],
          dy = y - finder[1];
        return (
          dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)
        );
      }
      if ((x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)) return false;
      return (x * 13 + y * 7 + x * y) % 11 < 5;
    }),
  );
  return (
    <svg className="lv2-qr" viewBox="-2 -2 25 25" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="-2" y="-2" width="25" height="25" fill="white" />
      <path
        fill="currentColor"
        d={cells.flatMap((row, y) => row.map((on, x) => (on ? `M${x} ${y}h1v1h-1z` : ""))).join("")}
      />
    </svg>
  );
}

function CreateScene() {
  return (
    <Scene
      className="lv2-create"
      label="Una tarjeta con tu marca y una recompensa elegida por ti, guardada en el celular"
    >
      <div className="lv2-choice">
        <Gift size={26} />
        <span>TÚ ELIGES</span>
        <strong>
          Un premio que
          <br />
          dé ganas de volver.
        </strong>
        <p>
          Tu marca.
          <br />
          Tus reglas.
        </p>
      </div>
      <Phone>
        <div className="lv2-wallet-title">
          Mi tarjeta <Wallet size={16} />
        </div>
        <CardImage />
      </Phone>
    </Scene>
  );
}

function JoinScene() {
  return (
    <Scene
      className="lv2-join"
      label="En el mostrador de una cafetería, un celular escanea el QR del negocio. Una barra azul recorre el código."
    >
      <img
        className="lv2-counter"
        src="/scenes/mostrador-lealtio.png"
        alt=""
        width={1536}
        height={1024}
        loading="lazy"
      />
      <div className="lv2-qr-stand">
        <span>VOLVER TIENE PREMIO</span>
        <DemoQR />
        <strong>
          Tu próxima recompensa
          <br />
          empieza aquí.
        </strong>
        <small>Escanea y guarda tu tarjeta</small>
      </div>
      <Phone className="lv2-scanning-phone">
        <div className="lv2-scanner-heading">
          <ScanLine size={17} />
          <span>CÁMARA DEL CLIENTE</span>
          <strong>
            Escanea el QR
            <br />
            del mostrador.
          </strong>
        </div>
        <div className="lv2-viewfinder">
          <div className="lv2-camera-backdrop" />
          <DemoQR />
          <div className="lv2-corners" />
          <div className="lv2-scan-beam" />
        </div>
        <div className="lv2-scan-result">
          <Wallet size={21} />
          <span>
            <strong>Tu tarjeta de lealtad</strong>
            <small>Regístrate y guárdala en Wallet</small>
          </span>
          <ChevronRight size={15} />
        </div>
      </Phone>
    </Scene>
  );
}

function RecordScene() {
  return (
    <Scene
      className="lv2-record"
      label="El personal escanea el código de la tarjeta del cliente con su celular y registra una visita."
    >
      <div className="lv2-presented-card">
        <span>LA TARJETA DE TU CLIENTE</span>
        <CardImage />
      </div>
      <Phone className="lv2-scanning-phone">
        <div className="lv2-scanner-heading">
          <ScanLine size={17} />
          <span>ESCÁNER DE TU EQUIPO</span>
          <strong>
            Una compra más.
            <br />
            Un sello más.
          </strong>
        </div>
        <div className="lv2-viewfinder lv2-barcode-view">
          <div className="lv2-barcode" />
          <div className="lv2-corners" />
          <div className="lv2-scan-beam" />
        </div>
        <div className="lv2-register-result">
          <span>
            <Check size={17} />
          </span>
          <strong>Visita registrada</strong>
          <small>Más cerca de su recompensa</small>
        </div>
      </Phone>
    </Scene>
  );
}

export function LoyaltySteps() {
  const steps = [
    {
      title: "Convierte la próxima compra en algo que quiera alcanzar.",
      text: "Elige una tarjeta con tu marca y un premio que sí le dé ganas de volver: un café, un servicio extra o un trato especial. Tú decides qué entregas y cuántas compras necesita para ganarlo.",
      note: "No regalas por regalar: construyes una razón para volver.",
      scene: <CreateScene />,
    },
    {
      title: "Haz que tu negocio se vaya con él en el celular.",
      text: "Muestras el QR de tu programa en el mostrador. Tu cliente lo escanea, se registra y guarda su tarjeta. En unos toques se lleva tu marca, su avance y el premio que puede ganar.",
      note: "Termina la compra, pero tu relación con él puede continuar.",
      scene: <JoinScene />,
    },
    {
      title: "Que cada visita lo acerque a regresar.",
      text: "Al cobrar, tu equipo abre el escáner de Lealtio en un celular, lee la tarjeta del cliente y registra la compra. Él ve al instante cuánto avanzó y qué le falta para ganar.",
      note: "Cobras la venta de hoy mientras preparas el motivo de la siguiente.",
      scene: <RecordScene />,
    },
  ];
  return (
    <>
      <div className="lv2-steps">
        {steps.map((step, i) => (
          <article className="lv2-step" key={step.title}>
            <div className="lv2-step-copy">
              <span className="lv2-step-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <strong className="lv2-step-payoff">{step.note}</strong>
            </div>
            {step.scene}
          </article>
        ))}
      </div>
      <div className="lv2-ease">
        <article>
          <span className="lv2-ease-icon">
            <Smartphone size={29} />
          </span>
          <div>
            <p className="sales-eyebrow">SIN COMPRAR APARATOS</p>
            <h3>No necesitas otro lector, otra tableta ni otra caja.</h3>
            <p>
              Cada persona de tu equipo puede registrar visitas y canjes desde un celular con
              internet. En los planes, cada acceso para hacerlo aparece como un{" "}
              <strong>manager</strong>: una persona autorizada para usar el escáner.
            </p>
          </div>
        </article>
        <article>
          <span className="lv2-ease-icon">
            <Wallet size={29} />
          </span>
          <div>
            <p className="sales-eyebrow">SIN OTRA APP DE LEALTIO</p>
            <h3>Donde ya guarda lo importante, también guarda tu negocio.</h3>
            <p>
              Ese espacio donde puede llevar tarjetas bancarias, boletos de avión o entradas se
              llama <strong>Wallet</strong>. Apple Wallet viene en iPhone y Google Wallet está
              disponible en Android. Lealtio coloca ahí tu tarjeta, lista para consultar.
            </p>
            <div className="lv2-wallet-names">
              <span>Apple Wallet</span>
              <span>Google Wallet</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

const CARD_EXAMPLES = [
  {
    id: "sellos",
    name: "Sellos",
    icon: Stamp,
    src: STAMP_CARD,
    business: "BARBERÍAS · CAFETERÍAS · SALONES",
    title: "Que la próxima compra también la cobres tú.",
    text: "Cada compra suma un sello. Cuando reúne los que tú decidas, se lleva una recompensa. La próxima vez que necesite un corte o un café, contigo ya tiene camino ganado.",
    benefit: "Más oportunidades de venderle a quien ya te eligió.",
    detail: "Tú decides el premio y las compras necesarias.",
    action: "Compra",
    middle: "Suma sellos",
    end: "Gana su premio",
  },
  {
    id: "puntos",
    name: "Puntos",
    icon: Sparkles,
    src: "/cards/puntos.png",
    business: "CAFETERÍAS · SPAS · RESTAURANTES",
    title: "Haz que cada compra le deje ganas de alcanzar la siguiente.",
    text: "Cada compra suma puntos para canjear por las recompensas que tú elijas. Tu cliente ve cuánto lleva y cuánto le falta: el progreso le recuerda que contigo ya tiene algo ganado.",
    benefit: "Su avance convierte volver contigo en la opción que más le conviene.",
    detail: "Tú eliges cómo suma puntos y por qué los canjea.",
    action: "Compra",
    middle: "Acumula puntos",
    end: "Canjea su premio",
  },
  {
    id: "cashback",
    name: "Cashback",
    icon: Coins,
    src: "/cards/cashback.png",
    business: "RESTAURANTES · TIENDAS · NEGOCIOS LOCALES",
    title: "Que su próxima compra se quede en tu negocio.",
    text: "Devuelve un porcentaje de cada compra como saldo para gastar en tu negocio. Ese es el cashback: una parte de lo que pagó se convierte en una razón para comprarte de nuevo.",
    benefit: "Lo que compra hoy le da motivos para volver a gastar contigo.",
    detail: "Tú defines el porcentaje y las condiciones para usar el saldo.",
    action: "Compra",
    middle: "Recibe saldo",
    end: "Lo gasta contigo",
  },
  {
    id: "membresia",
    name: "Membresía",
    icon: Crown,
    src: "/cards/membresia.png",
    business: "GIMNASIOS · CLUBES · SPAS",
    title: "Haz que ser de los tuyos tenga sus privilegios.",
    text: "Dale una tarjeta de miembro con su nombre, nivel y vigencia. El acceso o los beneficios que tú elijas hacen visible ese trato especial por pertenecer a tu negocio.",
    benefit: "Dales un trato que quieran seguir disfrutando contigo.",
    detail: "Tú defines los niveles, la vigencia y los beneficios.",
    action: "Se une",
    middle: "Tiene su tarjeta",
    end: "Disfruta beneficios",
  },
  {
    id: "descuento",
    name: "Descuento",
    icon: Percent,
    src: "/cards/descuento.png",
    business: "BOUTIQUES · TIENDAS · SALONES",
    title: "Da un trato especial sin poner todo tu negocio en oferta.",
    text: "Ofrece a tus clientes un descuento que puedan usar al volver. Lo llevan en su tarjeta: un trato especial que les recuerda por qué les conviene seguir eligiéndote.",
    benefit: "Premia que te elijan sin rebajar todas tus ventas.",
    detail: "Tú eliges quién lo recibe, el porcentaje y las condiciones.",
    action: "Guarda su tarjeta",
    middle: "Tiene un descuento",
    end: "Lo aprovecha contigo",
  },
  {
    id: "cupon",
    name: "Cupón",
    icon: Ticket,
    src: "/cards/cupon.png",
    business: "HELADERÍAS · RESTAURANTES · COMERCIOS",
    title: "Dale un motivo para venir hoy, en vez de dejarlo para después.",
    text: "Una oferta de bienvenida o un beneficio especial puede darle el empujón para probarte. Guarda el cupón en su celular y lo canjea en tu negocio dentro del plazo que tú decidas.",
    benefit: "Una oportunidad de venderle a quien todavía no te conoce.",
    detail: "Tú defines el beneficio, la vigencia y el canje.",
    action: "Recibe el cupón",
    middle: "Visita tu negocio",
    end: "Canjea su oferta",
  },
  {
    id: "prepago",
    name: "Prepago",
    icon: Layers,
    src: "/cards/prepago.png",
    business: "YOGA · GIMNASIOS · CLASES · SERVICIOS",
    title: "Cobra hoy las próximas visitas.",
    text: "Tu cliente te paga por adelantado un paquete: 10 clases, 10 cortes o 10 sesiones, por ejemplo. Cada vez que viene, descuentas una de su tarjeta. Tú ya cobraste; él tiene visitas pagadas por disfrutar.",
    benefit: "Cobras varias visitas hoy, en lugar de venderlas una por una.",
    detail: "Tú defines el paquete, cobras a tu cliente y registras cada uso.",
    action: "Te paga el paquete",
    middle: "Usa una sesión",
    end: "Ve cuántas le quedan",
  },
  {
    id: "regalo",
    name: "Regalo",
    icon: Gift,
    src: "/cards/regalo.png",
    business: "SPAS · SALONES · TIENDAS · RESTAURANTES",
    title: "Que alguien regale tu negocio y otro venga a descubrirlo.",
    text: "Un cliente te compra saldo para regalar una comida, un tratamiento o una compra. Quien recibe la tarjeta tiene ese saldo para disfrutar contigo: una nueva oportunidad de enamorarlo de tu negocio.",
    benefit: "Cobras el regalo y puedes conquistar a quien lo recibe.",
    detail: "Tú defines el saldo y las condiciones para utilizarlo.",
    action: "Alguien te compra",
    middle: "Regala el saldo",
    end: "Otro lo disfruta contigo",
  },
] as const;

export function CardShowcase() {
  const [selectedCard, setSelectedCard] = useState("sellos");
  const showcaseRef = useRef<HTMLDivElement>(null);

  const selectCard = (value: string) => {
    setSelectedCard(value);
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    requestAnimationFrame(() => {
      showcaseRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <Tabs
      ref={showcaseRef}
      value={selectedCard}
      onValueChange={selectCard}
      className="lv2-card-showcase"
    >
      <TabsList aria-label="Explora los ocho tipos de tarjeta" className="lv2-card-tabs">
        {CARD_EXAMPLES.map(({ id, name, icon: Icon }) => (
          <TabsTrigger key={id} value={id}>
            <Icon size={18} aria-hidden="true" />
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      {CARD_EXAMPLES.map((card) => (
        <TabsContent value={card.id} key={card.id} className="lv2-card-panel">
          <div className="lv2-card-story">
            <p className="sales-eyebrow">{card.business}</p>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div className="lv2-reward-path">
              <span>{card.action}</span>
              <ChevronRight size={16} />
              <span>{card.middle}</span>
              <ChevronRight size={16} />
              <strong>{card.end}</strong>
            </div>
            <p className="lv2-terms">{card.detail}</p>
          </div>
          <div className="lv2-card-preview">
            <Scene
              className="lv2-showcard"
              label={`Ejemplo de tarjeta de ${card.name.toLowerCase()} en un celular`}
            >
              <Phone>
                <div className="lv2-wallet-title">
                  Mi tarjeta <Wallet size={16} />
                </div>
                <CardImage src={card.src} />
              </Phone>
            </Scene>
            <p>
              <card.icon size={21} aria-hidden="true" />
              <strong>{card.benefit}</strong>
            </p>
          </div>
        </TabsContent>
      ))}
      <p className="lv2-card-picker-label">Elige otra forma de hacer que vuelvan</p>
      <p className="lv2-personalize">
        <Sparkles size={24} aria-hidden="true" />
        <span>
          <strong>Tu logo. Tus colores. Tu manera de premiar.</strong> Elige entre 8 tipos de
          tarjetas y 111 plantillas. Cada tarjeta lleva la identidad de tu negocio.
        </span>
      </p>
    </Tabs>
  );
}

function NotificationScene({ returning = false }: { returning?: boolean }) {
  return (
    <Scene
      className="lv2-notification-scene"
      label={
        returning
          ? "Un recordatorio automático invita a regresar al cliente que lleva tiempo sin una visita registrada."
          : "Una notificación push del negocio llega a la pantalla de bloqueo del celular del cliente."
      }
    >
      <Phone className="lv2-lock-phone">
        <div className="lv2-lock-date">Martes, 10 de septiembre</div>
        <div className="lv2-lock-time">16:20</div>
        <div className="lv2-notification">
          <div className="lv2-notification-top">
            <Wallet size={19} />
            <span>BRUMA CAFÉ</span>
            <small>ahora</small>
          </div>
          <strong>
            {returning ? "Tu café de siempre te espera ☕" : "¿Una pausa para tu café favorito?"}
          </strong>
          <p>
            {returning
              ? "Hace tiempo que no te vemos. Vuelve y sigue sumando para tu próxima recompensa."
              : "Hoy es un buen día para volver. Con tu próxima compra, sigues sumando puntos."}
          </p>
        </div>
        <div className="lv2-lock-bottom">
          <span>●</span>
          <span>●</span>
        </div>
      </Phone>
      <span className="lv2-scene-caption">
        Ejemplo de {returning ? "recordatorio automático" : "notificación push"}
      </span>
    </Scene>
  );
}

function ProximityScene() {
  return (
    <Scene
      className="lv2-proximity-scene"
      label="Un cliente con tu tarjeta pasa cerca de tu negocio. En su iPhone aparece un aviso de cercanía, dentro de 100 metros de tu ubicación configurada."
    >
      <div className="lv2-map">
        <div className="lv2-map-road lv2-road-a" />
        <div className="lv2-map-road lv2-road-b" />
        <div className="lv2-map-road lv2-road-c" />
        <div className="lv2-map-radius" />
        <div className="lv2-shop-pin">
          <MapPin size={28} />
          <strong>Tu negocio</strong>
        </div>
        <span className="lv2-distance">100 m</span>
        <div className="lv2-customer-dot" />
      </div>
      <Phone className="lv2-geo-phone">
        <div className="lv2-lock-date">Una buena coincidencia</div>
        <div className="lv2-lock-time">17:10</div>
        <div className="lv2-notification">
          <div className="lv2-notification-top">
            <Wallet size={19} />
            <span>BRUMA CAFÉ</span>
          </div>
          <strong>Tu café favorito está cerca.</strong>
          <p>Pasa por Bruma y sigue sumando hacia tu recompensa.</p>
        </div>
      </Phone>
      <span className="lv2-scene-caption">Ejemplo de aviso por cercanía</span>
    </Scene>
  );
}

function ActivityScene() {
  return (
    <Scene
      className="lv2-activity-scene"
      label="Ejemplo ilustrativo de analítica en tiempo real: visitas registradas y recompensas canjeadas en el programa de lealtad."
    >
      <div className="lv2-activity-panel">
        <div className="lv2-panel-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="lv2-activity-heading">
          <div>
            <small>ANALÍTICA EN TIEMPO REAL</small>
            <strong>Lo que pasa en tu programa.</strong>
          </div>
          <BarChart3 size={25} />
        </div>
        <div className="lv2-metrics">
          <div>
            <span>Visitas registradas</span>
            <strong>24</strong>
          </div>
          <div>
            <span>Premios canjeados</span>
            <strong>3</strong>
          </div>
        </div>
        <div className="lv2-chart">
          {[35, 56, 44, 77, 63, 90, 72].map((n, i) => (
            <i key={i} style={{ height: `${n}%`, animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
        <div className="lv2-chart-labels">
          <span>L</span>
          <span>M</span>
          <span>M</span>
          <span>J</span>
          <span>V</span>
          <span>S</span>
          <span>D</span>
        </div>
        <div className="lv2-activity-latest">
          <Check size={17} />
          <span>Una nueva visita registrada</span>
          <small>Ahora</small>
        </div>
        <p>Ejemplo con datos ilustrativos</p>
      </div>
    </Scene>
  );
}

function ReferralScene() {
  return (
    <Scene
      className="lv2-referral-scene"
      label="Ejemplo de invitación de un cliente a sus amigos mediante su enlace de referido."
    >
      <Phone className="lv2-referral-phone">
        <div className="lv2-wallet-title">
          Invita a tus amigos <Share2 size={17} />
        </div>
        <div className="lv2-invite-content">
          <div className="lv2-invite-symbol">
            <Gift size={40} />
          </div>
          <span>BRUMA CAFÉ</span>
          <h4>
            Un café.
            <br />
            Buena compañía.
          </h4>
          <p>Comparte tu enlace. Tus amigos descubren Bruma y tú ganas recompensas.</p>
          <div className="lv2-invite-link">
            Tu enlace para invitar <Share2 size={17} />
          </div>
          <div className="lv2-invite-sent">
            <Check size={15} /> Invitación compartida
          </div>
        </div>
      </Phone>
      <span className="lv2-scene-caption">Ejemplo de invitación por referido</span>
    </Scene>
  );
}

export function ContactShowcase() {
  const [selectedBenefit, setSelectedBenefit] = useState("mensajes");
  const contactRef = useRef<HTMLDivElement>(null);
  const benefits = [
    {
      id: "mensajes",
      icon: Bell,
      name: "Notificaciones push",
      shortName: "Mensajes",
      plan: "EN TODOS LOS PLANES",
      title: "¿Día flojo? Ve por quienes ya saben por qué elegirte.",
      text: "Envía una oferta, una novedad o una invitación a quienes guardaron tu tarjeta. Son notificaciones push: mensajes de tu negocio que aparecen en su celular y te permiten provocar una visita sin esperar a que recuerden buscarte.",
      payoff: "En vez de mirar la puerta, tienes a quién invitar a volver.",
      scene: <NotificationScene />,
    },
    {
      id: "cercania",
      icon: MapPin,
      name: "Geo-localización",
      shortName: "Cercanía",
      plan: "EN TODOS LOS PLANES",
      title: "Está cerca de tu negocio. Haz que piense en entrar.",
      text: "Tu tarjeta puede activar un aviso de cercanía en Apple Wallet cuando el cliente entra al radio de 100 metros de una ubicación configurada. Su premio pendiente aparece justo cuando pasar por tu negocio es fácil.",
      payoff: "Una persona que iba de paso puede recordar que contigo tiene algo por ganar.",
      scene: <ProximityScene />,
    },
    {
      id: "visitas",
      icon: BarChart3,
      name: "Analítica en tiempo real",
      shortName: "Visitas",
      plan: "EN TODOS LOS PLANES",
      title: "Deja de preguntarte si regresan. Mira lo que sí está pasando.",
      text: "La analítica en tiempo real reúne las visitas y los premios que registra tu equipo. Puedes ver quién repite y qué canjea, sin llevar otra libreta ni depender de la memoria de quien estaba en caja.",
      payoff: "Tus decisiones parten de movimientos registrados, no de corazonadas.",
      scene: <ActivityScene />,
    },
    {
      id: "referidos",
      icon: Users,
      name: "Referidos y reseñas",
      shortName: "Referidos",
      plan: "DESDE TURBO",
      title: "Si salió encantado, que no se quede solo en un “te recomiendo”.",
      text: "Con el programa de referidos automatizado, tu cliente comparte su enlace y puedes premiar sus recomendaciones. Las solicitudes automáticas de reseñas en Google lo invitan a contar su experiencia para ayudar a otros a elegirte.",
      payoff: "Convierte una buena experiencia en una invitación que sí puede circular.",
      scene: <ReferralScene />,
    },
    {
      id: "regreso",
      icon: MessageCircle,
      name: "Clientes inactivos",
      shortName: "Regreso",
      plan: "EN COHETE",
      title: "No descubras demasiado tarde que tu cliente habitual dejó de venir.",
      text: "Elige cuántos días deben pasar desde la última visita registrada. Lealtio envía tu recordatorio al cumplirse ese plazo: así funciona la recuperación automática de clientes inactivos, sin escribirles uno por uno.",
      payoff: "La invitación sale aunque tú estés ocupado atendiendo el negocio.",
      scene: <NotificationScene returning />,
    },
  ];

  const selectBenefit = (value: string) => {
    setSelectedBenefit(value);
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    requestAnimationFrame(() => {
      contactRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <Tabs
      ref={contactRef}
      value={selectedBenefit}
      onValueChange={selectBenefit}
      className="lv2-contact"
    >
      <TabsList
        className="lv2-feature-tabs"
        aria-label="Explora las cinco funciones para que tus clientes vuelvan"
      >
        {benefits.map(({ id, icon: Icon, name, shortName }) => (
          <TabsTrigger key={id} value={id} aria-label={name}>
            <Icon size={19} aria-hidden="true" />
            <span className="lv2-tab-full">{name}</span>
            <span className="lv2-tab-short" aria-hidden="true">
              {shortName}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {benefits.map(({ id, name, plan, title, text, payoff, scene }) => (
        <TabsContent key={id} value={id} className="lv2-feature-panel">
          <div className="lv2-feature-story">
            <p className="sales-eyebrow">{plan}</p>
            <span className="lv2-feature-name">{name}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong className="lv2-step-payoff">{payoff}</strong>
          </div>
          <div className="lv2-feature-visual">{scene}</div>
        </TabsContent>
      ))}
      <p className="lv2-feature-picker-label">Elige otra forma de traerlos de vuelta</p>
    </Tabs>
  );
}

export function FamiliarStrategy() {
  return (
    <aside className="lv2-familiar sales-wrap" aria-labelledby="familiar-title">
      <div className="lv2-familiar-copy">
        <p className="sales-eyebrow">LA LÓGICA QUE LAS GRANDES CADENAS NO DEJAN AL AZAR</p>
        <h2 id="familiar-title">
          Ellas convierten cada compra en una razón para volver.
          <br />
          <span>Ahora tú puedes hacerlo con tu propia marca.</span>
        </h2>
        <p>
          Starbucks, Sephora y McDonald’s usan puntos, progreso y recompensas para seguir presentes
          después de cobrar. Lealtio pone esa misma lógica comercial a tu alcance, sin que tengas
          que desarrollar y mantener una plataforma desde cero.
        </p>
        <p className="lv2-familiar-payoff">
          Tu negocio ya hace la parte difícil: atraer y atender bien.{" "}
          <strong>Ahora puede dejar una razón visible para que vuelvan.</strong>
        </p>
        <a className="sales-text-link" href="#planes">
          Quiero ponerlo en mi negocio <ArrowRight size={18} />
        </a>
      </div>
      <div
        className="lv2-familiar-visual"
        role="img"
        aria-label="Starbucks, Sephora y McDonald’s convierten compras en progreso y recompensas. Lealtio permite aplicar esa lógica con la marca de un negocio local."
      >
        <div className="lv2-brand-row">
          <span>Starbucks Rewards</span>
          <span>Sephora Rewards</span>
          <span>MiMcDonald’s</span>
        </div>
        <div className="lv2-brand-flow">
          <span>
            <small>01</small>Compra
          </span>
          <ChevronRight size={18} />
          <span>
            <small>02</small>Avanza
          </span>
          <ChevronRight size={18} />
          <span>
            <small>03</small>Quiere volver
          </span>
        </div>
        <div className="lv2-own-pass">
          <div className="lv2-own-pass-top">
            <span>TU MARCA</span>
            <small>SU PRÓXIMO PREMIO</small>
          </div>
          <strong>4 de 6 visitas</strong>
          <div className="lv2-own-pass-stamps" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <i className={item < 4 ? "is-earned" : ""} key={item}>
                {item < 4 ? "✓" : ""}
              </i>
            ))}
          </div>
          <p>Le faltan 2 para ganar</p>
        </div>
        <div className="lv2-familiar-badge">
          <Sparkles size={17} /> LA ESTRATEGIA, CON TU NOMBRE
        </div>
      </div>
    </aside>
  );
}
