# Lealtio: demostraciones visuales y presentación final

10 de septiembre de 2026.

## Cambios pedidos

- Eliminado el aviso de registro pendiente y el aspecto desactivado de los botones. Las llamadas de cada plan dicen «Quiero Impulso», «Quiero Turbo» y «Quiero Cohete». Conservan la preparación de enlaces generales o por plan/modalidad en `src/lib/lealtio-offer.ts`. Cuando no hay URL son botones sin navegación, como pidió el propietario; no simulan registro ni pago.
- Restaurada la cinta **MÁS POPULAR** en Turbo, tomada de la página original y solicitada expresamente por el propietario. No se afirma haber realizado pruebas A/B nuevas.
- Sustituida la imagen única de funcionamiento por tres demostraciones: personalizar la tarjeta y elegir el premio; escanear el QR y guardar la tarjeta; escanear la tarjeta del cliente y registrar una visita.
- Galería con los ocho diseños aportados, sus mecánicas, beneficios y secuencias de uso. Se conservan los PNG originales byte por byte; no se retocan textos, colores, personas ni códigos de las tarjetas. Los montos y beneficios que contienen pertenecen a los ejemplos, no a los precios de Lealtio.
- Escenas de notificación en pantalla de bloqueo, visitas registradas, invitación de referidos, solicitud de reseña y recordatorio tras inactividad. Se presentan como ilustraciones, no como capturas auténticas ni actividad real de clientes.
- Eliminadas las insignias de Wallet de preguntas frecuentes. La explicación de Apple Wallet y Google Wallet se sitúa junto al registro de la tarjeta, sin apariencia de descarga de una app de Lealtio.

La revisión posterior a la grabación reemplaza las escenas iniciales: tres filas amplias, mostrador fotográfico con QR y teléfono inclinado, y escáner de tarjeta con una barra azul. Las animaciones empiezan al entrar en pantalla y terminan antes de cinco segundos. Se eliminó «Ver de nuevo». La preferencia de movimiento reducido conserva una representación estática comprensible. Cada escena escala de forma uniforme; las escenas de un solo teléfono tienen un encuadre móvil ampliado. Las tarjetas se cargan de forma diferida.

Las cinco funciones de contacto comparten ahora un único selector y el mismo diseño de panel, según la revisión del 10 de septiembre: notificaciones push, geolocalización, analítica, referidos/reseñas y clientes inactivos. Se retiró la tarjeta metida en la pantalla de bloqueo. El uso del celular y Apple/Google Wallet tiene beneficios destacados. La explicación de equipos, ubicaciones y notificaciones se integra antes y dentro de los planes; se eliminó el glosario inferior. Las condiciones por dispositivo permanecen en la respuesta pertinente de preguntas frecuentes.

## Revisión final del 10 de septiembre

- Recuperada la comparación de seis situaciones sin/con Lealtio, con el lado positivo destacado y pares apilados en móvil.
- Corregidos el contraste de los mockups claros dentro de la sección oscura, la cinta de Turbo y la alineación de las introducciones. El segundo renglón del dolor inicial usa el violeta de marca.
- Los paneles de tarjetas y funciones se apilan hasta 950 px para mantener legibles los visuales en tablet. En móvil, las cinco pestañas usan etiquetas cortas y conservan el nombre completo dentro del panel y en su etiqueta accesible.
- Eliminadas las comillas angulares y corregidas las frases afectadas. El mensaje de grandes marcas expresa acceso a la estrategia sin inventar gastos ni afiliaciones.
- La barra móvil inferior se eliminó en la revisión responsive del 12 de septiembre porque cubría texto y visuales al desplazarse. El botón de prueba continúa disponible en el encabezado y dentro de las secciones de decisión.
- Revisión real en navegador: anchos de 320, 390, 820, 1024 y 1440 px; sin desbordamiento horizontal en las vistas comprobadas. Revisados los tres pasos en móvil, el mockup de referidos, la comparación, las ocho tarjetas, las cinco funciones y el cambio mensual/anual. Los teléfonos comprobados no recortan su contenido interno. Sin errores de consola al cierre de estas comprobaciones.
- Compilación, TypeScript, ESLint de los componentes modificados y verificación de la oferta completados correctamente. No se publicaron cambios ni se conectaron pagos.

## Navegación móvil de tarjetas (12 de septiembre)

En pantallas de hasta 760 px, la tarjeta seleccionada se presenta antes del selector. Las ocho opciones aparecen debajo del contenido y, al elegir una, la página vuelve suavemente al comienzo del texto de esa tarjeta; si el dispositivo pide reducir movimiento, el salto es inmediato. El mockup se redujo y mantiene su proporción. En tablet se conserva el selector superior y el visual queda limitado a un ancho legible, sin crecer con toda la columna.

