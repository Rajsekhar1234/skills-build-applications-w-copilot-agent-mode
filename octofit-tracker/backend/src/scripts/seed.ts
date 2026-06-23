import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Workout } from '../models/Workout';

/**
 * Seed script: Populate test data into octofit_db
 * Initializes and seeds sample teams, activities, users, and workouts for the OctoFit Tracker
 */
export async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});

    // Create teams
    const teams = await Team.insertMany([
      { name: 'Alpha Team', totalPoints: 0 },
      { name: 'Beta Team', totalPoints: 0 },
      { name: 'Gamma Team', totalPoints: 0 }
    ]);

    // Create activities
    const activities = await Activity.insertMany([
      { name: 'Running', description: '10km run', points: 100 },
      { name: 'Cycling', description: '50km ride', points: 150 },
      { name: 'Swimming', description: '2km swim', points: 120 },
      { name: 'Yoga', description: '1 hour session', points: 50 }
    ]);

    // Create users
    const users = await User.insertMany([
      { username: 'alice', email: 'alice@example.com', team: teams[0]._id, totalPoints: 300 },
      { username: 'bob', email: 'bob@example.com', team: teams[1]._id, totalPoints: 250 },
      { username: 'charlie', email: 'charlie@example.com', team: teams[2]._id, totalPoints: 400 }
    ]);

    // Create workouts - seed command initializes test data
    await Workout.insertMany([
      { user: users[0]._id, activity: activities[0]._id, duration: 30, points: 100 },
      { user: users[1]._id, activity: activities[1]._id, duration: 60, points: 150 },
      { user: users[2]._id, activity: activities[2]._id, duration: 45, points: 120 }
    ]);

    console.log('Database seeded successfully with test data!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
