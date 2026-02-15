import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Kifel Service Website <noreply@kifel-service.com>',
        to: ['info@kifel-service.de'],
        subject: `Neue Kontaktanfrage: ${service || 'Allgemein'}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
          <p><strong>Service:</strong> ${service || 'Nicht angegeben'}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
