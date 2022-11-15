import { Request, Response } from 'express';
import { Especialidade } from '../entities/Especialidade';
import { especialidadeRepository } from '../repositories/especialidadeRepository';

export class EspecialidadeController {

  public async findAll(req: Request, res: Response) {
    const especialidades: Especialidade[] = await especialidadeRepository.find();
    return res.status(200).json(especialidades);
  }

  public async findOne(req: Request, res: Response) {
    const { especialidadeId } = req.params;
    
    try {    
      const especialdiade = await especialidadeRepository.findOneBy({ 
        id: Number(especialidadeId)
      });

      return res.status(200).json(especialdiade); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }

  public async create(req: Request, res: Response) {
    const { descricao } = req.body;

    try {

      if (!descricao) {
        return res.status(404).json({ 
          message: 'O campo descricao não pode ser vazio.' 
        });
      }

      const newEspecialidade = especialidadeRepository.create({ descricao });
      await especialidadeRepository.save(newEspecialidade);

      res.status(201).json({
        message: 'Nova especialidade registrada com sucesso!',
        newObject: newEspecialidade
      });

    } catch (error: any) {

      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { descricao } = req.body;
    const { especialidadeId } = req.params;

    try {
      const especialidade = await especialidadeRepository.findOneBy({ 
        id: Number(especialidadeId) 
      });
      
      if (!especialidade) {
        return res.status(404).json({ 
          message: `A especialidade de código ${ especialidadeId } não existe.` 
        });
      }

      especialidade.descricao = descricao;

      await especialidadeRepository.save(especialidade);
      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { especialidadeId } = req.params;

    try {
      const especialidade = await especialidadeRepository.findOneBy({ 
        id: Number(especialidadeId)
      });

      if (!especialidade) {
        return res.status(404).json({ 
          message: `A especialidade de código ${ especialidadeId } não existe.` 
        });
      }

      await especialidadeRepository.remove(especialidade);
      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });  
    }
  }
}
