import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, MongoNetworkError, ObjectId, ServerApiVersion } from 'mongodb';
import { parse } from 'csv-parse/sync';

export const dynamic = 'force-dynamic';

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
      const creationDate = new ObjectId(item._id).getTimestamp();

      return {
        id: item._id.toString(),
        fullName,
        demographicsScore: item.demographicsScore,
        occupationScore: item.occupationScore,
        financeScore: item.financeScore,
        socialScore: item.socialScore,
        totalScore: item.totalScore,
        approval: item.approval,
        creationDate: creationDate.toISOString(),
      };
    });

    await client.close();

    return new NextResponse(JSON.stringify({
      message: 'Form data fetched successfully',
      data: data,
    }), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    if (error instanceof MongoNetworkError) {
      console.error('MongoDB network error:', error);
      return new NextResponse(JSON.stringify({ message: 'MongoDB network error' }), { status: 500 });
    } else {
      console.error('Error fetching form data:', error);
      return new NextResponse(JSON.stringify({ message: 'Error fetching form data' }), { status: 500 });
    }
  }
}
