import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  totalPoints: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export const User = model('User', userSchema);
