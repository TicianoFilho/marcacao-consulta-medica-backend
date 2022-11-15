import { Router } from 'express';
import { EspecialidadeController } from '../controllers/EspecialidadeController';

const router = Router();

router.get('/especialidades', new EspecialidadeController().findAll);
router.post('/especialidades', new EspecialidadeController().create);

export default router;
