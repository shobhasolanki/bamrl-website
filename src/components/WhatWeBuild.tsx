import { motion } from "framer-motion";
import optimizedImg from "@/assets/optimized-component.jpg";
import stressImg from "@/assets/stress-map.jpg";
import machinedImg from "@/assets/machined-part.jpg";

const cards = [
  {
    title: "AEROSPACE STRUCTURES",
    description: "Lightweight aluminium aerospace structural systems engineered for maximum strength-to-weight ratio.",
    image: optimizedImg,
    tag: "STRUCTURAL",
  },
  {
    title: "STRUCTURAL SIMULATION",
    description: "Engineering simulation and topology optimization using advanced finite element analysis.",
    image: stressImg,
    tag: "SIMULATION",
  },
  {
    title: "PROTOTYPE ENGINEERING",
    description: "Development of precision-machined aerospace structural prototypes from concept to validation.",
    image: machinedImg,
    tag: "PROTOTYPE",
  },
];

const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 03 — CAPABILITIES</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-8 sm:mb-10">
          WHAT WE BUILD
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="section-panel group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="font-heading text-[8px] tracking-[0.15em] bg-primary/20 text-primary px-2 py-1 border border-primary/30">
                    {card.tag}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold tracking-wider text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-body leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
