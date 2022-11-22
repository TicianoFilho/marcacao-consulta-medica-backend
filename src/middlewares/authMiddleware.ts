import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { usuarioRepository } from '../repositories/usuarioRepository';

type jwtPayload = {
  id: number;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json(
      {
        message: 'Acesso não autorizado.'
      }
    );
  }

  const token = authorization.split(' ')[1];

  const { id } = jwt.verify(token, process.env.JWT_TOKEN ?? '') as jwtPayload;

  const user = await usuarioRepository.findOneBy({ id });

  if (!user) {
    return res.status(401).json(
      {
        message: 'Acesso não autorizado.'
      }
    );
  }

  const { senha: _, ...userOk } = user;
  req.loggedUser = userOk;
  next();
};
