// Ilustración original: gradas de un autódromo con público (siluetas
// genéricas, algunas "tomando fotos"), para ambientar el cierre del sitio
// sin reproducir ningún personaje con derechos de autor.

function Spectator({ x, y, flash = false }: { x: number; y: number; flash?: boolean }) {
  return (
    <g>
      <rect x={x - 2.5} y={y} width={5} height={7} rx={1.5} className="fill-stone-600" />
      <circle cx={x} cy={y - 2.5} r={2.3} className="fill-stone-600" />
      {flash && (
        <rect x={x - 3.5} y={y - 8} width={3} height={2} rx={0.5} className="fill-amber-300/90" />
      )}
    </g>
  );
}

export function GrandstandCrowd({ className = "" }: { className?: string }) {
  const spectators: { x: number; y: number; flash?: boolean }[] = [
    { x: 14, y: 70 }, { x: 26, y: 68, flash: true }, { x: 38, y: 71 },
    { x: 50, y: 67 }, { x: 62, y: 70 }, { x: 74, y: 66, flash: true },
    { x: 86, y: 69 }, { x: 98, y: 71 }, { x: 110, y: 67 },
    { x: 122, y: 70 }, { x: 134, y: 68 }, { x: 146, y: 71, flash: true },
    { x: 158, y: 66 }, { x: 170, y: 69 }, { x: 182, y: 71 },
    { x: 194, y: 67 }, { x: 206, y: 70 }, { x: 218, y: 68, flash: true },
    { x: 230, y: 71 }, { x: 242, y: 66 }, { x: 254, y: 69 },
    { x: 266, y: 71 }, { x: 278, y: 67 }, { x: 290, y: 70, flash: true },
    { x: 302, y: 68 }, { x: 314, y: 71 }, { x: 326, y: 66 },
    { x: 338, y: 69 }, { x: 350, y: 71 }, { x: 362, y: 67, flash: true },
    { x: 374, y: 70 }, { x: 386, y: 68 },
  ];

  return (
    <svg
      viewBox="0 0 400 100"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Gradas escalonadas */}
      <path d="M0 55 L400 55 L400 100 L0 100 Z" className="fill-stone-800" />
      <path d="M0 62 L400 62 L400 100 L0 100 Z" className="fill-stone-800" />
      <path d="M0 76 L400 76 L400 100 L0 100 Z" className="fill-stone-900" />

      {/* Barda / pretil de la grada */}
      <rect x="0" y="52" width="400" height="4" className="fill-stone-700" />

      {spectators.map((s, i) => (
        <Spectator key={i} x={s.x} y={s.y} flash={s.flash} />
      ))}

      {/* Pista al frente, con guardas rojo/blanco típicas de autódromo */}
      <rect x="0" y="92" width="400" height="8" className="fill-stone-950" />
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={i * 20}
          y="92"
          width="10"
          height="3"
          className={i % 2 === 0 ? "fill-red-600/80" : "fill-stone-100/90"}
        />
      ))}
    </svg>
  );
}
