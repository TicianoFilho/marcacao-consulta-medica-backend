import { Router } from 'express';
import { PlanoSaudeController } from '../controllers/PlanoSaudeController';

const router = Router();

router.get('/plano-saude', new PlanoSaudeController().findAll);

export default router;
