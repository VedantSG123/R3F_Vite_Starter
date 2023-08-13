import { useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import StaticParticles from "../Particles/StaticParticles"

export default function Scene() {
  return (
    <>
      <OrbitControls />
      <StaticParticles />
    </>
  )
}
