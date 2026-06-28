import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL_TO

    // If email service is not configured, log and accept gracefully
    if (!apiKey || !toEmail) {
      console.log('Contact form submission (email not configured):', { name, email, message })
      return NextResponse.json({ success: true })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'RSJ Trading <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}