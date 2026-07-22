import { Router } from 'express';
import { Leaderboard } from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await Leaderboard.find({}).populate('user');
  res.json({ message: 'Leaderboard route', leaderboard });
});

export default router;
