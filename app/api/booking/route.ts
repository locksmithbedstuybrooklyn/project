import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, subService, date, time, name, phone, email, address, notes } = body;

    // Validation
    if (!service || !date || !time || !name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real app, you would:
    // 1. Save to database
    // 2. Send email confirmation
    // 3. Send Telegram notification
    
    console.log('--- NEW BOOKING REQUEST ---');
    console.log('Service:', service, '-', subService);
    console.log('Appointment:', date, 'at', time);
    console.log('Customer:', name, '(', phone, ',', email, ')');
    console.log('Address:', address);
    console.log('Notes:', notes);
    console.log('---------------------------');

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: 'Booking confirmed' }, { status: 200 });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
