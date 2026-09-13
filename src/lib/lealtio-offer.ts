// Precios y prestaciones conservados de la oferta original, commit fa24cb4.
export const PLANS = [
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
] as const;

export type BillingPeriod = "monthly" | "annual";
export const formatMXN = (amount: number) => `$${amount.toLocaleString("es-MX")}`;

// Usar únicamente enlaces de alta/pago confirmados por el propietario.
// Un enlace específico tiene prioridad sobre el enlace general.
const SIGNUP_LINKS: Record<string, Partial<Record<BillingPeriod, string>>> = {
  Impulso: {
    monthly: import.meta.env.VITE_SIGNUP_IMPULSO_MONTHLY,
    annual: import.meta.env.VITE_SIGNUP_IMPULSO_ANNUAL,
  },
  Turbo: {
    monthly: import.meta.env.VITE_SIGNUP_TURBO_MONTHLY,
    annual: import.meta.env.VITE_SIGNUP_TURBO_ANNUAL,
  },
  Cohete: {
    monthly: import.meta.env.VITE_SIGNUP_COHETE_MONTHLY,
    annual: import.meta.env.VITE_SIGNUP_COHETE_ANNUAL,
  },
};

export function getSignupUrl(plan: string, period: BillingPeriod): string | null {
  const raw = SIGNUP_LINKS[plan]?.[period] || import.meta.env.VITE_LEALTIO_SIGNUP_URL;
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}
