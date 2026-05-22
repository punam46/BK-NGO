import axios from 'axios';
import path from 'path';

const sendEmail = async (options) => {
  // If FORMSPREE_ID is provided, use Formspree (easiest)
  if (process.env.FORMSPREE_ID) {
    try {
      await axios.post(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
        email: options.email || "system@bkeducational.org",
        message: options.message,
        subject: options.subject,
        ...options.data // Pass all other data
      });
      return;
    } catch (error) {
      console.error('Formspree sending failed:', error.response?.data || error.message);
      throw error;
    }
  }

  // Fallback to Nodemailer if configured
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: process.env.SMTP_PORT == 465, // true for port 465, false for other ports like 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"BK NGO Portal" <${process.env.EMAIL_USER}>`,
      to: options.email || process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: options.subject,
      html: options.html,
      attachments: [
        {
          filename: 'Header.jpeg',
          path: path.join(process.cwd(), '../frontend/src/assets/Header.jpeg'),
          cid: 'headerImage'
        },
        {
          filename: 'bk times logo.jpg',
          path: path.join(process.cwd(), '../frontend/src/assets/bk times logo.jpg'),
          cid: 'footerLogo'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
  }
};

export default sendEmail;
