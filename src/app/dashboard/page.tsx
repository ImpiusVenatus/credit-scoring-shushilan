// pages/index.tsx
"use client";
import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import { DataTable } from "@/components/Table";
import CircularProgressBar from "@/components/CircularProgressBar";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SliderBar } from "@/components/SliderBar";

export default function Home() {
  const targetPercentage = 63;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => setPercentage(targetPercentage), 100);
  }, [targetPercentage]);

  return (
    <div>
      <NavigationMenuBar />
      <div className="container">
        <div className="flex justify-between gap-8 pt-16">
          <h2 className="text-5xl font-semibold">Predictive Model</h2>
        </div>
        <div className="py-16 px-8 flex justify-between flex-wrap gap-8">
          <div>
            <div className="flex items-center gap-4">
              <h4 className="text-2xl font-semibold">Rini Index</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">?</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="p-4">
                      <h6 className="font-bold text-gray-700">According to the industry standards:</h6>
                      <ul className="list-disc pl-8">
                        <li>Credit Index &#60; 0.3 signifies low model <br /> predictive power</li>
                        <li>0.3 &#60; Credit Index &#60; 0.8 signifies acceptable model predictive power</li>
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="max-w-[12rem] py-8">
              <CircularProgressBar targetPercentage={percentage} duration={1} />
            </div>
          </div>
          <div className="px-8">
            <h4 className="text-2xl font-semibold">Dataset Statistic</h4>
            <div className="flex justify-between gap-8 py-4">
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">10,000</h6>
                <p className="text-[#64748b] text-sm">Total Record Count</p>
              </div>
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">2,000</h6>
                <p className="text-[#64748b] text-sm">Test Record Count</p>
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">9,100</h6>
                <p className="text-[#64748b] text-sm">Marked as good</p>
              </div>
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">900</h6>
                <p className="text-[#64748b] text-sm">Marked as bad</p>
              </div>
            </div>
          </div>
          <div className="px-8">
            <SliderBar />
            <div className="flex justify-between gap-8 py-4">
              <div>
                <p className="text-[#64748b] text-sm">Total application count: 2,000</p>
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">1,224</h6>
                <p className="text-[#64748b] text-sm">to be approved</p>
                <p className="text-[#64748b] text-sm">937/289</p>
              </div>
              <div className="w-[50%]">
                <h6 className="text-3xl font-semibold">776</h6>
                <p className="text-[#64748b] text-sm">to be rejected</p>
                <p className="text-[#64748b] text-sm">620/156</p>
              </div>
            </div>
          </div>
          <div className="px-8">
            <h4 className="text-2xl font-semibold">Start Scoring</h4>
            <div className="py-4">
              <div>
              <button className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Upload Data
              </button>
                <p className="text-[#64748b] text-sm py-4">or drop a file</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h4 className="text-2xl font-semibold">Predicted Data</h4>
          <DataTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}