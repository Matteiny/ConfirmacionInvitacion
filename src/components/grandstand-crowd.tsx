// Ilustración original: un estadio de autódromo de noche, con multitud de
// puntos de colores representando al público y destellos tipo flash,
// inspirado en el ambiente de "Cars" sin copiar ninguna escena ni
// personaje con derechos de autor.

const CROWD_COLORS = ["#ef4444", "#3b82f6", "#f59e0b", "#f1f5f9", "#14b8a6", "#a855f7"];

// Hash determinista (mismo resultado en servidor y cliente) para distribuir
// colores y variar posiciones sin depender de Math.random().
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function CrowdField({
  yTop,
  yBottom,
  count,
  radius,
  seedOffset,
}: {
  yTop: number;
  yBottom: number;
  count: number;
  radius: number;
  seedOffset: number;
}) {
  const dots = Array.from({ length: count }, (_, i) => {
    const x = 2 + (i / (count - 1)) * 396 + (pseudoRandom(i + seedOffset) - 0.5) * 6;
    const y = yTop + pseudoRandom(i + seedOffset + 500) * (yBottom - yTop);
    const color = CROWD_COLORS[Math.floor(pseudoRandom(i + seedOffset + 900) * CROWD_COLORS.length)];
    return { x, y, color };
  });

  return (
    <>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={radius} fill={d.color} fillOpacity={0.85} />
      ))}
    </>
  );
}

function Sparkle({ x, y, size = 3.2 }: { x: number; y: number; size?: number }) {
  return (
    <g stroke="#e0f2fe" strokeWidth={0.7} strokeLinecap="round" opacity={0.9}>
      <line x1={x - size} y1={y} x2={x + size} y2={y} />
      <line x1={x} y1={y - size} x2={x} y2={y + size} />
      <circle cx={x} cy={y} r={1} fill="#e0f2fe" />
    </g>
  );
}

const SPARKLES = Array.from({ length: 16 }, (_, i) => ({
  x: 10 + pseudoRandom(i + 40) * 380,
  y: 8 + pseudoRandom(i + 140) * 108,
  size: 2 + pseudoRandom(i + 240) * 2.2,
}));

export function GrandstandCrowd({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 150"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Resplandor nocturno de los reflectores del estadio */}
      <rect x="0" y="0" width="400" height="150" fill="url(#stadiumGlow)" />
      <defs>
        <radialGradient id="stadiumGlow" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0b0d12" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Multitud en 3 niveles de grada, más densa y brillante al frente */}
      <CrowdField yTop={6} yBottom={42} count={110} radius={1.1} seedOffset={1} />
      <CrowdField yTop={42} yBottom={78} count={120} radius={1.4} seedOffset={2} />
      <CrowdField yTop={78} yBottom={116} count={130} radius={1.8} seedOffset={3} />

      {SPARKLES.map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} size={s.size} />
      ))}

      {/* Muro de contención azul y blanco, típico de un autódromo */}
      <rect x="0" y="118" width="400" height="14" fill="#1d4ed8" />
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={i * 20}
          y="118"
          width="10"
          height="14"
          fill={i % 5 === 0 ? "#ef4444" : "#f8fafc"}
        />
      ))}

      {/* Pista de asfalto en primer plano */}
      <rect x="0" y="132" width="400" height="18" fill="#0f1115" />
      <rect x="0" y="132" width="400" height="2" fill="#2a2d35" />
    </svg>
  );
}
