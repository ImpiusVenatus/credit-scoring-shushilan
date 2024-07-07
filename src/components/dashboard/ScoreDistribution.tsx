import React, { useEffect, useState } from 'react';
import Spinner from '../LoadingState';
import axios from 'axios';
import BarChart from '../Barchart';

const ScoreDistribution = () => {
  const [data, setData] = useState<{ range: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/score-distribution');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="my-8">
          <Spinner size={50} color="#14b8a6" />
        </div>
      ) : (
        <BarChart data={data} />
      )}
    </div>
  );
};

export default ScoreDistribution;
