import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./macbook_pro/scene.gltf"); // Load the model
  return (
    <mesh>
      {/* Add a light source to the scene */}
      <hemisphereLight intensity={10} groundColor="black" />
      {/* Add a point light source */}
      <pointLight intensity={20} />
      {/* Add the model to the scene */}
      <primitive
        object={computer.scene} // Add the model to the scene
        scale={isMobile ? 9 : 15} // Increase the size of the model
        position={isMobile ? [0, -0.8, 0] : [0, -2.8, 0]} // Move the model to the center of the scene
        rotation={[0, 2.85, 0]} // Rotate the model
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand" // Only render on browser tab focus
      shadows // Enable shadow rendering
      camera={{ position: [20, 3, 5], fov: 25 }} // Set camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Enable image capture
      alpha={true} // Enable transparency
      android={true} // Render on Android browser
    >
      {/* Show loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false} // Disable zoom
          maxPolarAngle={Math.PI / 2} // Don't go below the ground plane
          minPolarAngle={Math.PI / 2} // Don't go above the sky plane
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload model for better performance */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
