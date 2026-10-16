// Ilustración original (no copiada de ninguna fuente): un horizonte
// desértico con mesetas, inspirado en el escenario de "Cars" (Radiator
// Springs) sin reproducir ningún personaje ni arte con derechos de autor.

export function DesertSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 160"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Capa lejana de mesetas */}
      <path
        d="M0 90 L30 90 L55 55 L80 90 L120 90 L150 65 L185 90 L230 90 L255 45 L290 90 L330 90 L355 60 L400 90 L400 160 L0 160 Z"
        className="fill-orange-900/25"
      />
      {/* Capa media de mesetas */}
      <path
        d="M0 110 L40 110 L70 75 L95 110 L140 110 L175 85 L205 110 L260 110 L290 65 L325 110 L400 110 L400 160 L0 160 Z"
        className="fill-orange-800/40"
      />
      {/* Meseta principal tipo "Radiator Springs" */}
      <path
        d="M120 130 L150 95 L160 95 L165 108 L185 108 L190 95 L200 95 L225 130 Z"
        className="fill-orange-900/55"
      />
      {/* Suelo / primer plano */}
      <path d="M0 130 L400 130 L400 160 L0 160 Z" className="fill-orange-950/30" />
      {/* Camino en perspectiva hacia el horizonte */}
      <path d="M170 160 L230 160 L205 122 L195 122 Z" className="fill-stone-800/70" />
      <rect x="198" y="150" width="4" height="8" className="fill-amber-300/80" />
      <rect x="199" y="136" width="2.5" height="6" className="fill-amber-300/70" />
      <rect x="199.5" y="126" width="1.5" height="4" className="fill-amber-300/60" />
    </svg>
  );
}
