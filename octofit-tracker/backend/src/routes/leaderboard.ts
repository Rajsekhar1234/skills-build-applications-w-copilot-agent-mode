import express, { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const leaderboard = await User.find().sort({ totalPoints: -1 }).limit(10).populate('team');
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

export default router;
