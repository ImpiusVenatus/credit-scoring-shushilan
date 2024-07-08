"use client";
import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
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
import { AdminDataTable } from "@/components/AdminTable";
import Icon from "@/components/Icon";
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

export default function AdminDashboard() {
  const targetPercentage = 83;
  const [percentage, setPercentage] = useState(0);

  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get('/api/fetch-formData')
      .then(response => {
        setFormData(response.data.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
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
        const formDataResponse = await axios.get('/api/fetch-formData');
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
          <h2 className="text-5xl font-semibold">Predictive Model</h2>
        </div>
        <div className="py-16 px-8 flex justify-between flex-wrap gap-8">
          <div>
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
          <div className="px-8">
            <h4 className="text-2xl font-semibold">Dataset Statistic</h4>
            {loading ?
                  <Spinner size={50} color="#14b8a6" /> :
            <div>
              <div className="flex justify-between gap-8 py-4">
                <div className="w-[50%]">
                    <div>
                      <h6 className="text-3xl font-semibold">{formData.length}</h6>
                      <p className="text-[#64748b] text-sm">Total Record Count</p>
                    </div>
                </div>
                <div className="w-[50%]">
                  <h6 className="text-3xl font-semibold">2,000</h6>
                  <p className="text-[#64748b] text-sm">Test Record Count</p>
                </div>
              </div>
              <div className="flex justify-between gap-8">
                <div className="w-[50%]">
                  <div>
                    <h6 className="text-3xl font-semibold">{approvalRate ? `${approvalRate.toFixed(2)}%` : 'N/A'}</h6>
                    <p className="text-[#64748b] text-sm">Approved</p>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div>
                    <h6 className="text-3xl font-semibold">{rejectionRate ? `${rejectionRate.toFixed(2)}%` : 'N/A'}</h6>
                    <p className="text-[#64748b] text-sm">Dispproved</p>
                  </div>
                </div>
              </div>
            </div>
          }
          </div>
          <div className="px-8">
            <SliderBar />
          </div>
          <div className="px-8 flex flex-col items-center">
            <h4 className="text-2xl font-semibold text-gray-800">Download Report</h4>
            <Icon className="text-teal-500 fill-current w-24 h-24" />
            <div className="py-4">
              <div>
                <button className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <AdminDataTable />
        </div>
        <div className="max-w-[40rem]">
          <ScoreDistribution />
        </div>
      </div>
      <Footer />
    </div>
  );
}
