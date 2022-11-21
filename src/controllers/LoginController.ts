import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usuarioRepository } from '../repositories/usuarioRepository';

export class LoginController {

  public async login(req: Request, res: Response) {
    const { email, senha } = req.body;

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
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? '', { expiresIn: '8H' }  );  // JWT_PASS it's a password for authenticating the token, to be able to sign it.

    const { senha: _, ...userLogin } = usuario;

    return res.json({
      user: userLogin,
      token: token,
    });

  }
}
