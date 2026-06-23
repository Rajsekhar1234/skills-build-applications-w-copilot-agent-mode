import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
  duration: { type: Number, required: true },
  points: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Workout = model('Workout', workoutSchema);
