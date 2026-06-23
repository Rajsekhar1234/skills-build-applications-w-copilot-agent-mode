import express, { Router, Request, Response } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().populate('user').populate('activity');
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create workout' });
  }
});

router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find({ user: req.params.userId }).populate('activity');
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

export default router;
