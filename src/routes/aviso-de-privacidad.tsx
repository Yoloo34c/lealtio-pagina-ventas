import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad | Lealtio" },
      {
        name: "description",
        content: "Conoce cómo Lealtio recopila, utiliza y protege los datos personales.",
      },
    ],
  }),
  component: PrivacyNotice,
});

function PrivacyNotice() {
  return (
    <LegalPage
      eyebrow="TU INFORMACIÓN, EXPLICADA CON CLARIDAD"
      title="Aviso de privacidad"
      intro="Este aviso explica qué información trata Lealtio, para qué la utiliza y cómo puedes ejercer tus derechos sobre ella."
    >
      <LegalSection title="1. Datos que podemos tratar">
        <p>Según la forma en que utilices el sitio o el servicio, podemos tratar:</p>
        <ul>
          <li>Nombre, correo electrónico, teléfono y datos de contacto.</li>
          <li>Nombre comercial, giro y datos necesarios para configurar la cuenta del negocio.</li>
          <li>Datos de acceso, configuración, soporte y actividad dentro de la plataforma.</li>
          <li>Datos de facturación y referencias de las operaciones realizadas.</li>
          <li>
            Información que el negocio incorpora a sus programas de lealtad, como datos de contacto
            de sus clientes, participación, visitas, puntos, sellos, recompensas y canjes.
          </li>
          <li>
            Información técnica, como dirección IP, navegador, dispositivo, registros de seguridad y
            cookies necesarias para operar el sitio.
          </li>
        </ul>
        <p>
          Lealtio no almacena los números completos de las tarjetas bancarias. Esa información es
          recibida y procesada directamente por el proveedor de pagos utilizado en cada compra.
        </p>
      </LegalSection>

      <LegalSection title="2. Para qué utilizamos la información">
        <p>Utilizamos la información para finalidades necesarias, entre ellas:</p>
        <ul>
          <li>Crear, operar y proteger tu cuenta.</li>
          <li>Configurar y prestar las funciones del programa de lealtad contratado.</li>
          <li>Procesar suscripciones, pagos, renovaciones y comprobantes mediante terceros.</li>
          <li>Atender dudas, solicitudes técnicas, cancelaciones y aclaraciones.</li>
          <li>Prevenir fraude, usos indebidos e incidentes de seguridad.</li>
          <li>Cumplir obligaciones legales y conservar registros necesarios.</li>
        </ul>
        <p>
          También podremos enviarte novedades o información comercial de Lealtio. Puedes dejar de
          recibir esas comunicaciones escribiendo a hola@lealtio.com o utilizando el enlace de baja
          incluido en el mensaje, cuando esté disponible.
        </p>
      </LegalSection>

      <LegalSection title="3. Datos de los clientes de cada negocio">
        <p>
          Cada negocio que utiliza Lealtio decide qué datos solicita a sus propios clientes y con
          qué finalidad los utiliza. El negocio es responsable de contar con las autorizaciones y
          avisos necesarios. Lealtio trata esa información para prestar la plataforma y conforme a
          las instrucciones del negocio que contrató el servicio.
        </p>
      </LegalSection>

      <LegalSection title="4. Proveedores y transferencias">
        <p>
          Para prestar el servicio podemos compartir la información estrictamente necesaria con
          proveedores de infraestructura, alojamiento, comunicaciones, billeteras digitales,
          prevención de fraude, procesamiento de pagos y otros servicios técnicos necesarios para
          operar Lealtio. Estos proveedores pueden incluir, según la modalidad utilizada, a Mercado
          Pago, Stripe, Cloudflare, Apple y Google.
        </p>
        <p>
          Algunos proveedores pueden procesar información fuera de México conforme a sus propias
          políticas y medidas de seguridad. Lealtio no vende ni alquila datos personales.
        </p>
      </LegalSection>

      <LegalSection title="5. Conservación y seguridad">
        <p>
          Conservamos la información durante el tiempo necesario para prestar el servicio, atender
          obligaciones legales, resolver aclaraciones y proteger la operación. Aplicamos medidas
          razonables de seguridad; sin embargo, ningún sistema conectado a internet puede garantizar
          seguridad absoluta.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies y datos técnicos">
        <p>
          El sitio puede utilizar cookies técnicas necesarias para recordar preferencias, mantener
          sesiones y proteger el servicio. Si en el futuro incorporamos herramientas de analítica o
          publicidad que requieran información adicional, actualizaremos este aviso y solicitaremos
          el consentimiento correspondiente cuando resulte aplicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Tus derechos ARCO">
        <p>
          Puedes solicitar acceso, rectificación, cancelación u oposición respecto de tus datos, así
          como revocar tu consentimiento o limitar su uso. Envía tu solicitud a{" "}
          <a href="mailto:hola@lealtio.com">hola@lealtio.com</a> con el asunto “Derechos ARCO” e
          incluye tu nombre, el correo relacionado con la cuenta, el derecho que deseas ejercer y la
          información necesaria para localizar tus datos. Podremos solicitar elementos para
          verificar tu identidad antes de atender la solicitud.
        </p>
      </LegalSection>

      <LegalSection title="8. Cambios a este aviso">
        <p>
          Podemos actualizar este aviso cuando cambien el servicio, los proveedores o las
          obligaciones aplicables. La versión vigente siempre estará disponible en esta página y
          mostrará la fecha de su última actualización.
        </p>
      </LegalSection>

      <LegalSection title="9. Responsable y contacto">
        <p>
          El responsable del tratamiento de los datos descritos en este aviso es{" "}
          <strong>Eduardo B Cano</strong>, quien opera Lealtio desde el Estado de México, México.
          Para solicitudes relacionadas con privacidad puedes escribir a{" "}
          <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
