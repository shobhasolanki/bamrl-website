import { motion } from "framer-motion";

const labSections = [
  {
    title: "Chemical Analysis (OES)",
    desc: "High-resolution Optical Emission Spectrometry enables precise detection of alloying elements, ensuring aerospace-grade material composition accuracy.",
    img: "/lab1.jpg",
  },
  {
    title: "Mechanical Testing",
    desc: "Advanced tensile, yield, elongation, and hardness testing ensures materials perform reliably under real-world aerospace conditions.",
    img: "/lab2.jpeg",
  },
  {
    title: "Metallography",
    desc: "Detailed microstructure and grain analysis help validate material integrity and detect internal defects.",
    img: "/lab3.jpg",
  },
  {
    title: "Failure Analysis",
    desc: "Root cause investigation of material and structural failures to improve performance and prevent future risks.",
    img: "/lab4.jpg",
  },
];

const LabDetails: React.FC = () => {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {labSections.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full h-[300px] object-cover border border-gray-800"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default LabDetails;