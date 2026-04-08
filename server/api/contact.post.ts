import nodemailer from 'nodemailer'

const allowedServiceTypes = new Set([
  'Algemene Vraag',
  'Residentiële Installatie',
  'Commercieel Project',
  'Onderhoud & Inspectie',
  'Storingsdienst',
  'Offerte Aanvraag'
])

type ContactFormBody = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  serviceType?: string
}

const sanitizeText = (value: unknown) => String(value ?? '').trim()

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isValidPhone = (phone: string) => /^[+()\-\s\d]{8,20}$/.test(phone)

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (!config.smtpHost || !config.smtpPort || !config.smtpUser || !config.smtpPass || !config.contactTo) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Mail server is not configured'
    })
  }

  const body = await readBody<ContactFormBody>(event)

  const payload = {
    name: sanitizeText(body?.name),
    email: sanitizeText(body?.email),
    phone: sanitizeText(body?.phone),
    subject: sanitizeText(body?.subject),
    message: sanitizeText(body?.message),
    serviceType: sanitizeText(body?.serviceType)
  }

  if (!payload.name || !payload.email || !payload.phone || !payload.subject || !payload.message || !payload.serviceType) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  if (payload.name.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name is too short'
    })
  }

  if (!isValidEmail(payload.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address'
    })
  }

  if (!isValidPhone(payload.phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid phone number'
    })
  }

  if (payload.subject.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Subject is too short'
    })
  }

  if (payload.message.length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message is too short'
    })
  }

  if (!allowedServiceTypes.has(payload.serviceType)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid service type'
    })
  }

  const smtpPort = Number(config.smtpPort)
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  const textBody = [
    'Nieuw contactformulier bericht',
    '',
    `Naam: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Telefoon: ${payload.phone}`,
    `Type dienst: ${payload.serviceType}`,
    `Onderwerp: ${payload.subject}`,
    '',
    'Bericht:',
    payload.message
  ].join('\n')

  const htmlMessage = escapeHtml(payload.message).replace(/\r?\n/g, '<br>')
  const htmlBody = `
    <div style="margin:0;padding:24px;background:#f9fafb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:20px 24px;background:#10B981;color:#ffffff;">
            <p style="margin:0;font-size:13px;opacity:0.95;">Nieuw bericht via website</p>
            <h1 style="margin:8px 0 0;font-size:24px;line-height:1.2;">Nieuw contactformulier bericht</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#4b5563;width:34%;font-weight:700;">Naam</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(payload.name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#4b5563;font-weight:700;">E-mail</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><a href="mailto:${encodeURIComponent(payload.email)}" style="color:#059669;text-decoration:none;">${escapeHtml(payload.email)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#4b5563;font-weight:700;">Telefoon</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(payload.phone)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#4b5563;font-weight:700;">Type dienst</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(payload.serviceType)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#4b5563;font-weight:700;">Onderwerp</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(payload.subject)}</td>
              </tr>
            </table>

            <div style="margin-top:18px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#4b5563;">Bericht</p>
              <p style="margin:0;font-size:15px;line-height:1.6;color:#111827;">${htmlMessage}</p>
            </div>

            <div style="margin-top:20px;">
              <a href="mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(`Re: ${payload.subject}`)}" style="display:inline-block;padding:12px 18px;background:#10B981;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;">Beantwoord dit bericht</a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `${config.smtpFromName} <${config.smtpUser}>`,
      to: config.contactTo,
      replyTo: payload.email,
      subject: `[Contactformulier] ${payload.subject}`,
      text: textBody,
      html: htmlBody
    })
  } catch (error) {
    console.error('Failed to send contact form email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }

  return {
    success: true
  }
})

