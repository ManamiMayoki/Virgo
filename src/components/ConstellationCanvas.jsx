import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Line } from '@react-three/drei'
import * as THREE from 'three'

// The constellation is drawn on purpose, not decoration: an open book
// (Neel reads), its right page lifting into a rising trail (where he's
// headed). The brightest point is the spine — that one is Neel.
const LEFT_PAGE = [
  [-3.0, 1.2, 0],
  [-2.4, 0.6, -0.2],
  [-1.8, 0.15, 0.1],
  [-1.1, -0.4, -0.1],
  [-0.4, -0.8, 0.15],
  [0, -1, 0],
]
const RIGHT_PAGE = [
  [0, -1, 0],
  [0.4, -0.8, -0.15],
  [1.1, -0.4, 0.1],
  [1.8, 0.15, -0.1],
  [2.4, 0.6, 0.2],
  [3.0, 1.2, 0],
]
const RISING_TRAIL = [
  [3.0, 1.2, 0],
  [3.65, 1.95, 0.3],
  [4.35, 2.55, -0.2],
  [5.05, 3.4, 0.25],
  [5.7, 4.5, 0],
]

const SPINE_STAR = [0, -1, 0]
const DEST_STAR = [5.7, 4.5, 0]

function Star({ position, size = 0.05, color = '#eaf4ff' }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function BookConstellation() {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t * 0.06) * 0.12
    group.current.rotation.x = Math.cos(t * 0.05) * 0.04
  })

  const allPoints = useMemo(
    () => [...LEFT_PAGE, ...RIGHT_PAGE, ...RISING_TRAIL],
    []
  )

  return (
    <group ref={group} position={[0.6, -2.6, -1.5]} scale={0.62}>
      <Line points={LEFT_PAGE} color="#4fa6e8" lineWidth={1.4} transparent opacity={0.55} />
      <Line points={RIGHT_PAGE} color="#4fa6e8" lineWidth={1.4} transparent opacity={0.55} />
      <Line points={RISING_TRAIL} color="#bfe1ff" lineWidth={1.2} transparent opacity={0.4} dashed dashSize={0.12} gapSize={0.08} />

      {allPoints.map((p, i) => (
        <Star key={i} position={p} size={0.045} color="#bfe1ff" />
      ))}

      <Star position={SPINE_STAR} size={0.11} color="#ffffff" />
      <Star position={DEST_STAR} size={0.08} color="#eaf4ff" />
    </group>
  )
}

export default function ConstellationCanvas({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.6]}>
        <color attach="background" args={['#050b18']} />
        <fog attach="fog" args={['#050b18', 8, 16]} />
        <Stars radius={60} depth={30} count={2600} factor={2.1} saturation={0} fade speed={0.35} />
        <BookConstellation />
      </Canvas>
    </div>
  )
}
