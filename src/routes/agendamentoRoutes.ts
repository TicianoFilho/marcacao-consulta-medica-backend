import { Router } from 'express';
import { AgendamentoController } from '../controllers/AgendamentoController';

const router = Router();

router.get('/agendamentos/:agendamentoId', new AgendamentoController().findOne);
//router.post('/agendamentos', new AgendamentoController().create);
router.get('/agendamentos', new AgendamentoController().findAll);

export default router;
