import { Request, Response } from 'express';
import { Agendamento } from '../entities/Agendamento';
import { agendamentoRepository } from '../repositories/agendamentoRepository';
import { medicoRepository } from '../repositories/medicoRepository';
import { pacienteRepository } from '../repositories/pacienteRepository';
import { unidadeRepository } from '../repositories/UnidadeRepository';

export class AgendamentoController {

  public async findAll(req: Request, res: Response) {
    const agendamentos: Agendamento[] = await agendamentoRepository.find({
      relations: [
        'medico', 
        'paciente', 
        'unidade'
      ],
    });
    return res.status(200).json(agendamentos);
  }

  public async findOne(req: Request, res: Response) {
    const { agendamentoId } = req.params;
    
    try {    
      const agendamento = await agendamentoRepository.findOne({ 
        where: { id: Number(agendamentoId) },
        relations: [
          'medico', 
          'paciente',
          'unidade'
        ],
      });

      if (!agendamento) {
        return res.status(404).json({
          message: `Agendamento de código ${ agendamentoId } não existe.`
        });
      }

      return res.status(200).json(agendamento); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }

  public async findAllTest(req: Request, res: Response) {
    
    try {    
      const agendamento = await agendamentoRepository.createQueryBuilder('agendamento')
        .leftJoinAndSelect('agendamento.medico', 'medico.especialidade')
        .getMany();

      return res.status(200).json(agendamento); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }

 
}
