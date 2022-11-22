import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/pacientes/:pacienteId', authMiddleware, new PacienteController().findOne);
router.put('/pacientes/:pacienteId', authMiddleware, new PacienteController().update);
router.delete('/pacientes/:pacienteId', authMiddleware, new PacienteController().delete);
router.get('/pacientes', authMiddleware, new PacienteController().findAll);
router.post('/pacientes', authMiddleware, new PacienteController().create);

export default router;
