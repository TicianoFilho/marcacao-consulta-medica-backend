import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/login', new LoginController().login);
router.get('/login/profile', authMiddleware, new LoginController().profile);

export default router;
