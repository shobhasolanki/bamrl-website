import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";
import lab1 from "@/assets/lab1.jpeg";
import engineer from "@/assets/engineer.jpeg";
import director from "@/assets/director.png";
import aero from "@/assets/aero.webp";
import evImage from "@/assets/ev-battery.jpg";

const About = () => {
  // Lead form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData);
    alert("Thank you! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", projectDetails: "" });
  };

  // NEW: scroll to lead form function
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pillars = [
    {
      title: "Speed",
      desc: "Fast turnaround with precision engineering",
      icon: "⚡",
    },
    {
      title: "Specialization",
      desc: "Focused expertise in aerospace aluminium",
      icon: "🧠",
    },
    {
      title: "National Pride",
      desc: "Supporting Make in India innovation",
      icon: "🇮🇳",
    },
    {
      title: "Traceability",
      desc: "Complete data transparency & validation",
      icon: "📊",
    },
  ];

  // CHANGED: Industry data for interactive grid
  const industries = [
    {
      name: "Aerospace",
      desc: "Structural Design, FEA, Validation",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1974&auto=format", // aerospace
      gradient: "from-black/80 via-black/50 to-transparent",
    },
    {
      name: "Automobile",
      desc: "Lightweight components, durability testing",
      image: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=2072&auto=format", // car parts
      gradient: "from-black/80 via-black/50 to-transparent",
    },
    {
  name: "EV (Electric Vehicles)",
  desc: "Battery casing, thermal structures",
  image: evImage,
  gradient: "from-black/80 via-black/50 to-transparent",
},
    {
      name: "Aluminium Engineering",
      desc: "6xxx & 7xxx alloy specialization",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1974&auto=format", // aluminium
      gradient: "from-black/80 via-black/50 to-transparent",
    },
  ];

  // CHANGED: Why BAMRL data for horizontal strip
  const whyPoints = [
    { icon: "⚡", title: "Speed", highlight: "48h Turnaround", desc: "Industry-leading certification speed" },
    { icon: "🧠", title: "Specialization", highlight: "Aluminium Focus", desc: "Deep expertise in 6xxx & 7xxx alloys" },
    { icon: "🇮🇳", title: "National Pride", highlight: "Make in India", desc: "Supporting indigenous innovation" },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative bg-black text-white h-auto overflow-x-hidden">
      {/* ========== BACKGROUND LAYER (unchanged) ========== */}
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
        {/* 🔥 HERO SECTION (unchanged except button onClick) */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <img src={lab1} className="absolute w-full h-full object-cover opacity-30" alt="lab background" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Innovation in Every Atom
            </h1>
            <h2 className="text-primary text-2xl md:text-4xl mt-4 font-bold uppercase tracking-wider">
              Precision Aluminium Engineering for Aerospace Applications
            </h2>
            <p className="mt-6 text-gray-400 text-sm md:text-base font-mono">
              Precision. Innovation. Performance.
            </p>

            {/* CHANGED: Buttons with onClick scroll */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={scrollToForm}
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-black font-semibold rounded-md transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Request a Quote
              </button>
              <button
                onClick={scrollToForm}
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-md transition-all duration-300"
              >
                Submit Your Project
              </button>
            </div>
            <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <span className="text-primary font-mono text-sm tracking-wide">
                ⚡ 48-Hour Turnaround for Testing & Certification
              </span>
            </div>
          </motion.div>
        </section>

        {/* Stats section (unchanged) */}
        <section className="py-28 px-6 md:px-20 text-center relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { num: 15, suffix: "+", label: "Years Experience" },
              { num: 48, suffix: "H", label: "Turnaround Time" },
              { num: 100, suffix: "%", label: "Accuracy" },
              { num: 7, suffix: "xxx", label: "Alloy Expertise" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,150,255,0.2)] transition-all duration-300"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  <CountUp end={item.num} duration={2} />
                  {item.suffix}
                </h3>
                <p className="text-gray-400 mt-3 text-sm tracking-wide uppercase font-mono">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== CHANGED: INTERACTIVE INDUSTRY SECTION (2x2 grid with hover zoom + glow) ========== */}
        <section className="py-20 px-6 md:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">Core Capabilities</h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Specialized engineering across key industries</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-primary/30 transition-all duration-500"
              >
                {/* Background Image with zoom on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} group-hover:bg-black/60 transition-all duration-500`} />
                {/* Content - hidden text revealed on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {industry.desc}
                  </p>
                </div>
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== CHANGED: WHY BAMRL - HORIZONTAL TIMELINE STRIP ========== */}
        <section className="py-20 px-6 md:px-20 bg-black/40 backdrop-blur-sm relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">Why BAMRL</h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2" />

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 relative">
              {whyPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px -5px rgba(0,150,255,0.4)" }}
                  className="group flex-1 text-center p-6 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/10 hover:border-primary/60 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{point.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                  <p className="text-primary text-lg font-semibold mt-1">{point.highlight}</p>
                  <p className="text-gray-400 text-sm mt-3">{point.desc}</p>
                  {/* Optional decorative dot for timeline */}
                  {idx < whyPoints.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-4 h-4 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax image section (unchanged) */}
        <section className="relative h-[70vh] overflow-hidden">
          <motion.div style={{ y }} initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
            <img src={aero} className="w-full h-full object-cover scale-110 opacity-50" alt="lab" />
          </motion.div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-white">PRECISION ENGINEERED</h2>
            <div className="w-20 h-[2px] bg-primary mt-4 mb-6 mx-auto" />
            <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
              Delivering aerospace-grade aluminium structures with unmatched precision, speed, and reliability—engineered for next-generation performance.
            </p>
          </div>
        </section>

        {/* Company Overview (unchanged) */}
        <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="relative group overflow-hidden rounded-xl">
            <img src={engineer} className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] object-cover transition duration-500 group-hover:scale-110" alt="engineer" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition">
              <p className="text-sm font-mono">Advanced Simulation Lab</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Company Overview</h2>
            <div className="w-16 h-[2px] bg-primary mb-6" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              BAMRL Pvt Ltd is an emerging aerospace engineering company focused on the design, validation, and manufacturing of aluminium structural components. We deliver precision-engineered solutions that meet modern aerospace standards.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Precision in Every Micron – 100% accuracy</li>
              <li>✔ Technological Agility – Adapting to new alloys</li>
              <li>✔ Founder-Driven Accountability</li>
            </ul>
          </div>
        </section>

        {/* Vision + Mission (unchanged) */}
        <section className="py-20 px-6 md:px-20 bg-black/40 backdrop-blur-sm relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div whileHover={{ scale: 1.03 }} className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,150,255,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-primary">Vision</h3>
              <p className="text-gray-400">To become India’s most trusted and technologically advanced center for metallurgical research and aerospace validation.</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Trusted – Data integrity first</li>
                <li>• Advanced – Research-driven lab</li>
                <li>• Empowering – Supporting MSMEs</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(0,150,255,0.2)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-primary">Mission</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Deliver high-quality engineering solutions</li>
                <li>• Promote simulation-driven development</li>
                <li>• Build aerospace-grade components</li>
                <li>• Collaborate with academia & industry</li>
              </ul>
              <p className="mt-4 text-gray-400">Accelerating ‘Make in India’ through high-performance alloy characterization with world-class accuracy.</p>
            </motion.div>
          </div>
        </section>

        {/* Pillars (unchanged) */}
        <section className="py-20 px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 uppercase tracking-[0.2em]">Our Pillars</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.15 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.15),transparent_70%)]" />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white tracking-wide">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Director’s Message (unchanged) */}
        <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.img
            src={director}
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] aspect-[4/3] object-cover rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            alt="director"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Director’s Message</h2>
            <div className="w-16 h-[2px] bg-primary mb-6" />
            <p className="text-gray-400 leading-7">
              At BAMRL, we are building a specialized engineering ecosystem focused on aerospace aluminium structures. Our mission is to eliminate delays in material validation and deliver high-precision results with unmatched speed.
            </p>
            <p className="mt-4 italic text-gray-300">“Innovation in Every Atom”</p>
            <p className="mt-4 font-semibold text-primary">– Anil Ramji Pawar</p>
          </div>
        </section>

        {/* Philosophy quote (unchanged) */}
        <section className="py-24 px-6 md:px-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-relaxed">
              “The strength of a nation’s defense is found in the integrity of its materials.”
            </p>
            <div className="w-16 h-[2px] bg-primary mx-auto my-6" />
            <p className="text-gray-500 font-mono text-sm tracking-wider">— BAMRL PHILOSOPHY</p>
          </div>
        </section>

        {/* Leadership (unchanged) */}
        <section className="py-20 px-6 md:px-20 bg-black/40 backdrop-blur-sm relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Anil Ramji Pawar", role: "Managing Director", desc: "15+ years experience in aluminium fabrication." },
              { name: "Mohammed Fahim Khan", role: "Director – Technical Operations", desc: "Expert in operational excellence and aerospace validation." },
            ].map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.15),transparent_70%)]" />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{person.name}</h3>
                  <p className="text-primary text-sm mt-1 font-mono tracking-wide">{person.role}</p>
                  <div className="w-10 h-[2px] bg-primary mt-3 mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{person.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== LEAD FORM SECTION with id="lead-form" ========== */}
        <section id="lead-form" className="py-20 px-6 md:px-20 relative z-10 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">Start Your Project</h2>
              <div className="w-16 h-[2px] bg-primary mx-auto mt-4 mb-4" />
              <p className="text-gray-400">Get a quote or discuss your aerospace engineering needs.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/60 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/60 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/60 transition"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-1">Project Details</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/60 transition"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/80 text-black font-semibold rounded-md transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </section>
      </div>

      {/* Keyframes (unchanged) */}
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

export default About;