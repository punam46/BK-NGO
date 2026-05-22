import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Submit contact form
// @route   POST /api/contacts
// @access  Public
export const submitContact = async (req, res) => {
  console.log('Received contact submission:', req.body);
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please include name, email and message');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  if (contact) {
    // Send Email Notification
    try {
      await sendEmail({
        email: 'bhagwan@bktimes.co.in, bkgroupofeducation@gmail.com',
        subject: `New Contact Request: ${subject}`,
        message: `New submission from ${name} (${email}). Message: ${message}`,
        data: {
          sender_name: name,
          sender_email: email,
          sender_phone: phone || 'N/A',
          subject: subject,
          message: message
        },
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <!-- Header -->
            <div style="background-color: #e53935; padding: 30px 20px; text-align: center; border-bottom: 4px solid #c62828;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">BK Education & Welfare Society</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Contact Request</p>
            </div>
            
            <!-- Body Content -->
            <div style="padding: 40px 30px; color: #333333;">
              <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Hello Admin,</p>
              <p style="font-size: 16px; line-height: 1.6; color: #555555;">A new message has been submitted through the Contact Us form on the website. Here are the details:</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #FFC107; padding: 20px; margin: 30px 0; border-radius: 0 4px 4px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; width: 120px; color: #777777; font-weight: bold; font-size: 14px;">Name:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Email:</td>
                    <td style="padding: 8px 0; color: #e53935; font-size: 15px;"><a href="mailto:${email}" style="color: #e53935; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Phone:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${phone || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Subject:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">
                      <span style="background-color: #ffebee; color: #c62828; padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${subject || 'General Inquiry'}</span>
                    </td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #1a1a1a; font-size: 18px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px; margin-top: 40px;">Sender's Message</h3>
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 6px; font-style: italic; color: #555555; line-height: 1.7; font-size: 15px;">
                "${message}"
              </div>
              
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="background-color: #e53935; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; display: inline-block;">Reply to Sender</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f5f5f5; padding: 25px 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #888888; font-size: 12px; line-height: 1.5;">This is an automated notification from the BK Education & Welfare Society platform.</p>
              <p style="margin: 5px 0 0 0; color: #888888; font-size: 12px;">Please do not reply directly to this system address.</p>
            </div>
          </div>
        `
      });
    } catch (err) {
      console.error('Email sending failed:', err);
    }

    res.status(201).json({
      _id: contact._id,
      name: contact.name,
      email: contact.email,
      message: 'Contact form submitted successfully',
    });
  } else {
    res.status(400);
    throw new Error('Invalid contact data');
  }
};

// @desc    Get all contacts (for admin)
// @route   GET /api/contacts
// @access  Private/Admin (Placeholder)
export const getContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
};
