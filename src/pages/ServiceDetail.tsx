import { useParams } from "react-router-dom";
import aero from "@/assets/aero.webp";
import { motion } from "framer-motion";
import { useState } from "react";
import design from "@/assets/design1.jpeg";
import testing from "@/assets/testing1.jpeg";
import simulation from "@/assets/lab2.jpeg";
import manufacturing from "@/assets/manufacturing1.jpeg";

const serviceData = {
  "aerospace-structural-design": {
    title: "Aerospace Structural Design",
    image: design,
    desc: "We design lightweight, high-strength aluminium aerospace structures optimized for performance and durability.",
    points: [
      "Concept Design & Feasibility",
      "3D CAD Modeling (SolidWorks)",
      "Design Optimization for Weight Reduction",
      "Aerospace Compliance Standards"
    ]
  },
  "load-stress-analysis": {
    title: "Load & Stress Analysis",
    image: testing,
    desc: "We ensure structural integrity through precise engineering calculations and real-world simulation assumptions.",
    points: [
      "Static & Dynamic Load Analysis",
      "Flight Condition Evaluation",
      "Safety Factor Calculations",
      "Failure Prediction"
    ]
  },
  "simulation-validation": {
    title: "Simulation & Validation",
    image: simulation,
    desc: "Advanced FEA-based simulation to validate performance before manufacturing.",
    points: [
      "Stress & Deformation Analysis",
      "Finite Element Analysis (FEA)",
      "Thermal & Structural Validation",
      "Pre-manufacturing Testing"
    ]
  },
  "manufacturing-prototyping": {
    title: "Manufacturing & Prototyping",
    image: manufacturing,
    desc: "Precision manufacturing and prototyping of aerospace-grade aluminium components.",
    points: [
      "Sheet Metal Fabrication",
      "Machining & Assembly",
      "Prototype Development",
      "Production Support"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  const [formData, setFormData] = useState({ name: "", email: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) {
    return <div className="text-white p-10">Service not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", requirement: "" });
  };

  // Process steps with connector lines
  const steps = [
    { name: "Requirement", desc: "Understand your needs" },
    { name: "Design", desc: "CAD & optimization" },
    { name: "Validation", desc: "FEA & testing" },
    { name: "Delivery", desc: "Manufacturing & support" }
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* ========== GLOBAL ANIMATED BACKGROUND ========== */}
      {/* Starfield */}
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

      {/* Glowing blur orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Radar sweep overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="radar-sweep" style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }} />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="relative z-10">
        {/* 🔥 HERO SECTION with slow zoom, radar sweep, gradient overlay */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={service.image}
              className="w-full h-full object-cover"
              style={{ scale: 1.1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              alt={service.title}
            />
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          
          {/* Radar sweep on hero */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="radar-sweep-hero" style={{ width: '100%', height: '100%' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-mono">
              Engineering Service
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <div className="w-24 h-0.5 bg-primary/60 mx-auto animate-pulse" />
            <p className="text-gray-300 max-w-2xl mx-auto mt-6">
              {service.desc}
            </p>
          </motion.div>
        </section>

        {/* 🔥 WHAT WE DO (Glass cards with glow border hover) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 px-6 md:px-20 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-500 to-primary blur-xl opacity-20" />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 text-base">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 🔥 PROCESS SECTION with connector lines */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 px-6 md:px-20 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Process
          </h2>
          <div className="relative flex flex-wrap justify-center md:flex-nowrap gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex-1 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-white/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-500 to-primary blur-xl opacity-20" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs text-primary font-mono mb-2">Step {i + 1}</p>
                    <h3 className="text-xl font-semibold text-white">{step.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
                  </div>
                </motion.div>
                {/* Connector line (except last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* 🔥 CTA + FORM with enhanced inputs and animated submit button */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 px-6 md:px-20 max-w-7xl mx-auto"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Start Your Project With Us
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Get in touch for high-performance aerospace engineering solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-white/40"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-white/40"
                />
              </div>
              <div className="relative group">
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Requirement"
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-white/40 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-3 bg-gradient-to-r from-primary to-cyan-600 text-white font-mono text-sm uppercase tracking-wider rounded-md overflow-hidden group transition-all duration-300 disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry →"
                  )}
                </span>
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs text-center font-mono mt-4 bg-green-400/10 py-2 rounded-md border border-green-400/20"
                >
                  ✅ Inquiry received. Our team will contact you within 24 hours.
                </motion.p>
              )}
            </form>
          </div>
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
        @keyframes radarSweepHero {
          0% { transform: rotate(0deg); opacity: 0.15; }
          100% { transform: rotate(360deg); opacity: 0.3; }
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
        .radar-sweep-hero {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(0,150,255,0.12) 360deg);
          animation: radarSweepHero 12s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;