import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/sales-page";
import heroPhones from "@/assets/hero-phones.webp";
import heroPhonesSmall from "@/assets/hero-phones-600.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        href: heroPhones,
        as: "image",
        type: "image/webp",
        fetchPriority: "high",
        imageSrcSet: `${heroPhonesSmall} 600w, ${heroPhones} 900w`,
        imageSizes: "(max-width: 760px) calc(100vw - 80px), 540px",
      },
    ],
  }),
  component: SalesPage,
});
