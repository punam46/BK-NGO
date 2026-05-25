import Volunteer from '../models/Volunteer.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Submit volunteer registration
// @route   POST /api/volunteers
// @access  Public
export const registerVolunteer = async (req, res) => {
  const { name, email, phone, field, message, skills, interests, availability } = req.body;

  if (!name || !email || !phone || !field || !message) {
    res.status(400);
    throw new Error('Please include name, email, phone, field and message');
  }

  const volunteer = await Volunteer.create({
    name,
    email,
    phone,
    field,
    message,
    skills,
    interests,
    availability,
  });

  if (volunteer) {
    // Send Email Notification to Admin
    try {
      await sendEmail({
        email: 'bhagwan@bktimes.co.in, bkgroupofeducation@gmail.com',
        subject: `New Volunteer Application: ${name}`,
        message: `New volunteer application from ${name} (${email}) for field ${field}.`,
        data: {
          applicant_name: name,
          applicant_email: email,
          applicant_phone: phone,
          interested_field: field,
          skills: skills || 'N/A',
          message: message
        },
        html: `
          <div style="background-color: #F8FAFC; font-family: 'Inter', 'Outfit', system-ui, sans-serif; padding: 44px 16px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); border: 1px solid rgba(0,0,0,0.05);">
              
              <!-- Cover Image -->
              <div style="position: relative;">
                <img src="cid:headerImage" alt="BK Educational & Welfare Society" style="width: 100%; height: auto; display: block;" />
              </div>

              <!-- Content -->
              <div style="padding: 48px 40px; text-align: center;">
                <div style="display: inline-block; background-color: #e53935; color: #fff; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: bold; margin-bottom: 24px;">New Volunteer Registration</div>
                <h1 style="font-size: 32px; font-weight: 800; color: #1a1a1a; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 20px;">Application Received</h1>
                <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 32px;">
                  Hello <strong>Admin</strong>,<br /><br />
                  A new volunteer has just submitted their application through the website. Here are the details of their submission.
                </p>
              </div>

              <!-- Data Section -->
              <div style="background-color: #f8fafc; border-radius: 12px; padding: 30px; margin: 0 40px 48px; border: 1px solid #e2e8f0; text-align: left;">
                <span style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; display: block;">Applicant Details</span>
                
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #e53935; text-decoration: none;">${email}</a></p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b;"><strong>Interested Field:</strong> ${field}</p>
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b;"><strong>Key Skills:</strong> ${skills || 'Not specified'}</p>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <span style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; display: block;">Message</span>
                  <p style="margin: 0; font-size: 15px; color: #475569; font-style: italic; line-height: 1.6;">"${message}"</p>
                </div>
              </div>

              <!-- Support Callout -->
              <div style="padding: 0 40px 60px; text-align: center;">
                <p style="font-size: 14px; color: #475569; line-height: 1.8;">
                  Want to get in touch with the applicant? <br/>
                  <a href="mailto:${email}" style="color: #e53935; text-decoration: none; font-weight: 700;">Reply to Applicant &rarr;</a>
                </p>
              </div>

              <!-- Simple Footer -->
              <footer style="background-color: #f1f5f9; padding: 30px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #64748b; line-height: 1.6; margin: 0;">
                  &copy; ${new Date().getFullYear()} BK Educational & Welfare Society<br />
                  Empowering Communities. Shaping Futures.
                </p>
                <p style="font-size: 11px; color: #94A3B8; margin-top: 16px;">
                  This is an automated notification.
                </p>
              </footer>
            </div>
          </div>
        `
      });
    } catch (err) {
      console.error('Email sending failed:', err);
    }

    res.status(201).json({
      _id: volunteer._id,
      name: volunteer.name,
      message: 'Volunteer registration successful',
    });
  } else {
    res.status(400);
    throw new Error('Invalid volunteer data');
  }
};

// @desc    Get all volunteers
// @route   GET /api/volunteers
// @access  Private/Admin
export const getVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });
  res.json(volunteers);
};

// @desc    Get volunteer count
// @route   GET /api/volunteers/count
// @access  Public
export const getVolunteerCount = async (req, res) => {
  const count = await Volunteer.countDocuments({});
  res.json({ count });
};

// @desc    Delete volunteer
// @route   DELETE /api/volunteers/:id
// @access  Private/Admin
export const deleteVolunteer = async (req, res) => {
  const volunteer = await Volunteer.findById(req.params.id);
  if (volunteer) {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Volunteer application removed' });
  } else {
    res.status(404);
    throw new Error('Volunteer not found');
  }
};


