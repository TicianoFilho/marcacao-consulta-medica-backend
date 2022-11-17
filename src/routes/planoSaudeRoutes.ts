import { Router } from 'express';
import { PlanoSaudeController } from '../controllers/PlanoSaudeController';

const router = Router();

router.get('/planoSaude', new PlanoSaudeController().findAll);
router.get('/planoSaude/:planoSaudeId', new PlanoSaudeController().findOne);

export default router;
