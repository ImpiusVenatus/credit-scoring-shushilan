import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { Parser } from 'json2csv';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'uploads', file.name);
  const buffer = await file.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(buffer));

  const csvData = await fs.readFile(filePath, 'utf8');
  const parsedData = Papa.parse<any>(csvData, { header: true });

  const modifiedData = parsedData.data.map(row => {
    const points = calculatePoints(row);
    return { ...row, points };
  });

  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(modifiedData);

  const newFilePath = path.join(process.cwd(), 'uploads', 'processed_' + file.name);
  await fs.writeFile(newFilePath, csv);

  return NextResponse.json({
    message: 'File processed successfully',
    filePath: newFilePath,
    data: modifiedData,
  });
}

function calculatePoints(row: any): number {
  let points = 0;
  if (row.someColumn === 'value1') points += 10;
  if (row.otherColumn > 50) points += 20;
  return points;
}
