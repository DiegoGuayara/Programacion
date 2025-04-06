import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export const Scene: React.FC<{ color?: string }> = ({ color = "white" }) => {
  return (
    <div className="sceneShirt">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Model color={color} />
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={5}
          zoomSpeed={0.7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};
