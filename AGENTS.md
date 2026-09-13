# Flujo de trabajo del repositorio

- Este es el repositorio canónico de la página de ventas de Lealtio.
- No envíes cambios a ningún otro repositorio de GitHub.
- Después de completar y comprobar una modificación solicitada por el propietario, crea un commit descriptivo y envíalo a `origin/main`, salvo que el propietario pida expresamente mantenerla solo en local.
- Conserva el historial: no uses `push --force`, rebase, squash ni amend sobre commits ya publicados.
- Antes de cada envío, ejecuta las verificaciones pertinentes y `node scripts/verify-offer.mjs` cuando el cambio pueda afectar planes, precios, prestaciones, prueba, paleta o recursos obligatorios.
