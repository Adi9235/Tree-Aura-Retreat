import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use host/port if not gmail
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // 1. Email to Business (Tree Aura)
    const mailOptionsToBusiness = {
      from: process.env.SMTP_EMAIL,
      to: 'treeaura.retreat@gmail.com',
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 2. Email to User (Confirmation)
    const mailOptionsToUser = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: `Confirmation: We received your message, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out to Tree Aura Retreat. We've received your message and will get back to you shortly.\n\nYour Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6d4c41;">Namaste ${name}!</h2>
          <p>Thank you for reaching out to <strong>Tree Aura Retreat</strong>.</p>
          <p>We have received your inquiry and our team will get back to you shortly to help you plan your stay in Rishikesh.</p>
          <hr />
          <p><strong>Your Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #6d4c41;">
            ${message}
          </blockquote>
          <hr />
          <p>Warm regards,<br /><strong>Tree Aura Retreat Team</strong></p>
          <p style="font-size: 12px; color: #777;">This is an automated confirmation email. Please do not reply directly to this message.</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToBusiness),
      transporter.sendMail(mailOptionsToUser),
    ]);

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
