import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const router = Router();

router.get('/pacientes', new PacienteController().findAll);
router.get('/pacientes/:pacienteId', new PacienteController().findOne);

export default router;
