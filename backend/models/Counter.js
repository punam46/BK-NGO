import mongoose from 'mongoose';

const counterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'website_views'
    },
    count: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;
