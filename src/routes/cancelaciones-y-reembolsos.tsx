import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/cancelaciones-y-reembolsos")({
  head: () => ({
    meta: [
      { title: "Cancelaciones y reembolsos | Lealtio" },
      {
        name: "description",
        content: "Consulta cómo cancelar una prueba o suscripción de Lealtio.",
      },
    ],
  }),
  component: CancellationPolicy,
});

function CancellationPolicy() {
  return (
    <LegalPage
      eyebrow="SIN LETRAS PEQUEÑAS"
      title="Cancelaciones y reembolsos"
      intro="Aquí explicamos cómo detener una renovación, qué ocurre con el acceso ya pagado y cuándo puede proceder una devolución."
    >
      <LegalSection title="1. Cómo solicitar una cancelación">
        <p>
          Escribe a <a href="mailto:hola@lealtio.com">hola@lealtio.com</a> desde el correo
          relacionado con tu cuenta. Incluye tu nombre, el nombre de tu negocio y, si lo tienes, el
          comprobante o identificador del pago. Te confirmaremos por correo cuando la solicitud haya
          sido procesada.
        </p>
      </LegalSection>

      <LegalSection title="2. Cancelación durante una prueba gratuita">
        <p>
          Algunas promociones pueden solicitar un método de pago y otras no. La condición aplicable
          se muestra antes de comenzar. Si tu prueba contempla un cobro automático al terminar,
          debes enviar la solicitud antes de la fecha y hora de vencimiento indicadas para evitar
          ese cobro.
        </p>
        <p>
          Al cancelar durante la prueba, podrás utilizar el servicio hasta que termine el periodo
          gratuito, salvo que se indique algo distinto por seguridad o uso indebido.
        </p>
      </LegalSection>

      <LegalSection title="3. Cancelación de una suscripción pagada">
        <p>
          Puedes solicitar la cancelación en cualquier momento. La cancelación detiene la siguiente
          renovación automática y el servicio continúa disponible hasta el último día del periodo
          que ya pagaste. Después de esa fecha no se realizará otro cobro recurrente.
        </p>
        <p>
          Para evitar una renovación, la solicitud debe recibirse antes de que el proveedor procese
          el siguiente cobro.
        </p>
      </LegalSection>

      <LegalSection title="4. Política de reembolsos">
        <p>
          Los pagos correspondientes a periodos ya iniciados no son reembolsables y no se realizan
          devoluciones proporcionales por días no utilizados. Esta regla permite que el acceso
          continúe hasta terminar el periodo pagado.
        </p>
        <p>
          Revisaremos los casos de cobro duplicado, importe incorrecto o error atribuible a Lealtio.
          También respetaremos cualquier devolución que resulte obligatoria conforme a la
          legislación aplicable.
        </p>
      </LegalSection>

      <LegalSection title="5. Cómo se procesa una devolución aprobada">
        <p>
          Cuando una devolución proceda, se solicitará a través del mismo proveedor y medio
          utilizados para el pago. El tiempo en que el dinero aparece depende de Mercado Pago,
          Stripe, el banco o el emisor del medio de pago. Lealtio enviará la confirmación disponible
          cuando la operación haya sido solicitada.
        </p>
      </LegalSection>

      <LegalSection title="6. Aclaraciones y cargos no reconocidos">
        <p>
          Si detectas un cargo duplicado, incorrecto o que no reconoces, escribe cuanto antes a{" "}
          <a href="mailto:hola@lealtio.com">hola@lealtio.com</a>. Incluye el correo de la cuenta, la
          fecha, el importe y cualquier referencia visible para que podamos localizarlo.
        </p>
      </LegalSection>

      <LegalSection title="7. Cambios futuros">
        <p>
          Las promociones y condiciones ofrecidas a nuevos clientes pueden cambiar. Para cada compra
          se aplicarán las condiciones presentadas antes de completar el registro o pago, junto con
          la versión vigente de esta política.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
