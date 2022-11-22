import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usuarioRepository } from '../repositories/usuarioRepository';


export class LoginController {

  public async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {

      const usuario = await usuarioRepository.findOneBy({ email });
      if (!usuario) {
        return res.status(400).json({ message: 'Email ou senha inválidos.' });
      }

      // decrypting password and comparing it. If senha matches the hash, returns TRUE, otherwise returns FALSE.
      const verifyPass = await bcrypt.compare(senha, usuario.senha);
      if (!verifyPass) {
        return res.status(400).json({ message: 'Email ou senha inválidos.' });
      }

      // generate token
      const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? '', { expiresIn: '8H' });  // JWT_PASS it's a password for authenticating the token, to be able to sign it.

      return res.json({
        token: token,
      });

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async profile(req: Request, res: Response) {
    return res.json(req.loggedUser);                         // property created in src/@types/express.d.ts and loaded in authMiddleware.ts
  }
}
