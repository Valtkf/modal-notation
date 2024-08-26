import { FaRegStar, FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ButtonNotation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mt-4 flex space-x-2">
      {[...Array(5)].map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-purple-500 hover:text-purple-700 duration-300"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex !== null && hoveredIndex >= index ? (
            <FaStar size={48} />
          ) : (
            <FaRegStar size={48} />
          )}
        </motion.button>
      ))}
    </div>
  );
}
