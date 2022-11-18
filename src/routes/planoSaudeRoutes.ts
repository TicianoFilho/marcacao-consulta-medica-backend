import { Router } from 'express';
import { PlanoSaudeController } from '../controllers/PlanoSaudeController';

const router = Router();

router.get('/planoSaude/:planoSaudeId', new PlanoSaudeController().findOne);
router.put('/planoSaude/:planoSaudeId', new PlanoSaudeController().update);
router.delete('/planoSaude/:planoSaudeId', new PlanoSaudeController().delete);
router.post('/planoSaude', new PlanoSaudeController().create);
router.get('/planoSaude', new PlanoSaudeController().findAll);

export default router;
