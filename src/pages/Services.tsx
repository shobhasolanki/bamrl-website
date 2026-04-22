import { motion } from "framer-motion";
import heroImg from "@/assets/lab1.jpeg";
import design from "@/assets/design1.jpeg";
import testing from "@/assets/testing1.jpeg";
import simulation from "@/assets/lab2.jpeg";
import manufacturing from "@/assets/manufacturing1.jpeg";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Aerospace Structural Design",
    slug: "aerospace-structural-design",
    image: design,
    desc: "Lightweight, high-strength aluminium structures engineered for aerospace performance.",
    points: [
      "Concept Design",
      "3D CAD Modeling (SolidWorks)",
      "Design Optimization"
    ]
  },
  {
    title: "Load & Stress Analysis",
    slug: "load-stress-analysis",
    image: testing,
    desc: "Accurate engineering calculations ensuring structural safety under real-world conditions.",
    points: [
      "Static Load Analysis",
      "Flight Condition Assumptions",
      "Safety Factor Calculations"
    ]
  },
  {
    title: "Simulation & Validation",
    slug: "simulation-validation",
    image: simulation,
    desc: "Advanced simulation techniques to validate structural integrity before manufacturing.",
    points: [
      "Stress Analysis",
      "Deformation Study",
      "FEA Simulation & Validation"
    ]
  },
  {
    title: "Manufacturing & Prototyping",
    slug: "manufacturing-prototyping",
    image: manufacturing,
    desc: "Precision manufacturing of aerospace aluminium components.",
    points: [
      "Sheet Metal Structures",
      "Machined Parts",
      "Assembly Support",
      "Prototype Development"
    ]
  }
];

const catalog = [
  "Chemical Analysis (OES)",
  "Mechanical Testing (UTM, Hardness)",
  "Metallography Analysis",
  "Failure Analysis"
];

const Services = () => {
  const navigate = useNavigate();

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
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <img 
            src={heroImg} 
            className="absolute w-full h-full object-cover opacity-30"
            alt="hero background"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              OUR SERVICES
            </h1>
            <p className="mt-6 text-gray-400 max-w-xl mx-auto">
              Engineering excellence across design, validation, and aerospace manufacturing.
            </p>
          </motion.div>
        </section>

        {/* 🔥 SERVICES */}
        <section className="py-20 px-6 md:px-20 space-y-16 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative grid md:grid-cols-2 gap-6 items-center p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition duration-300 ${
                i % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  alt={service.title}
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="text-xs text-gray-500 space-y-1 mb-5">
                  {service.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="text-xs uppercase tracking-[0.2em] px-5 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition"
                >
                  Read More →
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
            </motion.div>
          ))}
        </section>

        {/* Technical Expertise section */}
        <section className="py-24 px-6 md:px-20 relative">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              ENGINEERING CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Technical Expertise
            </h2>
            <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {catalog.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-4">
                    {["⚗️","🧪","🔬","⚠️"][i]}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-white tracking-wide">
                    {item}
                  </h3>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/50 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </section>
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
};

export default Services;