import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Spinner from './LoadingState';

interface FormDataItem {
  id: string;
  fullName: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
  approval: string;
  creationDate: string;
}

export function DataTable() {
  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get('/api/fetch-formData')
      .then(response => {
        const sortedData = response.data.data.sort((a: FormDataItem, b: FormDataItem) => 
          new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
        );
        setFormData(sortedData);
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

  if (loading) {
    return <Spinner size={50} color="#14b8a6" />;
  }

  return (
    <div>
      <div className='flex gap-4'>
        <h4 className="text-2xl font-semibold">List of all applications</h4>
        <button
          onClick={fetchData}
          className="mb-4 px-4 py-1 bg-gray-800 text-white border-2 border-transparent rounded hover:bg-white hover:text-gray-800 font-semibold hover:border-gray-800 transition-all text-[12px]"
        >
          Refresh Data
        </button>
      </div>
      <Table>
        <TableCaption>Data from MongoDB collection `formData`.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date Created</TableHead>
            <TableHead>Demographics Score</TableHead>
            <TableHead>Occupation Score</TableHead>
            <TableHead>Finance Score</TableHead>
            <TableHead>Social Score</TableHead>
            <TableHead>Total Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{format(new Date(item.creationDate), 'hh:mma, d MMMM, yyyy')}</TableCell>
              <TableCell>{item.demographicsScore}</TableCell>
              <TableCell>{item.occupationScore}</TableCell>
              <TableCell>{item.financeScore}</TableCell>
              <TableCell>{item.socialScore}</TableCell>
              <TableCell>{item.totalScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total Rows: {formData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