La sección «Que salir de tu negocio no sea dejar de comprarte» utiliza el mismo patrón en móvil: primero muestra la explicación y el visual de la función elegida; después ofrece las cinco opciones. Al cambiar entre Mensajes, Cercanía, Visitas, Referidos y Regreso, la página vuelve al inicio del panel activo. Los mockups se encuadran dentro de un ancho máximo específico para móvil y tablet, mientras que en escritorio el selector se mantiene sobre el panel.

## Revisión integral responsive (12 de septiembre)

- Revisada la página completa en 320, 390, 580, 760, 820, 1024 y 1440 px. No se detectó desbordamiento horizontal, imágenes rotas, texto cortado ni cruces entre las secciones principales.
- Añadida separación antes del primer paso de «Cómo funciona» en móvil y antes del selector de tarjetas en tablet y escritorio. En móvil, el panel seleccionado conserva su margen propio y no duplica el espacio.
- Eliminada la barra inferior fija que se superponía al contenido en pantallas pequeñas. También se ajustó el pie de página para retirar el espacio reservado que ya no era necesario.
- Comprobados visualmente el encabezado, los pasos, los ocho tipos de tarjeta, las cinco funciones, los tres planes, la comparación, preguntas frecuentes y el cierre. Las verificaciones de TypeScript, ESLint, compilación y preservación de la oferta terminaron correctamente.

## Referencia a grandes marcas

La afirmación utilizada es que estas marcas premian las compras con estrellas o puntos, y que un negocio puede aplicar esa idea con Lealtio. Fuentes oficiales consultadas:

- [Starbucks Rewards México](https://rewards.starbucks.mx/faq/rewards): estrellas por compras y canje por productos, según condiciones.
- [Sephora Rewards México](https://www.sephora.com.mx/beauty-club): puntos por compras y recompensas.
- [MiMcDonald's México](https://cloud.news.mcdonalds.com.mx/MX_MiMcDonalds): puntos y canje de productos en su programa.

Los nombres ahora son texto plano, sin enlaces externos en la página. Las fuentes quedan únicamente en este documento de trabajo. No se afirma que utilicen Boomerangme o Lealtio, que sean clientes de Lealtio, que exista afiliación ni que su desarrollo cueste una cantidad concreta. Las fuentes revisadas no permiten sostener esas afirmaciones.

## Oferta y comprobaciones

Los tres planes, precios, límites y 31 prestaciones se comparan con la versión original mediante `scripts/verify-offer.mjs`. Se mantienen los 14 días, la paleta original, el logo y la prueba social autorizada de cinco retratos y «+50 negocios…». Las funciones de referidos/reseñas se identifican desde Turbo y la recuperación automática en Cohete.

Esta revisión reemplaza las referencias a un aviso de registro pendiente en los documentos anteriores. Los enlaces de pago se pueden añadir más adelante sin rediseñar la página.

## Fondo del mostrador

Creado con la herramienta integrada `image_gen`, inspeccionado y guardado en `public/scenes/mostrador-lealtio.png` (1536 × 1024). Las tarjetas del propietario no fueron editadas. El teléfono, el cartel y la animación se componen en la página.

Prompt final empleado:

> Use case: photorealistic-natural. Asset type: background photograph for a professional animated mobile loyalty-card scanning demonstration on a sales landing page. Create ONE photorealistic landscape image, 1536 x 1024, aspect ratio 3:2. Scene: a welcoming premium independent coffee shop, photographed from the customer side of the service counter. Close editorial interior photography, refined and real rather than corporate luxury. Composition: a broad completely empty light cream-white marble countertop fills approximately the lower 40 percent of the frame. The countertop is unobstructed across the entire image. Above it, a quiet softly defocused café interior with discreet espresso equipment well back and subtly to the far left, a small soft hint of greenery, warm off-white plaster, and natural wood. Leave especially generous visually quiet negative space in the center and right, because a QR-code display stand and a large floating smartphone will be composited later in HTML. DO NOT include those objects in this photograph. Camera: straight-on, eye level slightly above the countertop, gentle shallow depth of field; countertop edge and marble texture remain crisp, background softly blurred. Natural proportions. Clean intentional art direction. Lighting: soft diffused daylight, luminous airy neutral cream and beige palette, gentle realistic shadows, approachable and calm. Constraints: NO people, NO hands, NO phones, NO QR codes, NO signs, NO menus, NO posters, NO text, NO logos, NO watermarks, NO foreground objects. The marble counter must remain completely clear. Avoid clutter, dramatic lighting, dark interiors, saturated colors, glossy synthetic 3D-render appearance.
