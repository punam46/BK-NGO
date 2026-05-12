import mongoose from 'mongoose';

const publicationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    src: {
      type: String,
      required: [true, 'Please add an image source'],
    },
    tag: {
      type: String,
      required: [true, 'Please add a tag'],
    },
    date: {
      type: String,
    },
    fullContent: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Publication = mongoose.model('Publication', publicationSchema);

export default Publication;
