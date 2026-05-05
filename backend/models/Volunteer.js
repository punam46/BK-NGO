import mongoose from 'mongoose';

const volunteerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    skills: {
      type: String,
      required: [true, 'Please add your skills'],
    },
    interests: {
      type: String,
    },
    availability: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
