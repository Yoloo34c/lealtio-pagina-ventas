import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Lealtio" },
      {
        name: "description",
        content: "Consulta las condiciones aplicables al uso y contratación de Lealtio.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="REGLAS CLARAS DESDE EL PRINCIPIO"
      title="Términos y condiciones"
      intro="Estas condiciones regulan el acceso, la contratación y el uso de Lealtio. Las condiciones concretas mostradas antes de completar cada compra forman parte de este acuerdo."
    >
      <LegalSection title="1. Qué es Lealtio">
        <p>
          Lealtio permite a negocios crear y administrar programas digitales de lealtad, tarjetas,
          recompensas, comunicaciones y otras funciones relacionadas con la fidelización de
          clientes. Las funciones disponibles dependen del plan u oferta vigente que el cliente
          elija.
        </p>
      </LegalSection>

      <LegalSection title="2. Contratación y aceptación">
        <p>
          Al crear una cuenta, iniciar una prueba o completar una compra declaras que tienes
          capacidad para contratar y que aceptas estos términos, el aviso de privacidad, la política
          de cancelaciones y las condiciones específicas mostradas en el registro o pago.
        </p>
        <p>
          Si contratas en nombre de un negocio, declaras que cuentas con autorización para obligarlo
          respecto del servicio.
        </p>
      </LegalSection>

      <LegalSection title="3. Activación y entrega digital">
        <p>
          Lealtio es un servicio digital y no implica el envío de productos físicos. El acceso se
          habilita normalmente el mismo día en que el registro o pago queda aprobado. Si ocurre una
          validación o incidencia técnica, la activación puede tomar hasta 24 horas.
        </p>
      </LegalSection>

      <LegalSection title="4. Planes, precios y funciones">
        <p>
          Los planes, precios, periodos de facturación, límites, funciones, descuentos y promociones
          vigentes son los que se muestran antes de completar el registro o pago. Lealtio puede
          crear, modificar o retirar ofertas para contrataciones futuras.
        </p>
        <p>
          Un cambio futuro no reduce el periodo que ya fue pagado. Cuando un cambio afecte una
          renovación posterior, se mostrará o comunicará antes de que corresponda el siguiente
          cobro, cuando resulte aplicable.
        </p>
      </LegalSection>

      <LegalSection title="5. Pruebas gratuitas y promociones">
        <p>
          Lealtio puede ofrecer pruebas gratuitas con o sin método de pago, según la promoción
          vigente. Antes de comenzar se mostrará si la prueba requiere una tarjeta, su duración, el
          plan elegido, la frecuencia y el importe que se cobrará al terminar.
        </p>
        <p>
          Cuando la oferta incluya renovación automática, el cliente autoriza el cobro indicado si
          no solicita la cancelación antes de que termine la prueba. La cancelación puede
          solicitarse en <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="6. Pagos y renovaciones">
        <p>
          Los pagos se procesan mediante el proveedor que aparezca en la pantalla de compra, como
          Mercado Pago o Stripe. Lealtio no almacena los datos completos de la tarjeta. Al elegir
          una suscripción recurrente autorizas los cobros con la frecuencia y por el importe que se
          muestren antes de pagar.
        </p>
        <p>
          Los impuestos, moneda y condiciones de facturación aplicables se presentan junto al
          precio. Un pago puede ser rechazado o reintentado conforme a las reglas del proveedor de
          pagos.
        </p>
      </LegalSection>

      <LegalSection title="7. Cancelaciones y reembolsos">
        <p>
          Puedes cancelar una suscripción para detener su siguiente renovación. El acceso continuará
          hasta el final del periodo ya pagado. Los periodos ya iniciados no se reembolsan ni se
          prorratean, salvo cobro duplicado, error atribuible a Lealtio o cuando la legislación
          aplicable exija otra solución.
        </p>
      </LegalSection>

      <LegalSection title="8. Cuenta y responsabilidades del cliente">
        <p>
          El cliente debe proporcionar información verdadera, proteger sus accesos y mantener
          actualizados sus datos de contacto y pago. También es responsable de configurar de forma
          lícita sus programas, recompensas, mensajes y reglas, y de contar con autorización para
          tratar los datos de sus propios clientes.
        </p>
      </LegalSection>

      <LegalSection title="9. Uso permitido">
        <p>No está permitido utilizar Lealtio para:</p>
        <ul>
          <li>Cometer fraude, suplantar identidades o infringir derechos de terceros.</li>
          <li>Enviar mensajes ilegales, engañosos o sin las autorizaciones necesarias.</li>
          <li>Intentar vulnerar la seguridad, disponibilidad o funcionamiento de la plataforma.</li>
          <li>Ofrecer productos o actividades prohibidas por la legislación aplicable.</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Disponibilidad y soporte">
        <p>
          Trabajamos para mantener el servicio disponible, pero pueden existir interrupciones por
          mantenimiento, proveedores, internet o causas fuera de nuestro control. Atenderemos las
          incidencias razonablemente y podremos modificar funciones para mantener la seguridad y
          operación del producto.
        </p>
      </LegalSection>

      <LegalSection title="11. Propiedad intelectual">
        <p>
          Lealtio, su identidad visual, el sitio y sus materiales están protegidos por las normas
          aplicables. El cliente conserva los derechos sobre sus marcas y contenidos y concede los
          permisos necesarios para mostrarlos y procesarlos dentro del servicio contratado.
        </p>
      </LegalSection>

      <LegalSection title="12. Suspensión o terminación">
        <p>
          Podemos suspender una cuenta por falta de pago, fraude, riesgo de seguridad, uso ilegal o
          incumplimiento grave de estos términos. Cuando sea razonablemente posible, informaremos al
          cliente y daremos oportunidad de corregir el problema.
        </p>
      </LegalSection>

      <LegalSection title="13. Legislación aplicable y cambios">
        <p>
          Estos términos se interpretan conforme a las leyes aplicables en México, sin limitar los
          derechos irrenunciables que correspondan al consumidor. Podemos actualizarlos para
          reflejar cambios en el servicio o en la legislación. La versión vigente y su fecha estarán
          disponibles en esta página.
        </p>
      </LegalSection>

      <LegalSection title="14. Prestador del servicio y contacto">
        <p>
          Lealtio es un producto digital operado por <strong>Eduardo B Cano</strong> desde el Estado
          de México, México. Para dudas sobre el servicio o estas condiciones, escribe a{" "}
          <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
