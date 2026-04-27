import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const WireframeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1, -1);
    shape.lineTo(1, -1);
    shape.lineTo(1, 0);
    shape.lineTo(0, 0);
    shape.lineTo(0, 1.5);
    shape.lineTo(-0.5, 1.5);
    shape.lineTo(-0.5, 0);
    shape.lineTo(-1, 0);
    shape.lineTo(-1, -1);

    const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2 };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef} geometry={geometry} rotation={[0.3, 0.5, 0]}>
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh geometry={geometry} rotation={[0.3, 0.5, 0]}>
        <meshBasicMaterial color="#1F6BFF" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const GridPlane = () => (
  <gridHelper args={[20, 40, "#1F6BFF", "#111111"]} rotation={[0, 0, 0]} position={[0, -2, 0]} />
);

const HeroSection = () => {
  return (
    
    //hero img//
    
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20 overflow-hidden bg-transparent">
      <div className="absolute inset-0 overflow-hidden">
  <img
    src="/images/hero-aircraft.jpg"
    className="w-full h-full object-cover scale-110 animate-[zoomIn_20s_linear_forwards]"
  />
</div>
<div className="absolute inset-0 bg-black/60" />

      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Content */}
     <div className="relative z-10 text-center max-w-3xl mx-auto pt-16 md:pt-0 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="data-label text-[10px] mb-4">SECTION 01 — OVERVIEW</p>
         <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider leading-[1.15] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
  <span className="block">
    ENGINEERING THE FUTURE
  </span>
  <span className="block text-lg sm:text-xl md:text-3xl mt-1">
    OF AEROSPACE STRUCTURES
  </span>
</h1>
          <p className="font-body text-sm sm:text-base text-white/90 mt-4 sm:mt-6 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Advanced structural design, simulation, and aerospace component development. 
            Engineering aluminium structures that redefine aerospace performance.
          </p>

           



          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              className="font-heading text-[10px] sm:text-xs tracking-[0.15em] uppercase px-4 sm:px-6 py-3 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 transition-colors"
              onClick={() => document.getElementById("what-we-build")?.scrollIntoView({ behavior: "auto" })}
            >
              EXPLORE ENGINEERING
            </button>
          
          
          <button
  className="font-heading text-[10px] sm:text-xs tracking-[0.15em] uppercase px-4 sm:px-6 py-3 border border-border text-foreground hover:border-foreground transition-colors"
  onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "auto" })}
>
  VIEW RESEARCH
</button>
          </div>
        </motion.div>

        {/* Bottom data bar */}
       <motion.div
  className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.6 }}
>
  {[
    { label: "MATERIAL", value: "AL-7075-T6" },
    { label: "TOLERANCE", value: "±0.005mm" },
    { label: "STATUS", value: "OPERATIONAL" },
  ].map((item) => (
    <div key={item.label} className="text-center">
      <p className="data-label text-[8px] text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">{item.label}</p>
<p className="data-value text-[11px] mt-0.5 text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">{item.value}</p>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
