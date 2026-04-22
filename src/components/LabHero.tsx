import { motion } from "framer-motion";

const LabHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen py-20 w-full flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lab-bg.jpg"
          alt="Laboratory Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Advanced Material Research Laboratory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Precision Testing. Aerospace Validation. Engineering Excellence.
        </motion.p>

       <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  onClick={() => {
    const el = document.getElementById("capabilities");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-8 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg"
>
  Explore Capabilities
</motion.button>

      </div>
    </section>
  );
};

export default LabHero;