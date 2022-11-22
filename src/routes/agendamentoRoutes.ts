import { Router } from 'express';
import { AgendamentoController } from '../controllers/AgendamentoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/agendamentos/pacientes/:pacienteId', authMiddleware, new AgendamentoController().findAllByPaciente);
router.get('/agendamentos/medicos/:medicoId', authMiddleware, new AgendamentoController().findAllByMedico);
router.get('/agendamentos/:agendamentoId', authMiddleware, new AgendamentoController().findOne);
router.delete('/agendamentos/:agendamentoId', authMiddleware, new AgendamentoController().delete);
router.post('/agendamentos', authMiddleware, new AgendamentoController().create);
router.get('/agendamentos', authMiddleware, new AgendamentoController().findAll);

export default router;
