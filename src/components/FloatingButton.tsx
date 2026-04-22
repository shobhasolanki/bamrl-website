import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingButton: React.FC = () => {
  const handleClick = () => {
    window.open("https://wa.me/918421306939", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Radar Pulse Rings */}
      <span className="absolute w-20 h-20 border border-cyan-400/30 rounded-full animate-ping"></span>
      <span className="absolute w-28 h-28 border border-cyan-400/20 rounded-full animate-ping delay-200"></span>

      {/* Main Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full 
        bg-gradient-to-br from-cyan-400 to-blue-600 
        shadow-[0_0_25px_rgba(0,200,255,0.8)] 
        border border-cyan-300/40 backdrop-blur-md"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default FloatingButton;