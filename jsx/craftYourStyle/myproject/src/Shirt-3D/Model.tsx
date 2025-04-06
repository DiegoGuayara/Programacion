import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh, MeshStandardMaterial } from "three";

export const Model:React.FC<{color?:string}> = ({ color = 'white'}) => {
  const { scene } = useGLTF("/models/scene.gltf");

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        const mesh = object as Mesh;
        if (mesh.isMesh) {
          // Verificar si el material es un array o un solo material
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              if (mat instanceof MeshStandardMaterial) {
                mat.color.set(color);
              }
            });
          } else {
            if (mesh.material instanceof MeshStandardMaterial) {
              mesh.material.color.set(color);
            }
          }
        }
      });
    }
  }, [color, scene]);

  return <primitive object={scene} scale={3} position={[0, -3.8, 0]} />;
};
