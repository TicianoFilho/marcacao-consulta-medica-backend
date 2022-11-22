import { Router } from 'express';
import { MedicoController } from '../controllers/MedicoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.put('/medicos/:medicoId', authMiddleware, new MedicoController().update);
router.delete('/medicos/:medicoId', authMiddleware, new MedicoController().delete);
router.get('/medicos/:medicoId', authMiddleware, new MedicoController().findOne);
router.get('/medicos', authMiddleware, new MedicoController().findAll);
router.post('/medicos', authMiddleware, new MedicoController().create);

export default router;
