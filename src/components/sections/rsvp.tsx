import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { eventConfig } from "@/config/event";

function whatsappUrl(attending: boolean) {
  const message = attending
    ? `¡Hola! Con mucha alegría confirmo que SÍ asistiré a la presentación de ${eventConfig.child.fullName} 🏁`
    : `Hola, lamento informarles que no podré asistir a la presentación de ${eventConfig.child.fullName}. ¡Gracias por la invitación! 💛`;

  return `https://wa.me/${eventConfig.rsvp.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function Rsvp() {
  return (
    <section className="bg-white/60 px-6 py-20 backdrop-blur-sm">
      <div className="mx-auto max-w-md">
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-center font-heading text-3xl text-stone-900">
              Confirma tu Asistencia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-stone-500">
              Toca un botón: te llevamos directo a WhatsApp con el mensaje ya
              listo para enviar.
            </p>

            <Button
              size="lg"
              nativeButton={false}
              className="w-full gap-2 bg-red-600 hover:bg-red-700"
              render={
                <a
                  href={whatsappUrl(true)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="h-5 w-5" />
              Sí, ahí estaré
            </Button>

            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="w-full gap-2"
              render={
                <a
                  href={whatsappUrl(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <X className="h-4 w-4" />
              No podré asistir
            </Button>

            <a
              href={`tel:+${eventConfig.rsvp.whatsappNumber}`}
              className="flex items-center justify-center gap-1.5 pt-2 text-sm text-stone-500 hover:text-stone-700"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Prefiero llamar: +{eventConfig.rsvp.whatsappNumber}
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
