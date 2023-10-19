'use client'
import ControlPanel from "@/components/ControlPanel";
import { Gltf, Grid, Loader, OrbitControls, PivotControls, Plane, Sky, TransformControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import './page.css'
import { IoIosArrowBack } from "react-icons/io";
import { proxy, useSnapshot } from "valtio";
import AdditionalAppliance from "@/components/AdditionalAppliances";
import TransformControlConfig from "@/controls/TransformControlConfig";

export default function Home() {
  const [openControlPanel, setOpenControlPanel] = useState(false)

  const handleControlPanelMenu = () => {
    setOpenControlPanel(true);
  }

  // const scene = useThree((state) => state.scene);



  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
      <Suspense fallback={<Loader />}>
        {!openControlPanel ? (
          <div className="control-panel-btn">
            <div
              className="control-panel-back-btn"
              onClick={handleControlPanelMenu}
            >
              <IoIosArrowBack />
            </div>
            <div className="control-panel-btn-text">Control Panel</div>
          </div>
        ) : (
          <ControlPanel open={setOpenControlPanel} />
        )}
        <Canvas camera={{ position: [10, 5, -10], fov: 60 }}>
          <perspectiveCamera position={[0, 0, 5]} />
          <ambientLight intensity={3} />
          <OrbitControls
            makeDefault
            dampingFactor={1}
            screenSpacePanning
            minPolarAngle={0}
            maxPolarAngle={1.65}
            minDistance={1}
            maxDistance={15}
          />
          <Sky />
          <Gltf
            src="/assets/rooms/room1.gltf"
            receiveShadow
            castShadow
            position={[0, -1.4, 0]}
          />
          <Plane
            args={[250, 250]}
            position={[0, -1.75, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <TransformControlConfig />
          <AdditionalAppliance />
          {/* <Grid position={[0, 0, 0]} args={[200, 200]} cellSize={0.1} /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}
