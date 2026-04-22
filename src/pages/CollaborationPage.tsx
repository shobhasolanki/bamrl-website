import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import BamrlLogo from "../assets/bamrl-logo.png";

// Collaboration sections data
const collaborations = [
  {
    id: "academic",
    title: "Academic Collaboration",
    icon: "🎓",
    description:
      "BAMRL collaborates with engineering institutions for research and development in aerospace structures. We believe in bridging academia and industry to push the boundaries of aluminium aerospace engineering.",
    opportunities: [
      "Final Year Projects",
      "Internships",
      "Joint Research Programs",
      "Lab Development Support",
    ],
    ctaText: "Partner with Us →",
    ctaLink: "/contact",
  },
  {
    id: "industry",
    title: "Industry Collaboration",
    icon: "🏭",
    description:
      "We partner with aerospace startups and engineering companies for design, analysis, and manufacturing support. From concept to certification, our expertise accelerates your time-to-market.",
    opportunities: [
      "Design & Analysis Outsourcing",
      "Prototype Manufacturing",
      "Technology Transfer",
      "Consulting Services",
    ],
    ctaText: "Let's Collaborate →",
    ctaLink: "/contact",
  },
];

// 🏦 Institutional Policy Support
const policySupport = [
  "MSME Aerospace Manufacturing Subsidy (India)",
  "Make in India Defense Manufacturing Incentives",
  "Startup India Seed Fund Support",
  "SIDBI Technology Upgrade Loans",
  "Export Promotion Capital Goods (EPCG) Scheme",
  "Defense Innovation Organisation (DIO) Grants",
  "RBI MSME Priority Sector Lending",
  "Maharashtra Industrial Development Policy (Pune)",
  "Karnataka Aerospace Policy (Bangalore)",
  "Maharashtra Aerospace & Defence Policy (Mumbai Region)",
];

// 🎓 College Collaborations
const collegeCollaborations = [
  "College of Engineering Pune (COEP)",
  "MIT World Peace University, Pune",
  "VIT Vellore",
  "SRM Institute of Science and Technology",
  "RV College of Engineering, Bangalore",
  "IIIT Bangalore",
  "PICT Pune",
  "DY Patil College of Engineering",
  "Anna University",
  "NIT Karnataka",
];

// 🧪 Active Project Collaborations
const projectCollaborations = [
  {
    title: "UAV Wing Structural Optimization",
    partner: "Engineering Research Team",
    type: "FEA + Design Validation",
    image: "/images/projects/uav.jpeg"
  },
  {
    title: "Aluminium Alloy Failure Analysis",
    partner: "Industrial Manufacturing Unit",
    type: "Metallurgical Testing",
    image: "/images/projects/metal.jpg"
  },
  {
    title: "Lightweight Bracket Development",
    partner: "Aerospace Startup",
    type: "Design + Prototype",
    image: "/images/projects/bracket.jpeg"
  },
  {
    title: "Drone Frame Stress Simulation",
    partner: "Academic Research Lab",
    type: "Simulation Study",
    image: "/images/projects/drone.jpg"
  }
];

