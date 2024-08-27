"use client"
import React, { useEffect, useState, ChangeEvent } from "react";
import axios from 'axios';
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CircularProgressBar from "@/components/CircularProgressBar";
import Spinner from "@/components/LoadingState";
import Modal from "@/components/Modal";
import { SliderBar } from "@/components/dashboard/SliderBar";
import { DataTable } from "@/components/Table";
import ModelOverviewModal from "@/components/dashboard/ModelOverviewModal";

interface FormDataItem {
  id: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
}

export default function Dashboard() {
  const targetPercentage = 83;
  const [percentage, setPercentage] = useState(0);

  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [predictions, setPredictions] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/fetch-formData', {
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

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // Show loading modal
        setShowLoadingModal(true);

        const response = await axios.post("http://127.0.0.1:8000/predict/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const { prob_0, prob_1, predicted_target } = response.data;
        setPredictions(prob_0);
        setIsModalOpen(true); // Open main modal after successful prediction
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        // Hide loading modal after 3 seconds
        setTimeout(() => {
          setShowLoadingModal(false);
        }, 3000);
      }
    }
  };

  const [isOverviewModalOpen, setIsOverviewModalOpen] = useState(false);

  const openModal = () => {
    setIsOverviewModalOpen(true);
  };

  const closeModal = () => {
    setIsOverviewModalOpen(false);
  };

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
              <h4 className="text-2xl font-semibold">Model Accuracy</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">?</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="p-4">
                      <h6 className="font-bold text-gray-700">According to the industry standards:</h6>
                      <ul className="list-disc pl-8">
                        <li>Credit Index &lt; 0.3 signifies low model predictive power</li>
                        <li>0.3 &lt; Credit Index &lt; 0.8 signifies acceptable model predictive power</li>
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="max-w-[12rem] py-8">
              <CircularProgressBar targetPercentage={percentage} duration={1} />
              <button onClick={openModal} className="bg-teal-400 text-white px-4 py-2 rounded mt-4">
                Model Overview
              </button>
              <ModelOverviewModal isOpen={isOverviewModalOpen} onClose={closeModal} />
            </div>
          </div>
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <h4 className="text-2xl font-semibold">Dataset Statistics</h4>
            {loading ? (
              <Spinner size={50} color="#14b8a6" />
            ) : (
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
                    <p className="text-[#64748b] text-sm">Disapproved</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <SliderBar />
          </div>
          <div className="w-[50%] md:w-[25%] mx-auto px-4">
            <h4 className="text-2xl font-semibold">Start Scoring</h4>
            <div className="py-4">
              <div
                onDrop={async (event) => {
                  event.preventDefault();
                  const file = event.dataTransfer.files[0];
                  if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    try {
                      setShowLoadingModal(true); // Show loading modal on drop
                      const response = await axios.post("http://127.0.0.1:8000/predict/", formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      });
                      const { prob_0, prob_1, predicted_target } = response.data;
                      setPredictions(prob_0);
                      setIsModalOpen(true); // Open main modal after successful prediction
                    } catch (error) {
                      console.error("Error uploading file:", error);
                    } finally {
                      // Hide loading modal after 3 seconds
                      setTimeout(() => {
                        setShowLoadingModal(false);
                      }, 3000);
                    }
                  }
                }}
                onDragOver={(event) => event.preventDefault()}
                className="border-dashed border-2 border-gray-400 p-4 text-center cursor-pointer"
              >
                <button
                  onClick={() => {
                    const fileInput = document.getElementById('upload-file');
                    if (fileInput) {
                      fileInput.click();
                    }
                  }}
                  className="sm:text-sm lg:text-lg px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
                >
                  Upload Data
                </button>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="upload-file"
                />
                <p className="text-[#64748b] text-sm py-4">or drag and drop a file here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <DataTable />
        </div>
      </div>
      {/* Loading modal */}
      {showLoadingModal && !isModalOpen && ( // Ensure loading modal doesn't overlap with main modal
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Spinner size={50} color="#fff" />
        </div>
      )}
      {isModalOpen && (
        <Modal
          predictions={predictions}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
