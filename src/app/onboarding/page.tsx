"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from '@/components/ui/aurora-background';
import MultiStepFormContainer from "@/components/forms/MultiStepForm";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import Image from "next/image";

const MultiStepFormPage: React.FC = () => {
  return (
      <AuroraBackground>
        <div className="bg-gray-700 inline-block rounded-2xl m-4 z-50">
          <a href="/">
            <div className="max-sm:hidden cursor-pointer flex items-center gap-2 py-4 px-6">
                <Image 
                  src="/rini 2.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="max-w-[2rem]"
                />
              <span className="font-bold text-[#2dd4bf] text-2xl">Rini</span>
            </div>
          </a>
        </div>
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
          
          <h1 className="max-w-[40rem] text-center md:text-5xl max-md:text-4xl max-sm:text-3xl mb-8 px-8 text-gray-800 font-semibold">Rini Microfinance Scoring Model Demo</h1>
          <MultiStepFormContainer />
        </motion.div>
      </AuroraBackground>
  );
}

export default MultiStepFormPage;
