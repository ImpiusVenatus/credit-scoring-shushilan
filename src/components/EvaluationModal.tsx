import React, { ReactNode, useState, useEffect } from "react";
import Spinner from "./LoadingState";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const EvaluationModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [timings, setTimings] = useState({
    scheduled: 0,
    inputPreparation: 0,
    trainInProgress: 0,
    totalSoFar: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateTimings = () => {
      const scheduled = Math.random() * 0.2; // Max 0.2 seconds
      const inputPreparation = Math.random() * 0.2; // Max 0.2 seconds
      const trainInProgress = 3 + Math.random() * 3; // 3 to 6 seconds
      const totalSoFar = scheduled + inputPreparation + trainInProgress;

      setTimings({
        scheduled,
        inputPreparation,
        trainInProgress,
        totalSoFar,
      });
    };

    generateTimings();

    if (isOpen) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // 5 seconds loading time

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4 p-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="py-4">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="text-sm text-gray-600 mb-4">
                  <p><strong>Built by</strong>: akhyar.noor@gmail.com</p>
                  <p><strong>Model name</strong>: credits_data_Sample_Buckyy (7)</p>
                  <p><strong>Filename</strong>: a_Dataset_CreditScoring.xlsx</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Status:</p>
                  <div className="flex gap-4">
                    <span className="text-teal-400 font-bold">Train in progress</span>
                    <Spinner size={25} color="#14b8a6" />
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p><em>Timings</em></p>
                  <p><em>Scheduled:</em> {timings.scheduled.toFixed(3)} s.</p>
                  <p><em>Input preparation:</em> {timings.inputPreparation.toFixed(3)} s.</p>
                  <p><em>Train in progress:</em> {timings.trainInProgress.toFixed(3)} s.</p>
                  <p><em>Total so far:</em> {timings.totalSoFar.toFixed(3)} s.</p>
                </div>
                <div className="mt-6">
                  <button className="bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default EvaluationModal;