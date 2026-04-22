import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import basicImg from "@/assets/basic-component.jpg";
import optimizedImg from "@/assets/optimized-component.jpg";

const OptimizationSection = () => {
  const [optimized, setOptimized] = useState(false);

  return (
    <section id="optimization" className=" py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 05 — OPTIMIZATION</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-8 sm:mb-10">
          STRUCTURAL OPTIMIZATION
        </h2>

        <div className="section-panel relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Image area */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={optimized ? "after" : "before"}
                  src={optimized ? optimizedImg : basicImg}
                  alt={optimized ? "Optimized component" : "Basic component"}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <div className="absolute top-3 left-3">
                <span className={`font-heading text-[9px] tracking-[0.15em] px-3 py-1 border ${
                  optimized ? "bg-accent/10 text-accent border-accent/30" : "bg-muted text-muted-foreground border-border"
                }`}>
                  {optimized ? "OPTIMIZED" : "BASELINE"}
                </span>
              </div>
            </div>

            {/* Data area */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <button
                onClick={() => setOptimized(!optimized)}
                className={`font-heading text-[10px] sm:text-xs tracking-[0.15em] uppercase px-4 sm:px-6 py-3 border transition-all duration-300 w-fit ${
                  optimized
                    ? "bg-accent/10 text-accent border-accent hover:bg-accent/20"
                    : "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                }`}
              >
                {optimized ? "[ RESET BASELINE ]" : "[ ENGAGE OPTIMIZATION ]"}
              </button>

              <AnimatePresence>
                {optimized && (
                  <motion.div
                    className="space-y-3 sm:space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="border border-border p-3 sm:p-4">
                      <p className="data-label text-[8px]">WEIGHT REDUCED</p>
                      <p className="font-heading text-2xl sm:text-3xl font-bold text-accent glow-cyan mt-1">32%</p>
                    </div>
                    <div className="border border-border p-3 sm:p-4">
                      <p className="data-label text-[8px]">STRENGTH IMPROVED</p>
                      <p className="font-heading text-2xl sm:text-3xl font-bold text-accent glow-cyan mt-1">18%</p>
                    </div>
                    <div className="border border-border p-3 sm:p-4">
                      <p className="data-label text-[8px]">MATERIAL EFFICIENCY</p>
                      <p className="font-heading text-2xl sm:text-3xl font-bold text-primary glow-blue mt-1">94.7%</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;
