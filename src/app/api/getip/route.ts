import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.ip || 'Unknown IP';
  return NextResponse.json({ ip });
}