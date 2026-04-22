import { motion } from "framer-motion";

const steps = [
  "Sample Received",
  "Material Testing",
  "Data Analysis",
  "Certification (48 Hours)"
];

const LabProcess: React.FC = () => {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 md:px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Our Testing Process
        </h2>
        <p className="text-gray-400 mt-4">
          Fast, precise, and aerospace-grade validation workflow
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">

            {/* Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="w-14 h-14 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 font-bold"
            >
              {index + 1}
            </motion.div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-7 left-full w-24 h-[1px] bg-blue-500"></div>
            )}

            {/* Text */}
            <p className="mt-4 text-gray-400 text-sm text-center">
              {step}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default LabProcess;