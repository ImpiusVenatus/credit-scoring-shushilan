import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, MongoNetworkError, ServerApiVersion } from 'mongodb';

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

    const data = formData.map(item => ({
      id: item._id.toString(),
      demographicsScore: item.demographicsScore,
      businessScore: item.businessScore,
      farmingScore: item.farmingScore,
      financeScore: item.financeScore,
      socialScore: item.socialScore,
      totalScore: item.totalScore,
    }));

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
