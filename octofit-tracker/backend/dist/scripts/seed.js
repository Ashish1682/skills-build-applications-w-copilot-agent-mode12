"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.User.deleteMany({}),
            team_1.Team.deleteMany({}),
            activity_1.Activity.deleteMany({}),
            leaderboard_1.Leaderboard.deleteMany({}),
            workout_1.Workout.deleteMany({}),
        ]);
        const users = await user_1.User.insertMany([
            {
                name: 'Maya Chen',
                email: 'maya@example.com',
                age: 29,
                favoriteSport: 'Cycling',
                location: 'Seattle',
            },
            {
                name: 'Jordan Alvarez',
                email: 'jordan@example.com',
                age: 34,
                favoriteSport: 'Swimming',
                location: 'Austin',
            },
            {
                name: 'Priya Singh',
                email: 'priya@example.com',
                age: 27,
                favoriteSport: 'Running',
                location: 'Denver',
            },
        ]);
        await team_1.Team.create({
            name: 'Northstar Endurance',
            sport: 'Triathlon',
            members: users.map((user) => user._id),
            captain: users[0]._id,
            city: 'Seattle',
        });
        await activity_1.Activity.insertMany([
            {
                user: users[0]._id,
                type: 'Cycling',
                durationMinutes: 45,
                distanceKm: 18,
                calories: 520,
            },
            {
                user: users[1]._id,
                type: 'Swimming',
                durationMinutes: 35,
                distanceKm: 1.2,
                calories: 380,
            },
            {
                user: users[2]._id,
                type: 'Running',
                durationMinutes: 30,
                distanceKm: 5,
                calories: 320,
            },
        ]);
        await leaderboard_1.Leaderboard.insertMany([
            {
                user: users[0]._id,
                points: 980,
                rank: 1,
                streak: 7,
            },
            {
                user: users[1]._id,
                points: 910,
                rank: 2,
                streak: 4,
            },
            {
                user: users[2]._id,
                points: 860,
                rank: 3,
                streak: 5,
            },
        ]);
        await workout_1.Workout.insertMany([
            {
                title: 'Tempo Run',
                focus: 'Cardio',
                durationMinutes: 40,
                difficulty: 'Intermediate',
                description: 'A brisk run with interval pacing.',
                recommendedFor: ['Runners', 'Triathletes'],
            },
            {
                title: 'Core Strength',
                focus: 'Strength',
                durationMinutes: 25,
                difficulty: 'Beginner',
                description: 'A short core-focused strength circuit.',
                recommendedFor: ['All levels'],
            },
        ]);
        console.log('Seeded database with users, teams, activities, leaderboard, and workouts.');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
