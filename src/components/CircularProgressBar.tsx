import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CircularProgressBarProps {
  targetPercentage: number;
  duration?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ targetPercentage, duration = 1 }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      pathLength: targetPercentage / 100,
      transition: { duration }
    });
  }, [targetPercentage, duration, controls]);

  return (
    <div className="relative w-32 h-32">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-teal-400"
          strokeWidth="10"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration } }}
        >
          {Math.round(targetPercentage)}%
        </motion.span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
