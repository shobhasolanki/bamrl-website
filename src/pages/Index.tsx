// src/pages/Index.tsx
import HeroSection from "@/components/HeroSection";
import ComponentViewer from "@/components/ComponentViewer";
import WhatWeBuild from "@/components/WhatWeBuild";
import ProcessSection from "@/components/ProcessSection";
import OptimizationSection from "@/components/OptimizationSection";
import ResearchSection from "@/components/ResearchSection";
import TechnologySection from "@/components/TechnologySection";
import FutureSection from "@/components/FutureSection";
import FloatingButton from "@/components/FloatingButton";
import CertificationRoadmap from "@/components/CertificationRoadmap";
import PremiumShowcase from "@/components/PremiumShowcase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "BAMRL | Aerospace Engineering";
  }, []);

  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* ========== BACKGROUND LAYER (same as Collaboration page) ========== */}
      {/* Starfield background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 10;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `floatStars ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Grid texture */}
      <div className="fixed inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-20 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Radar sweep effect (optional, adds aerospace feel) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="radar-sweep" style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }} />
      </div>

      {/* ========== CONTENT LAYER (relative z-index) ========== */}
      <div className="relative z-10">
        <HeroSection />
        <ComponentViewer />
        <PremiumShowcase />
        <WhatWeBuild />
        <ProcessSection />
        <OptimizationSection />
        <ResearchSection />
        <TechnologySection />
        <CertificationRoadmap />
        <FutureSection />

        <section className="py-16 text-center border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
            Let’s Build Together
          </h2>
          <p className="text-gray-400 mb-6">
            Partner with us for advanced aerospace engineering solutions.
          </p>
         <button
  onClick={() => navigate("/collaboration")}
  className="inline-block px-6 py-3 border border-primary text-primary uppercase text-xs tracking-[0.2em] hover:bg-primary/10 transition"
>
  Collaborate With Us →
</button>
        </section>

        <FloatingButton />
      </div>

      {/* Keyframes for star animation */}
      <style>{`
        @keyframes floatStars {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-1000px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); opacity: 0.2; }
          100% { transform: rotate(360deg); opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .radar-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(0,150,255,0.15) 360deg);
          animation: radarSweep 8s linear infinite;
          pointer-events: none;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Index;