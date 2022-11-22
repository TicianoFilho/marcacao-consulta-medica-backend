import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// TODO implement user roles.

router.post('/usuarios', authMiddleware, new UsuarioController().create);

export default router;
