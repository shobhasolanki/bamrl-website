import { motion } from "framer-motion";

const equipment = [
  {
    name: "Optical Emission Spectrometer",
    desc: "High-precision chemical composition analysis for aerospace alloys.",
    img: "/eq1.png",
  },
  {
    name: "Universal Testing Machine",
    desc: "Tensile and mechanical strength testing under controlled conditions.",
    img: "/eq2.png",
  },
  {
    name: "Hardness Testing Machine",
    desc: "Brinell and Rockwell hardness measurement for material validation.",
    img: "/eq3.jpg",
  },
  {
    name: "Metallography Microscope",
    desc: "Detailed microstructure and grain analysis of materials.",
    img: "/eq4.jpg",
  },
];

const LabEquipment: React.FC = () => {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Inside Our Laboratory
        </h2>
        <p className="text-gray-400 mt-4">
          Advanced equipment powering precision engineering and validation
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-2">

        {equipment.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] bg-white/5 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-lg"
          >
            
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default LabEquipment;