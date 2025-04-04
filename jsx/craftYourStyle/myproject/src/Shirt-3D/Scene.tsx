import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export const Scene = ({ color }: any) => {
  return (
    <div style={{ height: "80vh", width: "90vw" }} className="sceneShirt">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Model color={color} />
        <OrbitControls
          minDistance={2}
          maxDistance={7}
          zoomSpeed={0.7}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
