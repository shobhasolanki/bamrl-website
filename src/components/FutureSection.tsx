import { motion } from "framer-motion";
import futureImg from "@/assets/future-aircraft.jpg";

const timeline = [
  { year: "2025", label: "Engineering research & material characterization" },
  { year: "2026", label: "Prototype development & structural validation" },
  { year: "2027", label: "Advanced aerospace structural systems" },
];

const FutureSection = () => {
  return (
    <section id="future" className=" py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 08 — VISION</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-2">
          FUTURE AEROSPACE SYSTEMS
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-body mb-8 sm:mb-10 max-w-2xl">
          BAMRL aims to develop next-generation aluminium aerospace structures for modern aerospace 
          systems including UAV platforms and future aerospace technologies.
        </p>

        <div className="section-panel overflow-hidden mb-8 sm:mb-10">
          <motion.div
  className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] overflow-hidden"
  initial={{ scale: 1.1 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/future.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />
</motion.div>
        </div>

        {/* Timeline */}
        <p className="data-label text-[10px] mb-4">DEVELOPMENT ROADMAP</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="section-panel"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="font-heading text-xl sm:text-2xl font-bold text-primary mb-2">{item.year}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-body">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
