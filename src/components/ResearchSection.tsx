import { motion } from "framer-motion";
import microImg from "@/assets/microstructure.jpg";
import stressImg from "@/assets/stress-map.jpg";
import heroImg from "@/assets/hero-wireframe.jpg";

const ResearchSection = () => {
  return (
    <section id="research" className=" py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 06 — RESEARCH</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-2">
          STRUCTURAL INNOVATION LABORATORY
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-body mb-8 sm:mb-10 max-w-2xl">
          BAMRL conducts advanced research in aluminium aerospace structures, topology optimization, 
          and next-generation structural analysis methodologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { img: microImg, label: "MATERIAL ANALYSIS", desc: "Aluminium microstructure characterization" },
            { img: stressImg, label: "FEA SIMULATION", desc: "Finite element structural optimization" },
            { img: heroImg, label: "WIREFRAME ANALYSIS", desc: "Geometric topology studies" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="section-panel"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-32 sm:h-40 object-cover mb-4"
                loading="lazy"
              />
              <p className="data-label text-[8px] mb-1">{item.label}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
