import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri);

export async function PATCH(req: NextRequest) {
  const { id, approvalStatus } = await req.json();

  try {
    await client.connect();
    const db = client.db();

    await db.collection('formData').updateOne(
      { _id: new ObjectId(id) },
      { $set: { approval: approvalStatus } }
    );

    await client.close();

    return NextResponse.json({
      message: 'Approval status updated successfully',
    });
  } catch (error) {
    console.error('Error updating approval status:', error);
    return NextResponse.json({ message: 'Error updating approval status' }, { status: 500 });
  }
}
