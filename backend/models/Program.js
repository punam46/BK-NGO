import mongoose from 'mongoose';

const programSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model('Program', programSchema);

export default Program;
