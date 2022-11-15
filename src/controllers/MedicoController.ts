import { Request, Response } from 'express';
import { Medico } from '../entities/Medico';
import { medicoRepository } from '../repositories/medicoRepository';
import { especialidadeRepository } from '../repositories/especialidadeRepository';

export class MedicoController {

  public async findAll(req: Request, res: Response) {
    const medicos: Medico[] = await medicoRepository.find({ 
      relations:['especialidade'] 
    });
    
    return res.status(200).json(medicos);
  }

  public async findOne(req: Request, res: Response) {
    const { medicoId } = req.params;
    
    try {    
      const medico = await medicoRepository.findOneBy({ 
        id: Number(medicoId)
      });

      return res.status(200).json(medico); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }

  public async create(req: Request, res: Response) {
    const { nome, cpf, endereco, telefone, email, crm, especialidadeId } = req.body;
    
    try {
      
      // find especialidade
      const especialidade = await especialidadeRepository.findOneBy({ id: Number(especialidadeId) });
      if (!especialidade) {
        return res.status(404).json({ 
          message: `A especialidade de código ${ especialidadeId } não existe.` 
        });
      }

      const newMedico = medicoRepository.create({ nome, cpf, endereco, telefone, email, crm, especialidade });

      if (!newMedico) {
        return res.status(404).json({ 
          message: 'Faltando informações requeridas do médico.' 
        });
      }

      await medicoRepository.save(newMedico);

      res.status(201).json({
        message: 'Novo médico registrado com sucesso.',
        newObject: newMedico
      });

    } catch (error: any) {

      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }
}
