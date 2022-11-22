import { Router } from 'express';
import { UnidadeController } from '../controllers/UnidadeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/unidades/:unidadeId', authMiddleware, new UnidadeController().findOne);
router.put('/unidades/:unidadeId', authMiddleware, new UnidadeController().update);
router.delete('/unidades/:unidadeId', authMiddleware, new UnidadeController().delete);
router.get('/unidades', authMiddleware, new UnidadeController().findAll);
router.post('/unidades', authMiddleware, new UnidadeController().create);

export default router;
