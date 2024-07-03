'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { NavigationMenuBar } from '@/components/ShadcnNavbar';
import Footer from '@/components/Footer';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/process-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setCsvData(response.data.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <NavigationMenuBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 py-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Upload CSV File</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-6 rounded shadow-md">
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleFileChange} 
              className="mb-4 p-2 border rounded" 
            />
            <button 
              type='submit'
              className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Upload and Process
            </button>
          </form>
          {csvData.length > 0 && (
            <div className="mt-10 w-full max-w-4xl">
              <h2 className="text-2xl font-semibold mb-4">CSV Data:</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded shadow-md">
                  <thead className="bg-gray-200">
                    <tr>
                      {Object.keys(csvData[0]).map((key) => (
                        <th key={key} className="py-2 px-4 border">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {csvData.map((row, index) => (
                      <tr key={index} className="border-b">
                        {Object.values(row).map((value, idx) => (
                          <td key={idx} className="py-2 px-4 border">{String(value)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
