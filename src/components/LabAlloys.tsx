import { motion } from "framer-motion";

const LabAlloys: React.FC = () => {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 md:px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Specialized Alloy Expertise
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Focused expertise in high-performance aluminum alloys essential for aerospace structural integrity.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* 7xxx */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative p-8 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-lg group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/10 blur-xl rounded-2xl"></div>

          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            7xxx Series Alloys
          </h3>

          <p className="text-gray-400 relative z-10">
            High-strength, zinc-based aluminum alloys widely used in aerospace structures where maximum performance and load-bearing capacity are critical.
          </p>

          <ul className="mt-6 text-gray-400 text-sm space-y-2 relative z-10">
            <li>• Extremely high strength</li>
            <li>• Aerospace-grade performance</li>
            <li>• Ideal for critical structures</li>
          </ul>
        </motion.div>

        {/* 6xxx */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative p-8 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-lg group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/10 blur-xl rounded-2xl"></div>

          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            6xxx Series Alloys
          </h3>

          <p className="text-gray-400 relative z-10">
            Versatile magnesium-silicon alloys offering excellent strength, corrosion resistance, and manufacturability for structural applications.
          </p>

          <ul className="mt-6 text-gray-400 text-sm space-y-2 relative z-10">
            <li>• Good strength-to-weight ratio</li>
            <li>• Corrosion resistant</li>
            <li>• Easy to machine and fabricate</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default LabAlloys;