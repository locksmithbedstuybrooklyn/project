import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramMessage, formatTelegramMessage } from '@/lib/telegram';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, subService, date, time, name, phone, email, address, notes } = body;

    // Validation
    if (!service || !date || !time || !name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send Telegram Notification
    const message = formatTelegramMessage('New Booking Confirmed', {
      name,
      phone,
      email,
      service,
      subService,
      date,
      time,
      address,
      notes
    });
    
    await sendTelegramMessage(message);

    return NextResponse.json({ success: true, message: 'Booking confirmed' }, { status: 200 });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
