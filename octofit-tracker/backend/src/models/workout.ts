import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focus: String,
    durationMinutes: Number,
    difficulty: String,
    description: String,
    recommendedFor: [String],
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);
