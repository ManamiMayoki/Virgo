import { useMemo } from 'react'

const LEAF_PATH =
  'M12 1C7 5 2 9 2 15c0 5.5 4.5 8 10 8s10-2.5 10-8C22 9 17 5 12 1z'

const SHADES = ['#4fa6e8', '#1e5aa8', '#bfe1ff', '#123059']

function rand(min, max) {
  return Math.random() * (max - min) + min
}

export default function DriftingLeaves({ count = 16 }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        delay: rand(0, 14),
        duration: rand(11, 20),
        size: rand(14, 26),
        color: SHADES[i % SHADES.length],
        opacity: rand(0.35, 0.85),
        rotate: rand(-40, 40),
        drift: rand(-60, 60),
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          viewBox="0 0 24 24"
          width={leaf.size}
          height={leaf.size}
          style={{
            position: 'absolute',
            left: `${leaf.left}%`,
            top: '-40px',
            opacity: leaf.opacity,
            '--drift': `${leaf.drift}px`,
            '--rotate': `${leaf.rotate}deg`,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <path d={LEAF_PATH} fill={leaf.color} />
        </svg>
      ))}
      <style>{`
        @keyframes leaf-fall {
          0% {
            transform: translate(0, -40px) rotate(0deg);
          }
          100% {
            transform: translate(var(--drift), 110vh) rotate(var(--rotate));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
