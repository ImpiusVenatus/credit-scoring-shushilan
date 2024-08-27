import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import axios, { AxiosResponse } from 'axios';

export const dynamic = 'force-dynamic';

interface PredictionRequest {
  features: number[];
}

interface PredictionResponse {
  prediction: number;
  probability: number[];
}

interface ErrorResponse {
  detail: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: PredictionRequest = await request.json();
    if (!body.features || !Array.isArray(body.features)) {
      throw new Error('No features provided');
    }

    const response: AxiosResponse<PredictionResponse | ErrorResponse> = await axios.post('http://localhost:8000/predict', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data || 'detail' in response.data) {
      const errorData = response.data as ErrorResponse;
      return new NextResponse(JSON.stringify({ error: errorData.detail }), { status: 500 });
    }

    const data = response.data as PredictionResponse;
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), { status: 500 });
  }
}

export async function GET() {
  return new NextResponse(`Hello from ${process.env.VERCEL_REGION}`);
}

// Type guards (optional if using type assertions)
function isErrorResponse(data: any): data is ErrorResponse {
  return data && typeof data.detail === 'string';
}
