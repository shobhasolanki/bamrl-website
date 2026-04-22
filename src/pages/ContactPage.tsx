import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });
 
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    document.title = "BAMRL | Contact Mission Control";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `🚀 New Inquiry - BAMRL

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏢 Company: ${formData.company}

📝 Details:
${formData.details}
`;

  const whatsappURL = `https://wa.me/918421306939?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  // Reset form after opening WhatsApp
  setFormData({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });
};

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918421306939?text=Hello%20BAMRL%2C%20I%20need%20assistance%20with%20aerospace%20engineering.",
      "_blank"
    );
  };

  // Floating label helper
  const hasValue = (field: string) => !!formData[field as keyof typeof formData];

  return (
    <div className="relative h-auto bg-black overflow-x-hidden">
      <style>{`
        @keyframes radarSweep {
          0% { transform: rotate(0deg); opacity: 0.2; }
          100% { transform: rotate(360deg); opacity: 0.4; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes floatStars {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-1000px); }
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
        .glow-pulse {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .input-glow:focus {
          box-shadow: 0 0 0 2px rgba(0,150,255,0.3), 0 0 15px rgba(0,150,255,0.4);
          border-color: #0096ff;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0,150,255,0.25);
          border-color: rgba(0,150,255,0.6);
        }
      `}</style>

      {/* Starfield background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => {
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

      {/* Background grid */}
      <div className="fixed inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-20 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* 🔥 HERO with aerospace background */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slowZoom"
          style={{
            
            backgroundImage: "url('/assets/contact-hero.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Radar sweep effect overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="radar-sweep" style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }} />
        </div>

        {/* Content */}
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
            Secure Channel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tight bg-gradient-to-r from-white via-primary/80 to-white bg-clip-text text-transparent"
          >
            Mission Control
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
            className="mt-6 text-gray-300 text-sm md:text-base max-w-xl mx-auto"
          >
            Reach out to our engineering team. We respond within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column: Contact info + Confidentiality + WhatsApp */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >


{/* 🔥 Visual Block */}
<div className="relative rounded-2xl overflow-hidden border border-white/10 group">
  <img
    src="/assets/contact-tech.jpg"
    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

  <div className="absolute bottom-4 left-4">
    <p className="text-xs text-primary font-mono tracking-wider uppercase">
      Engineering Network
    </p>
    <h3 className="text-white font-bold text-lg">
      Global Aerospace Support
    </h3>
  </div>
</div>

            {/* Command Center Card */}
            <div className="card-hover rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg">📍</div>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                  Command Center
                </h2>
              </div>
              <div className="space-y-3 text-gray-300 text-sm md:text-base">
                <p className="hover:text-primary transition-colors duration-200">BAMRL Pvt Ltd</p>
                <p className="hover:text-primary transition-colors duration-200">Pune, Maharashtra, India</p>
                <div className="h-px bg-gradient-to-r from-primary/30 to-transparent my-3" />
                <a href="mailto:contact@bamrl.com" className="font-mono text-primary hover:underline hover:underline-offset-2 transition-all block group">
                  <span className="inline-flex items-center gap-2">✉️ contact@bamrl.com</span>
                </a>
                <a href="tel:+911234567890" className="font-mono text-primary hover:underline hover:underline-offset-2 transition-all block group">
                  <span className="inline-flex items-center gap-2">📞 +91 12345 67890</span>
                </a>
              </div>
            </div>

            {/* Confidentiality Card */}
            <div className="card-hover rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg">🔒</div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                  Confidentiality Protocol
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                All client data, project designs, and technical information are handled with strict
                confidentiality and professional engineering ethics. Your data is encrypted and never shared.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex gap-4 text-[11px] text-gray-500 font-mono">
                <span>🔐 AES-256</span>
                <span>🛡️ NDAs Available</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 justify-start items-center">
              <div className="flex items-center gap-2 text-xs font-mono text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Response within 24h
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                <span>🔒</span> Secure Comms
              </div>
            </div>

            {/* WhatsApp Button - Enhanced */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="relative w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-mono text-xs uppercase tracking-wider rounded-lg overflow-hidden group transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                <span className="text-lg">💬</span> 
                <span>Chat on WhatsApp</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-300 animate-ping" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 transition-all duration-300 card-hover relative overflow-hidden"
          >

{/* Glow Hover Effect */}
<div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
  <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-500 to-primary blur-xl opacity-20" />
</div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg">📡</div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                Transmit Inquiry
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field - Floating Label */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-black/60 border rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none transition-all duration-200 input-glow ${
                    focusedField === 'name' || hasValue('name')
                      ? 'border-primary shadow-[0_0_0_1px_rgba(0,150,255,0.5)]'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-wider ${
                    focusedField === 'name' || hasValue('name')
                      ? 'top-1 text-primary text-[10px]'
                      : 'top-3.5 text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  Full Name *
                </label>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-black/60 border rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none transition-all duration-200 input-glow ${
                    focusedField === 'email' || hasValue('email')
                      ? 'border-primary shadow-[0_0_0_1px_rgba(0,150,255,0.5)]'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-wider ${
                    focusedField === 'email' || hasValue('email')
                      ? 'top-1 text-primary text-[10px]'
                      : 'top-3.5 text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  Email Address *
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-black/60 border rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none transition-all duration-200 input-glow ${
                    focusedField === 'phone' || hasValue('phone')
                      ? 'border-primary shadow-[0_0_0_1px_rgba(0,150,255,0.5)]'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-wider ${
                    focusedField === 'phone' || hasValue('phone')
                      ? 'top-1 text-primary text-[10px]'
                      : 'top-3.5 text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  Phone Number
                </label>
              </div>

              {/* Company Field */}
              <div className="relative group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-black/60 border rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none transition-all duration-200 input-glow ${
                    focusedField === 'company' || hasValue('company')
                      ? 'border-primary shadow-[0_0_0_1px_rgba(0,150,255,0.5)]'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="company"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-wider ${
                    focusedField === 'company' || hasValue('company')
                      ? 'top-1 text-primary text-[10px]'
                      : 'top-3.5 text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  Company / Organization
                </label>
              </div>

              {/* Details Field */}
              <div className="relative group">
                <textarea
                  name="details"
                  id="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('details')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-black/60 border rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none transition-all duration-200 input-glow resize-none ${
                    focusedField === 'details' || hasValue('details')
                      ? 'border-primary shadow-[0_0_0_1px_rgba(0,150,255,0.5)]'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="details"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-wider ${
                    focusedField === 'details' || hasValue('details')
                      ? 'top-1 text-primary text-[10px]'
                      : 'top-3.5 text-gray-400 group-hover:text-gray-300'
                  }`}
                >
                  Project Details *
                </label>
              </div>

              {/* Submit Button with enhanced animation */}
              <motion.button
                type="submit"
                
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-3.5 bg-gradient-to-r from-primary to-cyan-600 text-white font-mono text-xs uppercase tracking-wider rounded-lg overflow-hidden group transition-all duration-300 disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2">
                      (
                    <>
                      Send Secure Message
                      <span className="text-base ml-1">→</span>
                    </>
                  )
                </span>
              </motion.button>

              
            </form>
          </motion.div>
        </div>

{/* 📍 Google Map */}
<div className="mt-16 rounded-2xl overflow-hidden border border-white/10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.8290046495254!2d73.94737257355378!3d18.55729148254339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c375d0ffb7dd%3A0x70862efbb882945!2sBAMRL%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1776414374846!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        {/* Footer contact chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-xs font-mono flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            Direct secure channel: 
            <a href="mailto:contact@bamrl.com" className="text-primary hover:underline hover:underline-offset-4 transition-all font-medium">
              contact@bamrl.com
            </a>
            <span className="w-1 h-1 rounded-full bg-primary/60" />
          </p>
        </motion.div>
      </div>

      

      {/* Additional CSS for zoom animation */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}