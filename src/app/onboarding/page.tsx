"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from '@/components/ui/aurora-background';
import MultiStepFormContainer from "@/components/forms/MultiStepForm";
 
export function MultiStepFormPage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-16"
      >
        <h1 className="text-5xl mb-8 text-gray-800 font-bold">Rini Model Demo</h1>
        <MultiStepFormContainer />
      </motion.div>
    </AuroraBackground>
  );
}

export default MultiStepFormPage;
