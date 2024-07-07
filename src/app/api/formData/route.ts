import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, MongoNetworkError, ServerApiVersion } from 'mongodb';
import { parse } from 'csv-parse/sync';

const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function GET(req: NextRequest) {
  try {
    await client.connect();
    const db = client.db();

    const formData = await db.collection('formData').find({}).toArray();

    const data = formData.map(item => {
      const csvData = item.csvData;
      const parsedCsv = parse(csvData, {
        columns: true,
        skip_empty_lines: true,
      });

      const fullName = parsedCsv[0]?.fullName || 'N/A';

      return {
        id: item._id.toString(),
        fullName,
        demographicsScore: item.demographicsScore,
        occupationScore: item.occupationScore,
        financeScore: item.financeScore,
        socialScore: item.socialScore,
        totalScore: item.totalScore,
        approval: item.approval,
      };
    });

    await client.close();

    return NextResponse.json({
      message: 'Form data fetched successfully',
      data: data,
    });
  } catch (error) {
    if (error instanceof MongoNetworkError) {
      console.error('MongoDB network error:', error);
      return NextResponse.json({ message: 'MongoDB network error' }, { status: 500 });
    } else {
      console.error('Error fetching form data:', error);
      return NextResponse.json({ message: 'Error fetching form data' }, { status: 500 });
    }
  }
}
