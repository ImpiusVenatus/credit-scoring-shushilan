import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { Parser } from 'json2csv';

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get('file') as File;

    // Check if a file was uploaded
    if (!file) {
      console.error('No file uploaded');
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    // Save uploaded file to uploads folder
    const filePath = path.join(process.cwd(), 'uploads', file.name);
    const buffer = await file.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(buffer));

    console.log('File saved:', filePath);

    // Read CSV data from uploaded file
    const csvData = await fs.readFile(filePath, 'utf8');

    console.log('CSV data read:', csvData);

    // Parse CSV data using PapaParse
    const parsedData = Papa.parse<any>(csvData, { header: true });

    console.log('Parsed CSV data:', parsedData);

    // Process each row of data to calculate points
    const modifiedData = parsedData.data.map(row => {
      const points = calculatePoints(row); // Custom function to calculate points
      return { ...row, points };
    });

    console.log('Modified data:', modifiedData);

    // Convert processed data back to CSV format
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(modifiedData);

    // Save processed CSV data to a new file
    const newFilePath = path.join(process.cwd(), 'uploads', 'processed_' + file.name);
    await fs.writeFile(newFilePath, csv);

    console.log('Processed CSV saved:', newFilePath);

    // Return success response with processed data and file path
    return NextResponse.json({
      message: 'File processed successfully',
      filePath: newFilePath,
      data: modifiedData,
    });
  } catch (error) {
    // Handle any errors that occur during file operations or processing
    console.error('Error processing file:', error);
    return NextResponse.json({ message: 'Error processing file' }, { status: 500 });
  }
}

// Function to calculate points based on specific conditions in each row
function calculatePoints(row: any): number {
  let points = 0;
  // Example conditions (customize according to your specific logic)
  if (row.someColumn === 'value1') points += 10;
  if (row.otherColumn > 50) points += 20;
  // Add more conditions as needed
  return points;
}
