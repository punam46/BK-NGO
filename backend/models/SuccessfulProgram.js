import mongoose from 'mongoose';

const SuccessfulProgramSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  icon: { type: String }, // Can be emoji or image URL
  tag: { type: String },
  objectPosition: { type: String, default: 'center' },
  createdAt: { type: Date, default: Date.now }
});

const SuccessfulProgram = mongoose.model('SuccessfulProgram', SuccessfulProgramSchema);

export default SuccessfulProgram;
