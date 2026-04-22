import { motion } from "framer-motion";

const techStack = [
  { name: "SOLIDWORKS", category: "CAD", status: "ACTIVE" },
  { name: "ANSYS", category: "SIMULATION", status: "ACTIVE" },
  { name: "ABAQUS", category: "FEA", status: "ACTIVE" },
  { name: "MATLAB", category: "ANALYSIS", status: "ACTIVE" },
];

const futureTech = [
  { name: "DIGITAL TWIN SIMULATION", desc: "Real-time structural monitoring and predictive analysis" },
  { name: "AI STRUCTURAL OPTIMIZATION", desc: "Machine learning-driven topology optimization" },
  { name: "ADVANCED MANUFACTURING", desc: "Additive manufacturing for aerospace-grade aluminium" },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 07 — TECHNOLOGY</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-8 sm:mb-10">
          ENGINEERING TECHNOLOGY STACK
        </h2>

        {/* Current Stack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="section-panel text-center py-4 sm:py-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto border border-primary/30 flex items-center justify-center mb-2 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs text-primary">{tech.name.slice(0, 2)}</span>
              </div>
              <h3 className="font-heading text-[10px] sm:text-xs tracking-wider text-foreground">{tech.name}</h3>
              <p className="data-label text-[8px] mt-1">{tech.category}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <div className="w-1 h-1 rounded-full bg-accent" />
                <span className="font-mono text-[8px] text-accent">{tech.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Tech */}
        <p className="data-label text-[10px] mb-4">FUTURE TECHNOLOGIES</p>
        <div className="space-y-3">
          {futureTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="section-panel flex flex-col sm:flex-row sm:items-center justify-between py-4 px-4 sm:px-6 gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <h3 className="font-heading text-[10px] sm:text-xs tracking-wider text-foreground">{tech.name}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-body mt-1">{tech.desc}</p>
              </div>
              <span className="font-heading text-[8px] tracking-[0.15em] text-primary border border-primary/30 px-2 py-1 w-fit flex-shrink-0">
                IN DEVELOPMENT
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
