"use client";
import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import CircularProgressBar from "@/components/CircularProgressBar";
import { useEffect, useState, ChangeEvent } from "react";
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
import EvaluationModal from "@/components/EvaluationModal";
import RocAucChart from "@/components/dashboard/RocAucChart";
import ConfusionMatrix from "@/components/dashboard/ConfusionMatrix";


interface FormDataItem {
  id: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
}

interface EvaluationResult {
  accuracy: number;
  rocAuc: { [key: string]: number };
  confusionMatrix: { rows: { label: number, values: number[] }[] };
}

export default function AdminDashboard() {
  const targetPercentage = 83;
  const [percentage, setPercentage] = useState(0);

  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setShowLoadingModal(true); 
        const response = await axios.post("http://127.0.0.1:8000/evaluate_model/", formData);
        setEvaluationResult({
          accuracy: response.data.accuracy,
          rocAuc: response.data.roc_auc,
          confusionMatrix: response.data.confusion_matrix
        });
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error during model evaluation:", error);
      } finally {
        setShowLoadingModal(false); 
      }
    }
  };

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

  const applyCutoff = async () => {
    try {
      const response = await axios.get(`/api/cutoff-selection?value=${value}`);
      const result = response.data;
      setData({ aboveValue: result.aboveValue, belowValue: result.belowValue });

      const rate = (result.aboveValue / (result.aboveValue + result.belowValue)) * 100;
      const rejectRate = (result.belowValue / (result.aboveValue + result.belowValue)) * 100;

      return {
        approvalRate: rate,
        rejectionRate: rejectRate,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        approvalRate: null,
        rejectionRate: null,
      };
    }
  };

  useEffect(() => {
    applyCutoff().then(({ approvalRate, rejectionRate }) => {
      setApprovalRate(approvalRate);
      setRejectionRate(rejectionRate);
    });
  }, [value]);

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

      <div className="container py-16">
        <h2 className="text-2xl font-semibold pb-8">Evaluate Your Model</h2>
        <div
                onDrop={async (event) => {
                  event.preventDefault();
                  const file = event.dataTransfer.files[0];
                  if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    try {
                      setShowLoadingModal(true); 
                      const response = await axios.post("http://127.0.0.1:8000/evaluate_model/", formData);
                      setEvaluationResult({
                        accuracy: response.data.accuracy,
                        rocAuc: response.data.roc_auc,
                        confusionMatrix: response.data.confusion_matrix
                      });
                      setIsModalOpen(true);
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
                  Upload Dataset
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
        {/* Loading modal */}
        {showLoadingModal && !isModalOpen && ( // Ensure loading modal doesn't overlap with main modal
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Spinner size={50} color="#fff" />
          </div>
        )}
      </div>
      <EvaluationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Evaluation Summary">
      {evaluationResult ? (
        <div>
          <div className="py-4">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">Rini Accuracy</p>
            <CircularProgressBar targetPercentage={evaluationResult.accuracy * 100} duration={1} />
          </div>
            {/* <RocAucChart data={rocAucData} /> */}
            <ConfusionMatrix matrix={evaluationResult.confusionMatrix} />
          </div>
        </div>
      ) : (
        <p>No results available</p>
      )}
    </EvaluationModal>
      <Footer />
    </div>
  );
}
