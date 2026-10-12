import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Countdown } from "@/components/sections/countdown";
import { eventConfig } from "@/config/event";

function DetailCard({
  title,
  time,
  place,
  address,
}: {
  title: string;
  time: string;
  place: string;
  address: string;
}) {
  return (
    <Card className="border-amber-200/70 bg-white/80">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-stone-900">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-stone-500">
          <Calendar className="h-4 w-4" aria-hidden />
          {eventConfig.date.display}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-stone-700">
        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-600" aria-hidden />
          {time}
        </p>
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
          <span>
            <span className="block font-medium">{place}</span>
            <span className="block text-sm text-stone-500">{address}</span>
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

export function EventDetails() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-semibold text-stone-900">
          Detalles del Evento
        </h2>
        <div className="mt-10 mb-12 flex justify-center">
          <Countdown />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <DetailCard
            title={eventConfig.ceremony.title}
            time={eventConfig.ceremony.time}
            place={eventConfig.ceremony.place}
            address={eventConfig.ceremony.address}
          />
          <DetailCard
            title={eventConfig.reception.title}
            time={eventConfig.reception.time}
            place={eventConfig.reception.place}
            address={eventConfig.reception.address}
          />
        </div>
      </div>
    </section>
  );
}
