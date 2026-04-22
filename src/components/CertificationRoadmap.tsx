import { motion } from "framer-motion";

const roadmapData = [
  {
    title: "ASTM Standards",
    status: "COMPLIANT",
    year: "Current",
  },
  {
    title: "AMS Standards",
    status: "COMPLIANT",
    year: "Current",
  },
  {
    title: "NABL Accreditation",
    status: "IN PROGRESS",
    year: "2026",
  },
  {
    title: "AS9100 Quality",
    status: "ROADMAP",
    year: "2027",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "COMPLIANT":
      return "text-green-400 border-green-400";
    case "IN PROGRESS":
      return "text-yellow-400 border-yellow-400";
    case "ROADMAP":
      return "text-blue-400 border-blue-400";
    default:
      return "text-gray-400 border-gray-400";
  }
};

const CertificationRoadmap = () => {
  return (
    <section className="py-24 px-6 md:px-20 relative">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">
          Certification Roadmap
        </h2>
        <div className="w-16 h-[2px] bg-primary mx-auto mt-4 mb-4" />
        <p className="text-gray-400 max-w-xl mx-auto">
          Building toward global aerospace standards with precision and accountability.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Line */}
        <div className="absolute top-5 md:top-1/2 left-1/2 md:left-0 w-[2px] md:w-full h-full md:h-[2px] bg-white/10 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2" />

        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            {/* Dot */}
            <div className="w-4 h-4 rounded-full bg-primary mb-4 group-hover:scale-125 transition" />

            {/* Card */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg w-[250px] group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,150,255,0.2)] transition-all">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p
                className={`mt-3 inline-block px-3 py-1 text-xs border rounded-full font-mono ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </p>

              <p className="text-gray-400 text-sm mt-3">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationRoadmap;