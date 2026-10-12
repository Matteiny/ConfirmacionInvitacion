import { Church, Sparkles } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-white px-6 py-24 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,theme(colors.amber.200/40),transparent_60%)]" />

      <Sparkles className="mb-4 h-8 w-8 text-amber-500" aria-hidden />

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-700">
        Mi Confirmación
      </p>

      <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
        {eventConfig.confirmand.fullName}
      </h1>

      <div className="mt-6 flex items-center gap-3 text-stone-500">
        <span className="h-px w-10 bg-stone-300" />
        <Church className="h-5 w-5" aria-hidden />
        <span className="h-px w-10 bg-stone-300" />
      </div>

      <p className="mt-6 max-w-md text-balance text-lg text-stone-600">
        Con la bendición de Dios y el cariño de mi familia, te invito a
        acompañarme a recibir el Sacramento de la Confirmación.
      </p>

      <p className="mt-8 text-base font-medium text-stone-700">
        {eventConfig.date.display}
      </p>
    </section>
  );
}
