import { Request, Response } from 'express';
import { Especialidade } from '../entities/Especialidade';
import { especialidadeRepository } from '../repositories/especialidadeRepository';

export class EspecialidadeController {

  public async findAll(req: Request, res: Response) {
    const especialidades: Especialidade[] = await especialidadeRepository.find();
    return res.status(200).json(especialidades);
  }

  public async create(req: Request, res: Response) {
    const { descricao } = req.body;

    try {
      if (!descricao) {
        return res.status(404).json({ message: 'O campo descricao não pode ser vazio.' });
      }

      const newEspecialidade = especialidadeRepository.create({ descricao });
      await especialidadeRepository.save(newEspecialidade);
      res.status(201).json({ 
        message: 'Nova especialidade registrada com sucesso!', 
        newObject: newEspecialidade 
      });
      
    } catch (error: any) {
      res.status(500).json({ message: 'Ocorreu algum erro no lado do servidor.', error: error.message });
    }

  }
}
