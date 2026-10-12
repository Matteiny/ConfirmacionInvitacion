"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { eventConfig } from "@/config/event";

export function Rsvp() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"si" | "no">("si");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      `¡Hola! Confirmo mi asistencia a la Confirmación de ${eventConfig.confirmand.fullName}.`,
      `Nombre: ${name || "(sin nombre)"}`,
      `Asistencia: ${attending === "si" ? "Sí asistiré" : "No podré asistir"}`,
      attending === "si" ? `Número de personas: ${guests}` : null,
      message ? `Mensaje: ${message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${eventConfig.rsvp.whatsappNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-lg">
        <Card className="border-amber-200/70">
          <CardHeader>
            <CardTitle className="text-center font-serif text-3xl text-stone-900">
              Confirma tu Asistencia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-stone-700">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-sm font-medium text-stone-700">
                  ¿Asistirás?
                </span>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant={attending === "si" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setAttending("si")}
                  >
                    Sí, ahí estaré
                  </Button>
                  <Button
                    type="button"
                    variant={attending === "no" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setAttending("no")}
                  >
                    No podré ir
                  </Button>
                </div>
              </div>

              {attending === "si" && (
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="text-sm font-medium text-stone-700">
                    Número de personas
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    min={1}
                    max={10}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">
                  Mensaje (opcional)
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Deja tus buenos deseos..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full gap-2 bg-amber-700 hover:bg-amber-800">
                <MessageCircle className="h-4 w-4" />
                Enviar confirmación por WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
