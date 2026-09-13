# Lealtio — Página de ventas

Página de venta directa de Lealtio, una plataforma de programas de lealtad digitales para negocios locales.

## Desarrollo local

Necesitas Node.js y npm.

```sh
npm install
npm run dev
```

La aplicación se abrirá en la dirección indicada por Vite.

## Verificaciones

```sh
npm run build
npx tsc --noEmit
node scripts/verify-offer.mjs
```

El verificador protege los tres planes, sus precios, límites, prestaciones, los 14 días de prueba, la paleta y los recursos obligatorios.

## Enlaces de registro o pago

Copia `.env.example` como `.env.local` y completa el enlace general o los enlaces específicos por plan. No guardes credenciales ni enlaces privados en Git.

## Versiones

Cada entrega terminada se guarda como un commit. GitHub conserva el historial completo para comparar cambios o recuperar una versión anterior.
