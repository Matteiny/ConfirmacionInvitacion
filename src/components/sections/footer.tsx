import { eventConfig } from "@/config/event";

export function Footer() {
  const { child, sponsors, parents, credits } = eventConfig;

  return (
    <footer className="bg-stone-900 px-6 py-12 text-center text-stone-300">
      <p className="font-heading text-xl text-white">{child.fullName}</p>
      <p className="mt-2 text-sm">
        Padrinos: {sponsors.padrino} &amp; {sponsors.madrina}
      </p>
      <p className="text-sm">Padres: {parents.names}</p>
      <p className="mt-6 text-xs text-stone-500">{credits.text}</p>
      <p className="mt-1 text-xs text-stone-600">
        🏁 Con la velocidad de Rayo McQueen y el corazón de Mate
      </p>
    </footer>
  );
}
