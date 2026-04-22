import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Chemical Analysis",
    desc: "High-resolution Optical Emission Spectrometry (OES) for precise element detection.",
  },
  {
    title: "Mechanical Testing",
    desc: "Tensile, yield, elongation, and hardness testing using advanced equipment.",
  },
  {
    title: "Metallography",
    desc: "Microstructure analysis, grain size measurement, and inclusion evaluation.",
  },
  {
    title: "Failure Analysis",
    desc: "Root cause investigation for aerospace and industrial components.",
  },
];

const LabCapabilities: React.FC = () => {
  return (
    <section id="capabilities" className="bg-transparent py-12 md:py-20 px-4 md:px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Laboratory Capabilities
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Advanced testing and validation services designed for aerospace-grade precision and performance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-lg hover:border-blue-500 transition-all duration-300 group"
          >
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/10 blur-xl"></div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default LabCapabilities;