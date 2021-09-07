import express from 'express';

import { createPotluck, getPotlucks, updatePotluck, deletePotluck, deleteReply } from '../controllers/potlucks.js'

const router = express.Router();

router.get('/', getPotlucks);
router.post('/', createPotluck);
router.patch('/:id', updatePotluck);
router.delete('/:id', deletePotluck);

export default router;