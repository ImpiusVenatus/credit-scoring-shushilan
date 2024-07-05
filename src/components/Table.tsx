import { useEffect, useState } from 'react';
import axios from 'axios';
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
import TrinityRingsSpinner from './LoadingState';
import Spinner from './LoadingState';

interface FormDataItem {
  id: string;
  demographicsScore: number;
  businessScore: number;
  farmingScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
}

export function DataTable() {
  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/formData')
      .then(response => {
        setFormData(response.data.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner size={50} color="#14b8a6" />;
  }

  return (
    <Table>
      <TableCaption>Data from MongoDB collection `formData`.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Demographics Score</TableHead>
          <TableHead>Business Score</TableHead>
          <TableHead>Farming Score</TableHead>
          <TableHead>Finance Score</TableHead>
          <TableHead>Social Score</TableHead>
          <TableHead>Total Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {formData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.demographicsScore}</TableCell>
            <TableCell>{item.businessScore}</TableCell>
            <TableCell>{item.farmingScore}</TableCell>
            <TableCell>{item.financeScore}</TableCell>
            <TableCell>{item.socialScore}</TableCell>
            <TableCell>{item.totalScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* If you want to show totals or other footer data, you can add it here */}
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>Total Rows: {formData.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
