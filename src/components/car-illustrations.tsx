// Siluetas genéricas (no son el diseño de ningún personaje con derechos de
// autor): un auto deportivo y una grúa, en estilo plano, para ambientar el
// tema de carreras sin reproducir arte protegido de Disney/Pixar.

export function RacerSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden>
      <path
        d="M10 65 Q10 45 35 40 L55 25 Q75 15 110 15 L140 15 Q160 15 170 35 L185 40 Q195 42 195 55 L195 65 Z"
        fill="currentColor"
      />
      <path d="M60 40 L80 22 L120 22 L135 40 Z" fill="white" fillOpacity="0.3" />
      <circle cx="50" cy="68" r="16" fill="#1c1917" />
      <circle cx="50" cy="68" r="7" fill="#fafaf9" />
      <circle cx="155" cy="68" r="16" fill="#1c1917" />
      <circle cx="155" cy="68" r="7" fill="#fafaf9" />
    </svg>
  );
}

export function TowTruckSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" className={className} aria-hidden>
      <path
        d="M10 70 L10 45 L70 45 L85 25 L115 25 L115 45 L150 45 Q160 45 160 55 L160 70 Z"
        fill="currentColor"
      />
      <rect x="120" y="14" width="7" height="22" fill="currentColor" />
      <path d="M75 45 L85 30 L112 30 L112 45 Z" fill="white" fillOpacity="0.3" />
      <circle cx="40" cy="75" r="16" fill="#1c1917" />
      <circle cx="40" cy="75" r="7" fill="#fafaf9" />
      <circle cx="135" cy="75" r="16" fill="#1c1917" />
      <circle cx="135" cy="75" r="7" fill="#fafaf9" />
    </svg>
  );
}
