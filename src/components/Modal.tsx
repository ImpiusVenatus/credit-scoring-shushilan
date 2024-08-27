import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinearProgressBar from "@/components/LinearProgressBar";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ModalProps {
  predictions: number[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ predictions, onClose }) => {
  const [cutoff, setCutoff] = useState(50);

  const handleChange = (value: number[]) => {
    setCutoff(value[0]);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="bg-white rounded-lg p-8 z-50 min-w-[40rem] max-w-[80vw] overflow-y-auto max-h-[80vh] overflow-auto"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-right">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="">
              <h4 className="text-2xl font-semibold pb-4 text-teal-600">Scoring Calculation ID: 2004110</h4>
              <div className="flex justify-between py-4">
                <div>
                  <h4 className="font-semibold">Total Records</h4>
                  <p>12001044</p>
                </div>
                <div>
                  <h4 className="font-semibold">akhyar.noor@gmail.com</h4>
                  <p>16 July, 2024</p>
                </div>
                <div className="flex items-center border-2 border-teal-400 text-gray-800 px-4 rounded-lg cursor-pointer hover:bg-teal-400 hover:text-white transition-all">
                  <h4 className="font-semibold flex">Download Data <ChevronDown /></h4>
                </div>
              </div>
            </div>

            <div className="mt-2 space-y-4 w-[100%]">
              <div className="pb-8">
                <h4 className="text-xl font-semibold py-4">Select Cutoff Value: {cutoff}%</h4>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-[60%]"
                  onValueChange={handleChange}
                />
              </div>
              {predictions.map((prediction, index) => (
                <div key={index} className="flex items-center justify-between space-x-4">
                  <p className="text-lg font-medium">Record {index + 1}</p>
                  <div className="w-[30%]">
                    <LinearProgressBar percentage={prediction * 100} />
                  </div>
                  <p className="text-lg font-medium">{(prediction).toFixed(2)}</p>
                  <p className="w-[5rem]">{(prediction * 100) >= cutoff ? 'Approved' : 'Disapproved'}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
