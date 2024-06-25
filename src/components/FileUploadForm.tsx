import React, { useState } from 'react';
import Papa, { ParseError } from 'papaparse';

const FileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const text = await response.text(); // Get text response
      console.log('Received text:', text); // Log received text
  
      // Check if response is HTML (indicating an error)
      if (text.startsWith('<!DOCTYPE html>')) {
        throw new Error('Received HTML instead of CSV data');
      }
  
      const results = Papa.parse(text, {
        header: true,
      });
  
      console.log('Parsed results:', results.data); 
  
      if (results.errors.length > 0) {
        handleParseErrors(results.errors);
        return;
      }
  
      // Handle parsed data here
  
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
    }
  };
  

  const handleParseErrors = (errors: ParseError[]) => {
    console.error('Parse errors:', errors);
    // Handle parse errors as needed
    setError('Error parsing CSV. Please check the file format.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          Upload CSV
        </label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default FileUploadForm;
