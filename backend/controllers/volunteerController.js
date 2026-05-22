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
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <!-- Header -->
            <div style="background-color: #d34b07; padding: 30px 20px; text-align: center; border-bottom: 4px solid #f07030;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">BK Education & Welfare Society</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Volunteer Registration</p>
            </div>
            
            <!-- Body Content -->
            <div style="padding: 40px 30px; color: #333333;">
              <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Hello Admin,</p>
              <p style="font-size: 16px; line-height: 1.6; color: #555555;">A new volunteer has just submitted their application through the website. Here are the details of their submission:</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #FFC107; padding: 20px; margin: 30px 0; border-radius: 0 4px 4px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; width: 140px; color: #777777; font-weight: bold; font-size: 14px;">Full Name:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Email Address:</td>
                    <td style="padding: 8px 0; color: #d34b07; font-size: 15px;"><a href="mailto:${email}" style="color: #d34b07; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Phone Number:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Interested Field:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">
                      <span style="background-color: #e3f2fd; color: #1976d2; padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${field}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #777777; font-weight: bold; font-size: 14px;">Key Skills:</td>
                    <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${skills || 'Not specified'}</td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #1a1a1a; font-size: 18px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px; margin-top: 40px;">Applicant's Message</h3>
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 6px; font-style: italic; color: #555555; line-height: 1.7; font-size: 15px;">
                "${message}"
              </div>
              
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="background-color: #d34b07; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; display: inline-block;">Reply to Applicant</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f5f5f5; padding: 25px 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #888888; font-size: 12px; line-height: 1.5;">This is an automated notification from the BK Education & Welfare Society platform.</p>
              <p style="margin: 5px 0 0 0; color: #888888; font-size: 12px;">Please do not reply directly to this email address.</p>
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


