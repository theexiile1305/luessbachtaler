'use server'

import { Resend } from 'resend'
import { headers } from 'next/headers'
import { checkRateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormState {
  success: boolean
  error?: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: bots fill this hidden field, humans don't
  const honeypot = formData.get('website') as string
  if (honeypot) {
    return { success: false, error: 'Ungültige Anfrage.' }
  }

  // Rate limiting by IP
  const headersList = await headers()
  const forwarded = headersList.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'

  if (!checkRateLimit(ip)) {
    return {
      success: false,
      error: 'Zu viele Anfragen. Bitte versuchen Sie es in einigen Minuten erneut.',
    }
  }

  // Extract fields
  const name = (formData.get('name') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim() ?? ''
  const subject = (formData.get('subject') as string | null)?.trim() ?? ''
  const message = (formData.get('message') as string | null)?.trim() ?? ''

  // Server-side validation
  if (!name || !email || !message) {
    return { success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' }
  }

  if (name.length > 100) {
    return { success: false, error: 'Name darf maximal 100 Zeichen lang sein.' }
  }

  if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }
  }

  if (subject.length > 200) {
    return { success: false, error: 'Betreff darf maximal 200 Zeichen lang sein.' }
  }

  if (message.length > 5000) {
    return { success: false, error: 'Nachricht darf maximal 5000 Zeichen lang sein.' }
  }

  const to = process.env.CONTACT_EMAIL_TO
  if (!to) {
    console.error('CONTACT_EMAIL_TO environment variable is not set')
    return { success: false, error: 'Konfigurationsfehler. Bitte kontaktieren Sie uns direkt per E-Mail.' }
  }

  const emailSubject = subject
    ? `Kontakt: ${escapeHtml(subject)}`
    : `Neue Kontaktanfrage von ${escapeHtml(name)}`

  const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><title>Kontaktanfrage</title></head>
<body style="font-family: sans-serif; color: #1c1c1c; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="color: #1a3a2a; border-bottom: 2px solid #c9a227; padding-bottom: 8px;">
    Neue Kontaktanfrage
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b6560; width: 100px; vertical-align: top;">Name</td>
      <td style="padding: 8px 0;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b6560; vertical-align: top;">E-Mail</td>
      <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
    </tr>
    ${subject ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b6560; vertical-align: top;">Betreff</td>
      <td style="padding: 8px 0;">${escapeHtml(subject)}</td>
    </tr>` : ''}
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b6560; vertical-align: top;">Nachricht</td>
      <td style="padding: 8px 0; white-space: pre-line;">${escapeHtml(message)}</td>
    </tr>
  </table>
  <hr style="border: none; border-top: 1px solid #e2ddd6; margin-top: 24px;" />
  <p style="color: #6b6560; font-size: 12px; margin-top: 8px;">
    Gesendet über das Kontaktformular auf www.luessbachtaler.de
  </p>
</body>
</html>`

  const { error } = await resend.emails.send({
    from: 'Kontaktformular Lüßbachtaler <noreply@luessbachtaler.de>',
    to,
    replyTo: email,
    subject: emailSubject,
    html,
  })

  if (error) {
    console.error('Resend error:', error)
    return {
      success: false,
      error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt an info@luessbachtaler.de.',
    }
  }

  return { success: true }
}
