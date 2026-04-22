import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import uavWing from "@/assets/uav-wing-cad.png";
import uavFea from "@/assets/uav-wing-fea.jpg";
import { useNavigate } from "react-router-dom";
import bracketOpt from "@/assets/bracket-optimized.jpg";
import bracketOriginal from "@/assets/bracket-original.png";

// Project data
const projects = [
  {
    id: 1,
    title: "UAV Wing Structural Design & Validation",
    description:
      "High-performance lightweight wing structure for tactical UAVs. Engineered using parametric CAD and validated through non-linear FEA under extreme aerodynamic loads.",
    tags: ["SolidWorks", "ANSYS", "FEA", "CFD"],
    image: uavWing,
    thumbnails: [uavWing, uavFea],
    caseStudyLink: "/case-studies/uav-wing",
  },
  {
    id: 2,
    title: "Aluminium Bracket Structural Optimization",
    description:
      "Topology optimization of an aircraft bracket resulted in 32% weight reduction while maintaining stiffness requirements. Ready for additive or subtractive manufacturing.",
    tags: ["SolidWorks", "Abaqus", "Generative Design"],
    image: bracketOpt,
    thumbnails: [bracketOriginal, bracketOpt],
    caseStudyLink: "/case-studies/bracket-opt",
  },
  // Add more projects as needed
];

// Single project card component
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(project.image);
  const [slider, setSlider] = useState(50);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative w-full rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 overflow-hidden hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,150,255,0.3)] transition-all duration-300"
    >
      {/* Subtle grid overlay (matching homepage) */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-10 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row gap-6 p-6 md:p-8">
        {/* Left: Main image with zoom on hover */}
        <div className="lg:w-1/2 overflow-hidden rounded-xl">
          <motion.img
            src={activeImage}
            alt={project.title}
            className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white mb-2">
              {project.title}
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech tags (pill badges) */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider border border-primary/40 text-primary/90 rounded-full bg-primary/5 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Thumbnails row */}
          <div className="flex gap-3">
            {project.thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setActiveImage(thumb)}
                className={`w-14 h-14 object-cover rounded-md border cursor-pointer transition-all duration-200 ${
                  activeImage === thumb
                    ? "border-primary scale-105"
                    : "border-white/20 hover:border-primary hover:scale-105"
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-fit px-6 py-3 bg-transparent border border-primary text-primary uppercase text-xs tracking-[0.2em] font-semibold rounded-sm hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(0,150,255,0.5)] transition-all duration-300"
            onClick={() => navigate(project.caseStudyLink)}
          >
            View Case Study →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Page component
export default function ProjectsPage() {
  useEffect(() => {
    document.title = "BAMRL | Engineering Projects";
  }, []);

  return (
    <div className="relative bg-black text-white h-auto overflow-x-hidden">
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

      {/* Radar sweep effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="radar-sweep" style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }} />
      </div>

      {/* ========== CONTENT (relative z-index) ========== */}
      <div className="relative z-10">
        {/* 🔥 HERO */}
        <section className="relative min-h-[45vh] md:min-h-[60vh] py-12 md:py-16 flex items-center justify-center text-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/projects-hero.jpg"
              alt="Projects Background"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Engineering Projects
            </h1>
            <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              High-performance aerospace structures designed, validated, and optimized for real-world applications.
            </p>
          </motion.div>
        </section>

        {/* 🔥 PROJECT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 px-6 md:px-20">
          {[
            { num: "10+", label: "Projects Completed" },
            { num: "98%", label: "Accuracy Rate" },
            { num: "48H", label: "Delivery Speed" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{item.num}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* 🔥 FILTER BAR */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Design", "Analysis", "Simulation", "Manufacturing"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-xs border border-white/20 rounded-full text-gray-300 hover:border-primary hover:text-primary transition"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Future projects placeholder */}
          <div className="text-center mt-16 opacity-70">
            <div className="mt-20 text-center">
              <div className="inline-block px-6 py-3 border border-dashed border-white/20 rounded-xl text-gray-400 text-sm">
                🚀 More advanced aerospace projects will be added soon +
              </div>
            </div>
          </div>

          {/* 🔥 CTA SECTION */}
          <section className="py-20 px-6 md:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's build high-performance aerospace solutions together.
            </p>
            <button className="px-8 py-3 bg-primary text-black font-semibold rounded-md hover:bg-blue-400 transition">
              Start Your Project →
            </button>
          </section>
        </div>
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