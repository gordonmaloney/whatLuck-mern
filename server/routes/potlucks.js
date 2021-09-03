import express from 'express';

import { createPotluck, getPotlucks } from '../controllers/potlucks.js'

const router = express.Router();

router.get('/', getPotlucks);
router.post('/', createPotluck);

export default router;