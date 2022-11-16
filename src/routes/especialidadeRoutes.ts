import { Router } from 'express';
import { EspecialidadeController } from '../controllers/EspecialidadeController';

const router = Router();

router.get('/especialidades/:especialidadeId', new EspecialidadeController().findOne);
router.put('/especialidades/:especialidadeId', new EspecialidadeController().update);
router.get('/especialidades', new EspecialidadeController().findAll);
router.post('/especialidades', new EspecialidadeController().create);

export default router;