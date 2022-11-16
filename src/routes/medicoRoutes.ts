import { Router } from 'express';
import { MedicoController } from '../controllers/MedicoController';

const router = Router();

router.put('/medicos/:medicoId', new MedicoController().update);
router.delete('/medicos/:medicoId', new MedicoController().delete);
router.get('/medicos', new MedicoController().findAll);
router.post('/medicos', new MedicoController().create);

export default router;
