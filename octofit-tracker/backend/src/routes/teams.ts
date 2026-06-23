import express, { Router, Request, Response } from 'express';
import { Team } from '../models/Team';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate('members');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create team' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findById(req.params.id).populate('members');
    if (!team) return res.status(404).json({ error: 'Team not found' });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
});

export default router;
