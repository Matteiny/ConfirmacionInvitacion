import { Car, Flag } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Hero() {
  const { child } = eventConfig;
  const isNiña = child.gender === "niña";
  const hijoWord = isNiña ? "hija" : "hijo";
  const loLa = isNiña ? "la" : "lo";

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-white px-6 py-20 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,theme(colors.red.200/40),transparent_60%)]" />

      <div className="flex items-center gap-3">
        <Car className="h-7 w-7 text-red-600" aria-hidden />
        <Flag className="h-5 w-5 text-stone-500" aria-hidden />
        <Car className="h-7 w-7 -scale-x-100 text-orange-700" aria-hidden />
      </div>

      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
        Presentación de Fe
      </p>

      <h1 className="mt-4 font-display text-4xl leading-tight text-stone-900 sm:text-5xl">
        {child.fullName}
      </h1>

      <div className="mt-6 flex items-center gap-3 text-stone-400">
        <span className="h-px w-10 bg-stone-300" />
        <span className="text-xs font-semibold tracking-widest uppercase">
          En ruta hacia la fe
        </span>
        <span className="h-px w-10 bg-stone-300" />
      </div>

      <p className="mt-6 max-w-md text-balance text-lg text-stone-600">
        Con todo nuestro amor, presentamos ante Dios y nuestra familia a
        nuestr{isNiña ? "a" : "o"} {hijoWord}, comprometiéndonos a guiar
        {loLa} siempre por el camino de la fe.
      </p>

      <p className="mt-8 text-base font-semibold text-red-700">
        {eventConfig.date.display}
      </p>
    </section>
  );
}
