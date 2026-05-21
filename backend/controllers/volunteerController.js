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
    // Send Email Notification
    try {
      await sendEmail({
        email: email,
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
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2196f3;">New Volunteer Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Interested Field:</strong> ${field}</p>
            <p><strong>Skills:</strong> ${skills || 'N/A'}</p>
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


