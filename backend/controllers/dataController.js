import Program from '../models/Program.js';
import Photo from '../models/Photo.js';
import Certification from '../models/Certification.js';
import Publication from '../models/Publication.js';
import SuccessfulProgram from '../models/SuccessfulProgram.js';
import VolunteerActionImage from '../models/VolunteerActionImage.js';
import Counter from '../models/Counter.js';
import Visitor from '../models/Visitor.js';

// @desc    Get total website views
export const getViews = async (req, res) => {
  let views = await Counter.findOne({ name: 'website_views' });
  if (!views) {
    views = await Counter.create({ name: 'website_views', count: 0 });
  }
  res.json(views);
};

// @desc    Increment website views (Unique IP only)
export const incrementViews = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Check if visitor already exists
  const existingVisitor = await Visitor.findOne({ ip });

  if (!existingVisitor) {
    // New unique visitor
    await Visitor.create({ ip });
    const views = await Counter.findOneAndUpdate(
      { name: 'website_views' },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    return res.json(views);
  }

  // Existing visitor, just return current count
  const views = await Counter.findOne({ name: 'website_views' });
  res.json(views);
};

// @desc    Get all programs
export const getPrograms = async (req, res) => {
  const programs = await Program.find({}).sort({ createdAt: 1 });
  res.json(programs);
};

// @desc    Get all gallery photos
export const getPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort({ createdAt: -1 });
  res.json(photos);
};

// @desc    Get all certifications
export const getCertifications = async (req, res) => {
  const certifications = await Certification.find({}).sort({ createdAt: 1 });
  res.json(certifications);
};

// @desc    Get all publications
export const getPublications = async (req, res) => {
  const publications = await Publication.find({}).sort({ createdAt: -1 });
  res.json(publications);
};

// @desc    Get all successful programs (Social Welfare)
export const getSuccessfulPrograms = async (req, res) => {
  const programs = await SuccessfulProgram.find({}).sort({ createdAt: -1 });
  res.json(programs);
};
// @desc    Get all volunteer action images
export const getVolunteerActionImages = async (req, res) => {
  const images = await VolunteerActionImage.find({}).sort({ createdAt: -1 });
  res.json(images);
};

// CREATE FUNCTIONS
export const createPhoto = async (req, res) => {
  const photo = await Photo.create(req.body);
  res.status(201).json(photo);
};

export const createCertification = async (req, res) => {
  const cert = await Certification.create(req.body);
  res.status(201).json(cert);
};

export const createPublication = async (req, res) => {
  const pub = await Publication.create(req.body);
  res.status(201).json(pub);
};

export const createProgram = async (req, res) => {
  const program = await Program.create(req.body);
  res.status(201).json(program);
};

export const createSuccessfulProgram = async (req, res) => {
  const program = await SuccessfulProgram.create(req.body);
  res.status(201).json(program);
};
export const createVolunteerActionImage = async (req, res) => {
  const image = await VolunteerActionImage.create(req.body);
  res.status(201).json(image);
};

// DELETE FUNCTIONS
export const deletePhoto = async (req, res) => {
  await Photo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Photo removed' });
};

export const deleteCertification = async (req, res) => {
  await Certification.findByIdAndDelete(req.params.id);
  res.json({ message: 'Certification removed' });
};

export const deletePublication = async (req, res) => {
  await Publication.findByIdAndDelete(req.params.id);
  res.json({ message: 'Publication removed' });
};

export const deleteProgram = async (req, res) => {
  await Program.findByIdAndDelete(req.params.id);
  res.json({ message: 'Program removed' });
};

export const deleteSuccessfulProgram = async (req, res) => {
  await SuccessfulProgram.findByIdAndDelete(req.params.id);
  res.json({ message: 'Successful Program removed' });
};
export const deleteVolunteerActionImage = async (req, res) => {
  await VolunteerActionImage.findByIdAndDelete(req.params.id);
  res.json({ message: 'Volunteer action image removed' });
};

// UPDATE FUNCTIONS (Generic for now)
export const updatePhoto = async (req, res) => {
  const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(photo);
};

export const updateCertification = async (req, res) => {
  const cert = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cert);
};

export const updatePublication = async (req, res) => {
  const pub = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pub);
};

export const updateProgram = async (req, res) => {
  const program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(program);
};

export const updateSuccessfulProgram = async (req, res) => {
  const program = await SuccessfulProgram.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(program);
};
export const updateVolunteerActionImage = async (req, res) => {
  const image = await VolunteerActionImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(image);
};
