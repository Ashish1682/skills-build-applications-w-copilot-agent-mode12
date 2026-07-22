import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, default: 0 },
    rank: Number,
    streak: Number,
  },
  { timestamps: true },
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
