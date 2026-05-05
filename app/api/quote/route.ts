import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, serviceType, location, description } = body;

    // Basic validation
    if (!name || !phone || !email || !serviceType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In production, send to email / CRM / Formspree here
    // For now, log and return success
    console.log('Quote request received:', { name, phone, email, serviceType, location, description });

    return NextResponse.json({ success: true, message: 'Quote request received' }, { status: 200 });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
