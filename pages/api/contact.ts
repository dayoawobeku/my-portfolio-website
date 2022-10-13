import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {name, email, subject, body} = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `Contact form submission from ${name}`,
      html: `<h1>You have a contact form submission.</h1><br>
        <p><strong>Name: </strong> ${name}</p><br>
        <p><strong>Email: </strong> 
        ${email}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Body: </strong> ${body}</p><br>
      `,
    });
  } catch (error: unknown) {
    const msg = error as Error;
    return res.status(500).json({error: msg.message || msg.toString()});
  }
  return res.status(200).json({error: ''});
}
