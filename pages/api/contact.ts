import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {name, email, subject, body} = req.body;
  console.log(name, email, subject, body);
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
      to: 'dayoawobeku@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Body: </strong> ${body}</p><br>
      `,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).json({error: error.message || error.toString()});
  }
  return res.status(200).json({error: ''});
}
