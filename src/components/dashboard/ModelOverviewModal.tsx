import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularProgressBar from '../CircularProgressBar';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

interface ModelOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModelOverviewModal: React.FC<ModelOverviewModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const data = [
    { score: 0.1, good: 0.5, bad: 0.2 },
    { score: 0.2, good: 0.8, bad: 0.3 },
    { score: 0.3, good: 1.2, bad: 0.5 },
    { score: 0.4, good: 1.8, bad: 0.7 },
    { score: 0.5, good: 2.4, bad: 1.0 },
    { score: 0.6, good: 3.0, bad: 1.3 },
    { score: 0.7, good: 4.0, bad: 1.5 },
    { score: 0.8, good: 6.0, bad: 2.0 },
    { score: 0.9, good: 8.0, bad: 2.5 },
    { score: 1.0, good: 10.0, bad: 3.0 },
  ];

  const ksData = [
    { prediction: 0.1, goodCDF: 0.02, badCDF: 0.01 },
    { prediction: 0.2, goodCDF: 0.05, badCDF: 0.03 },
    { prediction: 0.3, goodCDF: 0.15, badCDF: 0.07 },
    { prediction: 0.4, goodCDF: 0.3, badCDF: 0.1 },
    { prediction: 0.5, goodCDF: 0.45, badCDF: 0.18 },
    { prediction: 0.6, goodCDF: 0.6, badCDF: 0.25 },
    { prediction: 0.7, goodCDF: 0.75, badCDF: 0.35 },
    { prediction: 0.8, goodCDF: 0.85, badCDF: 0.6 },
    { prediction: 0.9, goodCDF: 0.95, badCDF: 0.8 },
    { prediction: 1.0, goodCDF: 1.0, badCDF: 1.0 },
  ];

  const rocData = [
    { fpr: 0, tpr: 0 },
    { fpr: 0.1, tpr: 0.75 },
    { fpr: 0.2, tpr: 0.79 },
    { fpr: 0.3, tpr: 0.81 },
    { fpr: 0.4, tpr: 0.88 },
    { fpr: 0.5, tpr: 0.89 },
    { fpr: 0.6, tpr: 0.89 },
    { fpr: 0.7, tpr: 0.90 },
    { fpr: 0.8, tpr: 0.91 },
    { fpr: 0.9, tpr: 0.97 },
    { fpr: 1.0, tpr: 1.0 },
  ];

  const [benefit, setBenefit] = useState(100);
  const [cost, setCost] = useState(500);

  const profitData = [
    { cutoff: 0.0, profit: 15000 },
    { cutoff: 0.1, profit: 15000 },
    { cutoff: 0.2, profit: 16000 },
    { cutoff: 0.3, profit: 16000 },
    { cutoff: 0.4, profit: 16000 },
    { cutoff: 0.5, profit: 17000 },
    { cutoff: 0.6, profit: 17000 },
    { cutoff: 0.7, profit: 18000 },
    { cutoff: 0.8, profit: 18000 },
    { cutoff: 0.9, profit: 19000 },
    { cutoff: 0.98, profit: 10800 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg max-w-[80vw] w-full p-8 m-8 overflow-auto h-[90vh]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-semibold px-16">Model Overview</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                X
              </button>
            </div>

            <div className="grid grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold">3,000</h3>
                <p className="text-gray-600">Total records count</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">28</h3>
                <p className="text-gray-600">Columns</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">600</h3>
                <p className="text-gray-600">Test records count</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">91.0%</h3>
                <p className="text-gray-600">Marked as good</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">9.0%</h3>
                <p className="text-gray-600">Marked as bad</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">9.00%</h3>
                <p className="text-gray-600">NPL by source data</p>
              </div>
            </div>

            <div className="flex justify-around mt-8">
              <div className="text-center">
                <div className="relative">
                    <CircularProgressBar targetPercentage={83} duration={1} />
                </div>
                <p className="mt-2 text-gray-600">Rini index</p>
              </div>
              <div className="text-center">
                <div className="relative">
                    <CircularProgressBar targetPercentage={88} duration={1} />
                </div>
                <p className="mt-2 text-gray-600">ROC AUC</p>
              </div>
              <div className="text-center">
                <div className="relative">
                    <CircularProgressBar targetPercentage={68} duration={1} />
                </div>
                <p className="mt-2 text-gray-600">K-S score</p>
              </div>
            </div>

            <div className="mt-32 flex justify-between px-32">
              <h3 className="text-4xl font-semibold mb-4 w-[40%]">Density Distribution by Classes</h3>
              <div className='w-[60%]'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="score" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="good" stroke="#2dd4bf" strokeWidth={3} name="Good" />
                    <Line type="monotone" dataKey="bad" stroke="#000000" name="Bad" />
                    </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-16 flex justify-between px-32">
              <h3 className="text-4xl font-semibold mb-4 w-[40%]">K-S Score</h3>
              <div className='w-[60%]'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={ksData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="score" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="goodCDF" stroke="#2dd4bf" strokeWidth={3} name="Good Predictions" />
                    <Line type="monotone" dataKey="badCDF" stroke="#000000" name="Bad Predictions" />
                    {/* Add a reference line to show the maximum distance (K-S statistic) */}
                    <ReferenceLine x={0.8} stroke="black" label="Max KS" />
                    </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-16 flex justify-between px-32">
            <h3 className="text-4xl font-semibold mb-4 w-[40%]">ROC-AUC Score</h3>
            <div className='w-[60%]'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={rocData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fpr" label={{ value: "False Positive Rate", position: "insideBottomRight", offset: 0 }} />
                        <YAxis label={{ value: "True Positive Rate", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="tpr" stroke="#2dd4bf" strokeWidth={3} name="ROC AUC" />
                        <ReferenceLine x={0.7} stroke="black" label="Cutoff" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </div>

            <div className="mt-16 flex justify-between px-32">
                <div className='w-[40%]'>
                <h2 className="text-4xl font-semibold mb-4">Profit forecast</h2>
                <div className="flex items-center mb-6">
                    <div className="mr-4 text-teal-400">
                    <span className="block font-semibold">● Simplified model</span>
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="mr-8">
                    <label className="block font-medium mb-2">Benefit of correct prediction, $</label>
                    <input
                        type="number"
                        value={benefit}
                        onChange={(e) => setBenefit(Number(e.target.value))}
                        className="border p-2 rounded w-full"
                    />
                    </div>
                    <div>
                    <label className="block font-medium mb-2">Cost of mistake, $</label>
                    <input
                        type="number"
                        value={cost}
                        onChange={(e) => setCost(Number(e.target.value))}
                        className="border p-2 rounded w-full"
                    />
                </div>
            </div>
                </div>

            <div className='w-[60%]'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={profitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cutoff" label={{ value: "Cutoff", position: "insideBottomRight", offset: 0 }} />
                    <YAxis label={{ value: "Profit ($)", angle: -90, position: "insideLeft" }} />
                    <Tooltip 
                        formatter={(value: number, name: string, props: any) => {
                        if (props.payload.cutoff === 0.98) {
                            return [
                            `$${value}`, 
                            `Applications\nProfit: $10800\nCorrectly approved: $11800\nIncorrectly approved: $1000`
                            ];
                        }
                        return [`$${value}`, "Profit"];
                        }} 
                    />
                    <Line type="monotone" dataKey="profit" stroke="#2dd4bf" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModelOverviewModal;

