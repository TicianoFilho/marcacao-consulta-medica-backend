import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const router = Router();

router.get('/pacientes/:pacienteId', new PacienteController().findOne);
router.put('/pacientes/:pacienteId', new PacienteController().update);
router.get('/pacientes', new PacienteController().findAll);
router.post('/pacientes', new PacienteController().create);

export default router;
