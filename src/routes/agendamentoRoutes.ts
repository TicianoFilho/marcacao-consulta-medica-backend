import { Router } from 'express';
import { AgendamentoController } from '../controllers/AgendamentoController';

const router = Router();

router.get('/agendamentos', new AgendamentoController().findAll);

export default router;
