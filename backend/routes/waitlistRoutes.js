import express from 'express'
import { waitlistAdd } from '../controllers/waitlistController.js';

const router = express.Router();

router.post('/join', waitlistAdd);

export default router