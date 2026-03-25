import express from 'express';
import { generatePassword } from '../controllers/generatorController.js';

const router = express.Router();

router.get('/', generatePassword);

export default router;