import { Router } from 'express';
import { UnidadeController } from '../controllers/UnidadeController';

const router = Router();

router.get('/unidades', new UnidadeController().findAll);
router.post('/unidades', new UnidadeController().create);

export default router;
