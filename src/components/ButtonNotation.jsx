import { FaRegStar, FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ButtonNotation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSlectedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setSlectedIndex(index);
  };

  return (
    <div className="mt-4 flex ">
      {[...Array(5)].map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex justify-center items-center w-[52px] h-[52px] rounded-full text-[#7B61FF] hover:text-[#7B61FF] hover:bg-[#7B61FF33] duration-300"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          {selectedIndex !== null && selectedIndex >= index ? (
            <FaStar size={32} />
          ) : hoveredIndex !== null && hoveredIndex >= index ? (
            <FaStar size={32} />
          ) : (
            <FaRegStar size={32} />
          )}
        </motion.button>
      ))}
    </div>
  );
}
