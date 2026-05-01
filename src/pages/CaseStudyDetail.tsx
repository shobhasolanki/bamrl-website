// src/pages/CaseStudyDetail.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import uavWing from "@/assets/uav-wing-cad.png";
import uavFea from "@/assets/uav-wing-fea.jpg";
import bracketOpt from "@/assets/bracket-optimized.jpeg";
import bracketOriginal from "@/assets/bracket-original.png";
import uav1 from "@/assets/projects/uav-1.png";
import uav2 from "@/assets/projects/uav-2.jpg";
import uav3 from "@/assets/projects/uav-3.jpg";
import uav4 from "@/assets/projects/uav-4.jpg";
import bracket1 from "@/assets/projects/bracket-1.webp";
import bracket2 from "@/assets/projects/bracket-2.png";
import bracket3 from "@/assets/projects/bracket-3.jpg";
import bracket4 from "@/assets/projects/bracket-4.jpg";


// Extended case study data (matching slugs from ProjectsPage)
const caseStudyData = {
  "uav-wing": {
    title: "UAV Wing Structural Design & Validation",
    slug: "uav-wing",
    heroImage: uavWing,
    overview:
      "Developed a high-performance lightweight wing structure for tactical UAVs. The project involved parametric CAD modeling, aerodynamic load analysis, and non-linear FEA validation to ensure structural integrity under extreme flight conditions.",
    problemStatement:
      "Existing UAV wings were either too heavy, reducing payload capacity, or lacked the necessary strength to withstand high-G maneuvers and turbulence. The client needed a 30% weight reduction without compromising stiffness or fatigue life.",
    engineeringSolution:
      "Using SolidWorks for parametric design and ANSYS for FEA, we optimized the wing's internal rib-spar layout and skin thickness. Composite-aluminium hybrid zones were introduced. Non-linear buckling analysis validated the design up to 8G load factor.",
    tools: ["SolidWorks", "ANSYS Mechanical", "CFD", "MATLAB"],
    technologies: ["Parametric Modeling", "Non-linear FEA", "Topology Optimization"],
    finalOutcome:
      "Achieved 34% weight reduction while exceeding strength requirements. The wing passed static and dynamic tests, and the client reported improved UAV endurance and payload capacity. Manufacturing costs reduced by 18% due to simplified assembly.",
    gallery: [uav1, uav2, uav3, uav4], // Example gallery (replace with actual images)
  },
  "bracket-opt": {
    title: "Aluminium Bracket Structural Optimization",
    slug: "bracket-opt",
    heroImage: bracketOpt,
    overview:
      "Topology optimization of an aircraft bracket resulted in 32% weight reduction while maintaining stiffness requirements. Ready for additive or subtractive manufacturing.",
    problemStatement:
      "The original bracket was over-engineered, adding unnecessary weight to the airframe. The goal was to reduce mass while preserving structural performance under operational loads.",
    engineeringSolution:
      "Performed topology optimization using Abaqus/Generative Design. The optimized geometry was reinterpreted for CNC machining. Validation included linear static analysis and vibration testing.",
    tools: ["SolidWorks", "Abaqus", "Generative Design"],
    technologies: ["Topology Optimization", "Generative Design", "CNC Machining"],
    finalOutcome:
      "32% weight reduction, 100% stiffness retention. The new bracket passed all qualification tests and is now in production for a regional jet program.",
    gallery: [bracket1, bracket2, bracket3, bracket4],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string>("");

  const project = caseStudyData[slug as keyof typeof caseStudyData];

  useEffect(() => {
    if (!project) {
      // Redirect to projects page if case study not found
      navigate("/projects");
      return;
    }
    document.title = `BAMRL | ${project.title}`;
    setActiveImage(project.heroImage);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* ========== GLOBAL BACKGROUND (same as Collaboration page) ========== */}
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
      <div className="fixed inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="radar-sweep" style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }} />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="relative z-10">
        {/* Hero Section with slow zoom */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={activeImage}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ scale: 1.1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-mono">Case Study</p>
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <div className="w-24 h-0.5 bg-primary/60 mx-auto mt-6 animate-pulse" />
          </motion.div>
        </section>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Project Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.overview}</p>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Problem Statement
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.problemStatement}</p>
        </motion.section>

        {/* Engineering Solution */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Engineering Solution
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.engineeringSolution}</p>
        </motion.section>

        {/* Tools & Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm font-mono border border-primary/40 text-primary rounded-full bg-primary/5 backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm font-mono border border-cyan-500/40 text-cyan-400 rounded-full bg-cyan-500/5 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Final Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Final Outcome
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.finalOutcome}</p>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Project Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {project.gallery.map((img, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl group cursor-pointer border border-white/10"
      onClick={() => {
  setActiveImage(img);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}
    >
      {/* Image */}
      <img
        src={img}
        alt={`Gallery ${idx + 1}`}
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Glow effect */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-500 to-primary blur-xl opacity-0 group-hover:opacity-20 transition duration-500" />

      {/* Label */}
      <div className="absolute bottom-3 left-3 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition">
        View Analysis →
      </div>
    </motion.div>
  ))}
</div>
</motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-24 px-6 md:px-20 text-center border-t border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Similar Project</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's bring your aerospace engineering challenge to life with our proven expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-gradient-to-r from-primary to-cyan-600 text-white font-mono text-sm uppercase tracking-wider rounded-md shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            Contact Engineering Team →
          </motion.button>
        </motion.section>
      </div>

      {/* Keyframes for animations */}
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
}