// Ilustración original: gradas de un autódromo con público en varios
// niveles (siluetas genéricas, algunas "tomando fotos"), para ambientar el
// cierre del sitio sin reproducir ningún personaje con derechos de autor.

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

function CrowdRow({ y, offset = 0 }: { y: number; offset?: number }) {
  const xs = Array.from({ length: 28 }, (_, i) => 12 + offset + i * 14).filter((x) => x <= 392);

  return (
    <>
      {xs.map((x, i) => (
        <Spectator key={x} x={x} y={y} flash={i % 6 === 3} />
      ))}
    </>
  );
}

export function GrandstandCrowd({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 150"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Gradas escalonadas (3 niveles) */}
      <path d="M0 18 L400 18 L400 150 L0 150 Z" className="fill-stone-700" />
      <path d="M0 52 L400 52 L400 150 L0 150 Z" className="fill-stone-800" />
      <path d="M0 86 L400 86 L400 150 L0 150 Z" className="fill-stone-900" />

      {/* Pretiles de cada nivel */}
      <rect x="0" y="15" width="400" height="3" className="fill-stone-600" />
      <rect x="0" y="49" width="400" height="3" className="fill-stone-700" />
      <rect x="0" y="83" width="400" height="3" className="fill-stone-800" />

      <CrowdRow y={38} />
      <CrowdRow y={72} offset={7} />
      <CrowdRow y={106} />

      {/* Pista al frente, con guardas rojo/blanco típicas de autódromo */}
      <rect x="0" y="142" width="400" height="8" className="fill-stone-950" />
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={i * 20}
          y="142"
          width="10"
          height="3"
          className={i % 2 === 0 ? "fill-red-600/80" : "fill-stone-100/90"}
        />
      ))}
    </svg>
  );
}
