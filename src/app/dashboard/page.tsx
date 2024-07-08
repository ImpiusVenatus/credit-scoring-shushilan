"use client";
import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import { DataTable } from "@/components/Table";
import CircularProgressBar from "@/components/CircularProgressBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SliderBar } from "@/components/dashboard/SliderBar";
import Spinner from "@/components/LoadingState";
import ScoreDistribution from "@/components/dashboard/ScoreDistribution";

interface FormDataItem {
  id: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
}

export default function Dashboard() {
  const targetPercentage = 87;
  const [percentage, setPercentage] = useState(0);

  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/formData', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const sortedData = response.data.data.sort((a: { creationDate: string }, b: { creationDate: string }) => 
        new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
      );
      setFormData(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchData();
  }, []);

  const [value, setValue] = useState(69);
  const [data, setData] = useState({ aboveValue: 0, belowValue: 0 });
  const [approvalRate, setApprovalRate] = useState<number | null>(null);
  const [rejectionRate, setRejectionRate] = useState<number | null>(null);

  const applyCutoff = async (initialLoad = false) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/cutoff-selection?value=${value}`);
      const result = response.data;
      setData({ aboveValue: result.aboveValue, belowValue: result.belowValue });

      const rate = (result.aboveValue / (result.aboveValue + result.belowValue)) * 100;
      setApprovalRate(rate);
      const rejectRate = (result.belowValue / (result.aboveValue + result.belowValue)) * 100;
      setRejectionRate(rejectRate);

      if (initialLoad) {
        const formDataResponse = await axios.get('/api/formData');
        setFormData(formDataResponse.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    applyCutoff(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setPercentage(targetPercentage), 100);
  }, [targetPercentage]);

  return (
    <div>
      <NavigationMenuBar />
      <div className="container">
        <div className="flex justify-between gap-8 pt-16">
          <h2 className="lg:text-5xl font-semibold md:text-4xl text-3xl">Predictive Model</h2>
        </div>
        <div className="py-16 max-md:py-8 flex justify-between flex-wrap">
          <div className="w-[50%] md:w-[25%] mx-auto">
            <div className="flex items-center gap-4">
              <h4 className="text-2xl font-semibold">Rini Accuracy</h4>
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
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <h4 className="text-2xl font-semibold">Dataset Statistic</h4>
            {loading ?
                  <Spinner size={50} color="#14b8a6" /> :
            <div>
              <div className="flex justify-between max-md:flex-wrap gap-8 max-md:gap-2 py-4 max-md:py-2">
                <div className="w-[50%]">
                    <div>
                      <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">{formData.length}</h6>
                      <p className="text-[#64748b] text-sm">Total Record Count</p>
                    </div>
                </div>
                <div className="w-[50%]">
                  <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">2,000</h6>
                  <p className="text-[#64748b] text-sm">Test Record Count</p>
                </div>
              </div>
              <div className="flex justify-between max-md:flex-wrap gap-8 max-md:gap-2 py-4 max-md:py-2">
                <div className="w-[50%]">
                    <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">{approvalRate ? `${approvalRate.toFixed(2)}%` : 'N/A'}</h6>
                    <p className="text-[#64748b] text-sm">Approved</p>
                  
                </div>
                <div className="w-[50%]">
                    <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">{rejectionRate ? `${rejectionRate.toFixed(2)}%` : 'N/A'}</h6>
                    <p className="text-[#64748b] text-sm">Dispproved</p>
                </div>
              </div>
            </div>
          }
          </div>
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <SliderBar />
          </div>
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <h4 className="text-2xl font-semibold">Start Scoring</h4>
            <div className="py-4">
              <div>
              <button className="sm:text-sm lg:text-lg px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Upload Data
              </button>
                <p className="text-[#64748b] text-sm py-4">or drop a file</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <DataTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
