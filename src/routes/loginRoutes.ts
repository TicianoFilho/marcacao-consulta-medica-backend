import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';

const router = Router();

router.post('/login', new LoginController().login);

export default router;
