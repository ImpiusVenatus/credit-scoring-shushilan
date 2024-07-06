import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, MongoNetworkError, ServerApiVersion } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sliderValue = searchParams.get('value');
  if (sliderValue === null) {
    return NextResponse.json({ message: 'Slider value is missing' }, { status: 400 });
  }
  const value = parseInt(sliderValue, 10);

  if (isNaN(value)) {
    return NextResponse.json({ message: 'Invalid slider value' }, { status: 400 });
  }

  try {
    await client.connect();
    const db = client.db();
    const formData = await db.collection('formData').find({}).toArray();

    const aboveValue = formData.filter(item => item.totalScore > value).length;
    const belowValue = formData.filter(item => item.totalScore <= value).length;

    await client.close();

    return NextResponse.json({
      message: 'Data fetched successfully',
      aboveValue,
      belowValue,
    });
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
