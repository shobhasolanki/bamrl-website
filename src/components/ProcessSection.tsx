import { motion } from "framer-motion";

const steps = [
  { label: "CONCEPT", detail: "Initial requirements & feasibility analysis" },
  { label: "CAD DESIGN", detail: "Parametric 3D modelling & surface generation" },
  { label: "SIMULATION", detail: "FEA stress analysis & modal testing" },
  { label: "OPTIMIZATION", detail: "Topology optimization & mass reduction" },
  { label: "VALIDATION", detail: "Physical testing & compliance verification" },
  { label: "PROTOTYPE", detail: "CNC machining & assembly integration" },
];

const ProcessSection = () => {
  return (
    <section id="process" className=" py-8 sm:py-12">
      <div className="px-4 sm:px-8 md:px-12">
        <p className="data-label text-[10px] mb-4">SECTION 04 — WORKFLOW</p>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-8 sm:mb-10">
          ENGINEERING PROCESS
        </h2>

        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex items-start gap-4 sm:gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-6 h-6 border border-primary bg-background flex items-center justify-center"
                    whileInView={{ borderColor: ["hsl(220,100%,56%)", "hsl(187,100%,50%)", "hsl(220,100%,56%)"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <span className="font-mono text-[8px] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </div>

                <div className="section-panel flex-1 py-3 sm:py-4 px-4 sm:px-6">
                  <h3 className="font-heading text-xs sm:text-sm font-bold tracking-wider text-foreground">
                    {step.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-body mt-1">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
