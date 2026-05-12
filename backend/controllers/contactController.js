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
        email: email,
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
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #e53935;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
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
