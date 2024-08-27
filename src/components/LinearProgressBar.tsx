import React from "react";
import { motion } from "framer-motion";

interface LinearProgressBarProps {
  percentage: number;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ percentage }) => {
  return (
    <div className="bg-gray-200 h-4 w-full rounded-full overflow-hidden">
      <motion.div
        className="bg-teal-500 h-full rounded-full"
        style={{ width: `${percentage}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      ></motion.div>
    </div>
  );
};

export default LinearProgressBar;
