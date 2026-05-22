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
          <div style="background-color: #F8FAFC; font-family: 'Inter', 'Outfit', system-ui, sans-serif; padding: 44px 16px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); border: 1px solid rgba(0,0,0,0.05);">
              
              <!-- Cover Image -->
              <div style="position: relative;">
                <img src="cid:headerImage" alt="BK Times Cover" style="width: 100%; height: auto; display: block; border-bottom: 5px solid #D4AF37;" />
              </div>

              <!-- Content -->
              <div style="padding: 48px 40px; text-align: center;">
                <span style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.25em; color: #D4AF37; display: block; margin-bottom: 16px;">Journalistic Integrity & Security</span>
                <div style="display: inline-block; background-color: #FBBC04; color: #000; padding: 4px 14px; border-radius: 4px; font-size: 13px; font-weight: bold; margin-bottom: 24px;">New Contact Request</div>
                <h1 style="font-size: 36px; font-weight: 900; color: #020617; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 20px;">Message Received</h1>
                <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 32px;">
                  Hello <strong>Admin</strong>,<br /><br />
                  A new message has been submitted through the Contact Us form on the website. Here are the details.
                </p>
              </div>

              <!-- Data Section -->
              <div style="background-color: #f1f5f9; border-radius: 16px; padding: 30px; margin: 0 40px 48px; border: 2px solid #e2e8f0; text-align: left;">
                <span style="font-size: 12px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; display: block;">Sender Details</span>
                
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #020617;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #020617;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a></p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #020617;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #020617;"><strong>Subject:</strong> ${subject}</p>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <span style="font-size: 12px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; display: block;">Message</span>
                  <p style="margin: 0; font-size: 15px; color: #475569; font-style: italic; line-height: 1.6;">"${message}"</p>
                </div>
              </div>

              <!-- Support Callout -->
              <div style="padding: 0 40px 60px; text-align: center;">
                <p style="font-size: 13px; color: #475569; line-height: 1.8; letter-spacing: 0.02em;">
                  Want to get in touch with the sender? <br/>
                  <a href="mailto:${email}" style="color: #FBBC04; text-decoration: none; font-weight: 700;">Reply to Sender &rarr;</a>
                </p>
              </div>

              <!-- Noir Footer -->
              <footer style="background-color: #020617; padding: 60px 40px; text-align: center;">
                <div style="display: inline-block; background-color: #FFFFFF; padding: 10px 24px; border-radius: 10px; margin-bottom: 32px;">
                  <img src="cid:footerLogo" alt="BK Times" style="height: 32px; display: block;" />
                </div>

                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 40px;">
                  <p style="font-size: 11px; color: #94A3B8; line-height: 1.8; letter-spacing: 0.02em; margin: 0;">
                    &copy; ${new Date().getFullYear()} BK Times Media Group | A BK Group of Education Initiative<br />
                    Digital HQ: Nashik, Maharashtra, India
                  </p>
                  <p style="font-size: 11px; color: #FFFFFF; opacity: 0.4; margin-top: 24px; line-height: 1.8; letter-spacing: 0.02em;">
                    Building the future of rural journalism, one village at a time.
                  </p>
                  <p style="font-size: 11px; color: #94A3B8; margin-top: 32px; line-height: 1.8; letter-spacing: 0.02em;">
                    <span style="color: #FBBC04; font-weight: 700;">Automated System Notification</span> • Do not reply directly
                  </p>
                </div>
              </footer>
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
