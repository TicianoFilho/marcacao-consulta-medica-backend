import { Router } from 'express';
import { AgendamentoController } from '../controllers/AgendamentoController';

const router = Router();

router.get('/agendamentos/pacientes/:pacienteId', new AgendamentoController().findAllByPaciente);
router.get('/agendamentos/medicos/:medicoId', new AgendamentoController().findAllByMedico);
router.get('/agendamentos/:agendamentoId', new AgendamentoController().findOne);
router.delete('/agendamentos/:agendamentoId', new AgendamentoController().delete);
router.post('/agendamentos', new AgendamentoController().create);
router.get('/agendamentos', new AgendamentoController().findAll);

export default router;
