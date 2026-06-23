import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  points: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Activity = model('Activity', activitySchema);
