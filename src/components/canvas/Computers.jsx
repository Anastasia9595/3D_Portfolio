import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//import { CanvasLoader } from "../Loader";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  );
};
function Model({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

const Computers = () => {};

const ComputersCanvas = () => {
  return (
    <Suspense>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <Model url={"./laptop_and_mouse/scene.gltf"} />
      </Canvas>
    </Suspense>
  );
};

export default ComputersCanvas;
