import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import userRoutes from './routes/users';
import teamRoutes from './routes/teams';
import activityRoutes from './routes/activities';
import leaderboardRoutes from './routes/leaderboard';
import workoutRoutes from './routes/workouts';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/workouts', workoutRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Backend running on port ${PORT}`);
});
