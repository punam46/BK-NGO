import axios from 'axios';

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
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"BK NGO Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: options.subject,
      html: options.html,
    };

    await transporter.sendMail(mailOptions);
  }
};

export default sendEmail;
