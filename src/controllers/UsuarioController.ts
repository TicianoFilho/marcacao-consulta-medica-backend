import { Request, Response } from 'express';
import { usuarioRepository } from '../repositories/usuarioRepository';
import bcrypt from 'bcrypt';

export class UsuarioController {


  public async create(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    
    try {

      const usuarioExists = await usuarioRepository.findOneBy({ email });

      if (usuarioExists) {
        return res.status(400).json({ message: `O email ${email} já existe.` });
      }

      const hashPassword = await bcrypt.hash(senha, 10);

      const newUsuario = usuarioRepository.create({
        nome,
        email,
        senha: hashPassword,
      });

      await usuarioRepository.save(newUsuario);
      
      const { senha: _, ...newUser } = newUsuario; // doesn't display the password for security reasons.

      res.status(201).json({
        message: 'Usuário criado com sucesso.',
        newUser: newUser,
      });

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }

  }
}
