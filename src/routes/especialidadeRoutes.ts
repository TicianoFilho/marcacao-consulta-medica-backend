import { Router } from 'express';
import { EspecialidadeController } from '../controllers/EspecialidadeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/especialidades/:especialidadeId', authMiddleware, new EspecialidadeController().findOne);
router.put('/especialidades/:especialidadeId', authMiddleware, new EspecialidadeController().update);
router.delete('/especialidades/:especialidadeId', authMiddleware, new EspecialidadeController().delete);
router.get('/especialidades', authMiddleware, new EspecialidadeController().findAll);
router.post('/especialidades', authMiddleware, new EspecialidadeController().create);

export default router;
