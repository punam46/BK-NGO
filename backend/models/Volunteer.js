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
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    field: {
      type: String,
      required: [true, 'Please select a field'],
    },
    message: {
      type: String,
      required: [true, 'Please add a message'],
    },
    skills: {
      type: String,
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
