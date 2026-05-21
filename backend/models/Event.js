import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add an event title'],
    },
    date: {
      type: String,
      required: [true, 'Please add an event date'],
    },
    time: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: 'Upcoming',
    }
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
