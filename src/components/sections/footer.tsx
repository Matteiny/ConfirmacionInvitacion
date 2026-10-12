import { eventConfig } from "@/config/event";

export function Footer() {
  return (
    <footer className="bg-stone-900 px-6 py-12 text-center text-stone-300">
      <p className="font-serif text-xl text-white">
        {eventConfig.confirmand.fullName}
      </p>
      <p className="mt-2 text-sm">
        Padrino/Madrina: {eventConfig.sponsor.name}
      </p>
      <p className="text-sm">Padres: {eventConfig.parents.names}</p>
      <p className="mt-6 text-xs text-stone-500">{eventConfig.credits.text}</p>
    </footer>
  );
}
