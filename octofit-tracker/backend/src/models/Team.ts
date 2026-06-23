import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  totalPoints: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export const Team = model('Team', teamSchema);
