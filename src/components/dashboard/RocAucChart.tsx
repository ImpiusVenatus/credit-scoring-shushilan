import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RocAucDataPoint {
  fpr: number;
  tpr: number;
}

interface RocAucChartProps {
  data: RocAucDataPoint[];
}

const RocAucChart: React.FC<RocAucChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fpr" label={{ value: 'False Positive Rate', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tpr" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RocAucChart;
