import express from 'express';

import { createPotluck, getPotlucks, updatePotluck } from '../controllers/potlucks.js'

const router = express.Router();

router.get('/', getPotlucks);
router.post('/', createPotluck);
router.patch('/:id', updatePotluck);

export default router;