import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import Torigate from "./Torigate";
import { OrbitControls } from "./OrbitControls";

export const Yonko3D = () => {
  return (
    <>
      <Canvas
        className="tjs__canvas"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />

          <CameraController />
          <Torigate scale={.2} position={[0, 0.1, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
};

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.zoomSpeed = -1;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.enableRotate = false;
    controls.maxDistance = 4;
    controls.minDistance = 0.6;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
