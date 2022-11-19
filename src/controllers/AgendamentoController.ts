import { Request, Response } from 'express';
import { Agendamento } from '../entities/Agendamento';
import { agendamentoRepository } from '../repositories/agendamentoRepository';

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
}
