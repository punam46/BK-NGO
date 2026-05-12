import mongoose from 'mongoose';

const visitorSchema = mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