// Single collaboration card component
const CollaborationCard = ({
  item,
  index,
}: {
  item: typeof collaborations[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  console.log("Logo path:", BamrlLogo);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative w-full rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 overflow-hidden hover:border-primary/80 hover:shadow-[0_0_40px_rgba(0,150,255,0.3)] hover:-translate-y-2 transition-all duration-500"
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scanline" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-10 pointer-events-none" />

      <div className="relative p-6 md:p-8">
        {/* Header with icon and title */}
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-3xl md:text-4xl"
          >
            {item.icon}
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
            {item.title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative h-[220px] md:h-full rounded-lg overflow-hidden border border-white/10">

  <img
    src={
      item.id === "academic"
        ? "/images/academic.jpg"
        : "/images/industry.jpg"
    }
    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

</div>
          {/* Left side: Description and CTA */}
          <div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              {item.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 bg-transparent border border-primary text-primary uppercase text-xs tracking-[0.2em] font-semibold rounded-sm overflow-hidden group/btn hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open(item.ctaLink, "_self")}
            >
              <span className="relative z-10">{item.ctaText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
              <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 shadow-[0_0_20px_rgba(0,150,255,0.7)] transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Right side: Opportunities list */}
          <div>
            <h3 className="text-primary text-sm uppercase tracking-wider mb-3 font-mono">
              Opportunities
            </h3>
            <ul className="space-y-2">
              {item.opportunities.map((opp, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  className="flex items-center gap-2 text-gray-300 text-sm md:text-base group/opp"
                >
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                  {opp}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Collaboration Page component
export default function CollaborationPage() {
  useEffect(() => {
    document.title = "BAMRL | Collaborate";
  }, []);

  return (
    <div className="relative h-auto bg-black overflow-x-hidden">
      <style>{`
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        .orbit-rotate {
          animation: orbitRotate 25s linear infinite;
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-scanline {
          animation: scanline 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>

      {/* Starfield background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 5 + 2;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Background grid */}
      <div className="fixed inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-20 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
  <img
    src="/images/collab-hero.png"
    className="w-full h-full object-cover opacity-30"
  />
  <div className="absolute inset-0 bg-black/40" />
</div>
        <div className="absolute inset-0 bg-mesh" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(0,150,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,255,200,0.08) 0%, transparent 50%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-mono"
          >
            Partnerships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tight bg-gradient-to-r from-white via-primary/80 to-white bg-clip-text text-transparent"
          >
            Collaborate With BAMRL
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-0.5 bg-primary/60 mx-auto mt-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-gray-400 text-sm md:text-base max-w-xl mx-auto"
          >
            Working with institutions and industries to accelerate aerospace advancement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8"
          >
            <div className="inline-flex gap-2 text-primary/40 text-xs font-mono">
              <span>◆</span> MISSION READY <span>◆</span> SECURE CHANNEL <span>◆</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Collaboration cards */}
        <div className="space-y-12">
          {collaborations.map((item, idx) => (
            <CollaborationCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* POLICY SUPPORT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Institutional & Policy Support Framework
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm">
            BAMRL operates within India's aerospace and MSME ecosystem, leveraging key
            government policies, financial frameworks, and regional industrial initiatives
            across Pune, Bangalore, and Mumbai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policySupport.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_25px_-5px_rgba(0,150,255,0.4)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-300" />
                <p className="relative text-sm md:text-base text-gray-300 group-hover:text-white transition">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ACADEMIC PARTNERSHIPS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Academic Partnerships
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm">
            Collaborating with leading engineering institutions across India to drive
            innovation, research, and aerospace-ready talent development.
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />
            <div className="flex gap-6 animate-scroll">
              {[...collegeCollaborations, ...collegeCollaborations].map(
                (college, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group min-w-[240px] max-w-[260px] px-5 py-4 text-center border border-white/10 rounded-xl bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_rgba(0,150,255,0.4)] cursor-pointer"
                  >
                    <p className="text-sm md:text-base font-medium tracking-wide text-gray-200 group-hover:text-white transition break-words leading-snug">
                      {college}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.section>

        {/* ORBITAL COLLABORATION VISUAL - FIXED POSITIONING */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-12">
            Collaboration Network
          </h2>

          <div className="relative w-[400px] h-[400px] md:w-[520px] md:h-[520px] flex items-center justify-center">
            {/* Outer orbit rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_30px_rgba(0,150,255,0.2)]" />
            <div className="absolute inset-[-10px] rounded-full border border-primary/10 shadow-[0_0_50px_rgba(0,150,255,0.1)]" />

            {/* Center core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center backdrop-blur-md relative"
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                <div className="absolute inset-[-4px] rounded-full border border-primary/40 animate-pulse" />
                <img
                  src={BamrlLogo}
                  className="w-16 h-16 object-contain relative z-10"
                  alt="BAMRL Logo"
                />
              </motion.div>
            </div>

            {/* Rotating orbit container - only rotates the ring and particles, not the labels */}
            <div className="absolute inset-0 orbit-rotate">
              {/* Orbit particles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * 2 * Math.PI;
                const radius = 180;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={`particle-${i}`}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(0,150,255,0.8)]" />
                  </div>
                );
              })}
            </div>

            {/* Fixed position orbit items (they do NOT rotate, to keep text readable) */}
            <div className="absolute inset-0">
              {collegeCollaborations.slice(0, 8).map((college, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const radius = 170;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(0,150,255,0.8)" }}
                      className="text-[10px] md:text-xs text-gray-300 bg-black/60 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-primary cursor-pointer whitespace-nowrap"
                    >
                      {college.split(" ")[0]}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ACTIVE ENGINEERING COLLABORATIONS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Active Engineering Collaborations
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm">
            Ongoing collaborations across aerospace design, simulation, and metallurgical
            validation projects with academic and industrial partners.
          </p>
          <div className="space-y-6">
            {projectCollaborations.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group relative p-6 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,150,255,0.4)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-500" />
                <div className="relative flex gap-4 items-center">

  {/* 🔥 IMAGE HERE */}
  <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 group/img relative">

  <img
    src={proj.image}
    alt={proj.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
  />

  {/* subtle glow overlay */}
  <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition duration-500 bg-primary/10" />

</div>

  {/* TEXT CONTENT */}
  <div className="flex-1">
    <h3 className="text-white text-lg font-semibold mb-1">
      {proj.title}
    </h3>
    <p className="text-gray-400 text-sm">{proj.partner}</p>

    <div className="flex items-center gap-3 mt-2">
      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs uppercase tracking-wider font-mono">
        {proj.type}
      </span>
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
    </div>
  </div>

</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Confidentiality statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">🔒 Confidentiality</p>
          <p className="text-gray-300 text-sm mt-2 max-w-2xl mx-auto">
            All client data, project designs, and technical information are handled with
            strict confidentiality and professional engineering ethics.
          </p>
        </motion.div>
      </div>
    </div>
  );
}