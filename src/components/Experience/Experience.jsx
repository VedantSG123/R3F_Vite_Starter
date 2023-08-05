import { useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
  const { camera } = useThree()

  return (
    <>
      <OrbitControls />
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="#0000ff" />
      </mesh>
    </>
  )
}
