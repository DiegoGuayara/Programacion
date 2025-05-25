import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Inicializar la escena, la cámara y el renderizador
const convertirModel = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Cargar el modelo 3D
  const loader = new GLTFLoader();
  loader.load(
    "./models/Shirt/scene.gltf",
    function (gltf: any) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error: any) {
      console.error(error);
    }
  );

  // Posicionar la cámara
  camera.position.z = 5;

  // Renderizar la escena
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // Función para convertir el canvas a una imagen
  function convertirAImagen() {
    const link = document.createElement("a");
    link.download = "modelo-3d.png";
    link.href = renderer.domElement.toDataURL("image/png");
    link.click();
  }

  // Llamar a la función después de que el modelo se haya cargado
  loader.load("./models/Shirt/scene.gltf", function (gltf: any) {
    scene.add(gltf.scene);
    setTimeout(convertirAImagen, 1000); // Esperar un segundo para asegurarse de que el modelo se haya renderizado
  });
};

export default convertirModel;
