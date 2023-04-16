import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//import { CanvasLoader } from "../Loader";

function Model({ url, scale, position, rotation }) {
  const gltf = useGLTF(url);
  return (
    <mesh>
      <pointLight intensity={0.8} />
      <primitive
        object={gltf.scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        camera={{ position: [-20, 5, 10], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <ambientLight />
        <Model
          url={"./laptop_and_mouse/scene.gltf"}
          scale={[0.05, 0.05, 0.05]}
          position={[0, -1.8, 0]}
          rotation={[-0.02, -0.2, -0.1]}
        />
      </Canvas>
    </Suspense>
  );
};

export default ComputersCanvas;
