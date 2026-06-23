import express, { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find().populate('team');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate('team');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

export default router;
