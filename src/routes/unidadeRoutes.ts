import { Router } from 'express';
import { UnidadeController } from '../controllers/UnidadeController';

const router = Router();

router.get('/unidades/:unidadeId', new UnidadeController().findOne);
router.put('/unidades/:unidadeId', new UnidadeController().update);
router.delete('/unidades/:unidadeId', new UnidadeController().delete);
router.get('/unidades', new UnidadeController().findAll);
router.post('/unidades', new UnidadeController().create);

export default router;
