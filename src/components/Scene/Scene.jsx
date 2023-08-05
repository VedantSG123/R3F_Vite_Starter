import { Canvas } from "@react-three/fiber"
import Experience from "../Experience/Experience"
export default function Scene() {
  return (
    <>
      <Canvas className="canvas">
        <Experience />
      </Canvas>
    </>
  )
}
