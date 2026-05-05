import Volunteer from '../models/Volunteer.js';

// @desc    Submit volunteer registration
// @route   POST /api/volunteers
// @access  Public
export const registerVolunteer = async (req, res) => {
  const { name, email, skills, interests, availability } = req.body;

  if (!name || !email || !skills) {
    res.status(400);
    throw new Error('Please include name, email, and skills');
  }

  const volunteer = await Volunteer.create({
    name,
    email,
    skills,
    interests,
    availability,
  });

  if (volunteer) {
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
