import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const router = Router();

router.get('/pacientes/:pacienteId', new PacienteController().findOne);
router.get('/pacientes', new PacienteController().findAll);
router.post('/pacientes/tipoPlano/:tipoPlanoId', new PacienteController().create);

export default router;
