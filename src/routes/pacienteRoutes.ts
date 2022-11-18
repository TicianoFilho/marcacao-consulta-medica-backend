import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const router = Router();

router.get('/pacientes', new PacienteController().findAll);

export default router;
