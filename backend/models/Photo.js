import mongoose from 'mongoose';

const photoSchema = mongoose.Schema(
  {
    src: {
      type: String,
      required: [true, 'Please add an image source'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
    },
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
