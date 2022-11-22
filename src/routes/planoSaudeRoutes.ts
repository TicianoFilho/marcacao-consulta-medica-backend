import { Router } from 'express';
import { PlanoSaudeController } from '../controllers/PlanoSaudeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/planoSaude/:planoSaudeId', authMiddleware, new PlanoSaudeController().findOne);
router.put('/planoSaude/:planoSaudeId', authMiddleware, new PlanoSaudeController().update);
router.delete('/planoSaude/:planoSaudeId', authMiddleware, new PlanoSaudeController().delete);
router.post('/planoSaude', authMiddleware, new PlanoSaudeController().create);
router.get('/planoSaude', authMiddleware, new PlanoSaudeController().findAll);

export default router;
