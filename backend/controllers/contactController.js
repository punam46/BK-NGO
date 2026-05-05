import Contact from '../models/Contact.js';

// @desc    Submit contact form
// @route   POST /api/contacts
// @access  Public
export const submitContact = async (req, res) => {
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
