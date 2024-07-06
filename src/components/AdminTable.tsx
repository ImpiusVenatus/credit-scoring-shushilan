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
import Spinner from './LoadingState';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FormDataItem {
  id: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
  approval: string
}

export function AdminDataTable() {
  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get('/api/formData')
      .then(response => {
        setFormData(response.data.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const updateApprovalStatus = (id: string, approvalStatus: string) => {
    axios.patch('/api/updateApproval', { id, approvalStatus })
      .then(() => {
        fetchData();
      })
      .catch(error => {
        console.error('Error updating approval status:', error);
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
            <TableHead>ID</TableHead>
            <TableHead>Demographics Score</TableHead>
            <TableHead>Occupation Score</TableHead>
            <TableHead>Finance Score</TableHead>
            <TableHead>Social Score</TableHead>
            <TableHead>Total Score</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.demographicsScore}</TableCell>
              <TableCell>{item.occupationScore}</TableCell>
              <TableCell>{item.financeScore}</TableCell>
              <TableCell>{item.socialScore}</TableCell>
              <TableCell>{item.totalScore}</TableCell>
              <TableCell> 
                <Dialog>
                  <DialogTrigger asChild>
                  {item.approval === 'approved' ? (
                      <button className="md:px-8 py-2 rounded-md bg-teal-400 text-white font-bold sm:text-sm sm:px-2 md:text-md transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                        {item.approval}
                      </button>
                    ) : item.approval === 'rejected' ? (
                      <button className="md:px-8 py-2 rounded-md bg-red-500 text-white font-bold sm:text-sm sm:px-2 md:text-md transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-red-500">
                        {item.approval}
                      </button>
                    ) : (
                      <button className="md:px-8 py-2 rounded-md bg-blue-400 text-white font-bold sm:text-sm sm:px-2 md:text-md transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
                        {item.approval}
                      </button>
                    )}
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Approve Loan</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to approve this loan? You can revert it whenever you want.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                    </div>
                    <DialogFooter>
                      <Button type="button" onClick={() => updateApprovalStatus(item.id, 'approved')}>Approve</Button>
                      <Button type="button" variant="destructive" onClick={() => updateApprovalStatus(item.id, 'rejected')}>Reject</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
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
