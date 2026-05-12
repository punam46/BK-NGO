import mongoose from 'mongoose';

const volunteerActionImageSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Volunteer in Action'
  }
}, {
  timestamps: true
});

const VolunteerActionImage = mongoose.model('VolunteerActionImage', volunteerActionImageSchema);

export default VolunteerActionImage;
