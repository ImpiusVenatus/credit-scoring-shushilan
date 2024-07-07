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

    const scoreRanges = [
      { range: '51-60', min: 51, max: 60 },
      { range: '61-70', min: 61, max: 70 },
      { range: '71-80', min: 71, max: 80 },
      { range: '81-90', min: 81, max: 90 },
      { range: '91-100', min: 91, max: 100 },
    ];

    const scoreData = scoreRanges.map(({ range, min, max }) => ({
      range,
      value: formData.filter((item) => item.totalScore >= min && item.totalScore <= max).length,
    }));

    await client.close();

    return NextResponse.json(scoreData);
  } catch (error) {
    if (error instanceof MongoNetworkError) {
      console.error('MongoDB network error:', error);
      return NextResponse.json({ message: 'MongoDB network error' }, { status: 500 });
    } else {
      console.error('Error fetching data:', error);
      return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
  }
}
