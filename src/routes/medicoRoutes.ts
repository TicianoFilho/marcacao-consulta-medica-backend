import { Router } from 'express';
import { MedicoController } from '../controllers/MedicoController';

const router = Router();

router.get('/medicos', new MedicoController().findAll);
router.post('/medicos', new MedicoController().create);

export default router;
