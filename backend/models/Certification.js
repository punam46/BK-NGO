import mongoose from 'mongoose';

const certificationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    organization: {
      type: String,
    },
    idNumber: {
      type: String,
    },
    validity: {
      type: String,
    },
    type: {
      type: String,
      enum: ['text', 'image', 'photo-type'],
      default: 'text'
    },
    image: {
      type: String,
    },
    details: [String],
    color: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Certification = mongoose.model('Certification', certificationSchema);

export default Certification;
