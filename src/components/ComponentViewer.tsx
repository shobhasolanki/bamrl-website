import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useMemo } from "react";
import * as THREE from "three";
import { useRef } from "react";
import ZoomControls from "@/components/ZoomControls";

const AerospaceBracket = () => {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.5, -0.8);
    shape.lineTo(1.5, -0.8);
    shape.lineTo(1.5, -0.3);
    shape.lineTo(0.4, -0.3);
    shape.lineTo(0.4, 1.2);
    shape.lineTo(-0.4, 1.2);
    shape.lineTo(-0.4, -0.3);
    shape.lineTo(-1.5, -0.3);
    shape.lineTo(-1.5, -0.8);

    const hole1 = new THREE.Path();
    hole1.absellipse(-1, -0.55, 0.12, 0.12, 0, Math.PI * 2, false, 0);
    shape.holes.push(hole1);

    const hole2 = new THREE.Path();
    hole2.absellipse(1, -0.55, 0.12, 0.12, 0, Math.PI * 2, false, 0);
    shape.holes.push(hole2);

    const extrudeSettings = { depth: 0.25, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03 };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);
  const cameraRef = useRef<any>(null);

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group rotation={[0.6, 0.4, 0.1]}>
        <mesh geometry={geometry}>
          <meshStandardMaterial color="#BFC4C9" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh geometry={geometry}>
          <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.08} />
        </mesh>
      </group>
    </Float>
  );
};



const ComponentViewer = () => {
  return (
    <section id="component-viewer" className=" py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
        <p className="data-label text-[10px] mb-4">SECTION 02 — COMPONENT INSPECTOR</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-2">
          INTERACTIVE COMPONENT ANALYSIS
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mb-8 max-w-lg font-body">
          Inspect aerospace structural components. Rotate, zoom, and analyze engineering geometry.
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-12">
        <div className="section-panel h-[260px] sm:h-[320px] md:h-[380px] relative">
          {/* Corner markers */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/40" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/40" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/40" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/40" />

          <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-3, 2, -3]} intensity={0.3} color="#1F6BFF" />
            <AerospaceBracket />
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
            />
            <ZoomControls />
        
            <gridHelper args={[10, 20, "#1F6BFF", "#111111"]} position={[0, -1.5, 0]} />
          </Canvas>

          {/* Overlay data */}
          <div className="absolute top-4 right-4 sm:right-6 space-y-2">
            <div>
              <p className="data-label text-[8px]">COMPONENT</p>
              <p className="data-value text-[10px]">UAV-BRACKET-A7</p>
            </div>
            <div>
              <p className="data-label text-[8px]">MATERIAL</p>
              <p className="data-value text-[10px]">AL-7075-T6</p>
            </div>
            <div>
              <p className="data-label text-[8px]">MASS</p>
              <p className="data-value text-[10px]">0.342 KG</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 sm:left-6">
            <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">
              [ DRAG TO ROTATE ] · [ +/- TO ZOOM ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentViewer;