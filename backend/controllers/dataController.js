import Program from '../models/Program.js';
import Photo from '../models/Photo.js';
import Certification from '../models/Certification.js';

// @desc    Get all programs
// @route   GET /api/programs
export const getPrograms = async (req, res) => {
  const programs = await Program.find({}).sort({ createdAt: 1 });
  res.json(programs);
};

// @desc    Get all gallery photos
// @route   GET /api/photos
export const getPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort({ createdAt: -1 });
  res.json(photos);
};

// @desc    Get all certifications
// @route   GET /api/certifications
export const getCertifications = async (req, res) => {
  const certifications = await Certification.find({}).sort({ createdAt: 1 });
  res.json(certifications);
};
