import { Request, Response } from 'express';
import { Agendamento } from '../entities/Agendamento';
import { agendamentoRepository } from '../repositories/agendamentoRepository';
import { especialidadeRepository } from '../repositories/especialidadeRepository';
import { medicoRepository } from '../repositories/medicoRepository';
import { pacienteRepository } from '../repositories/pacienteRepository';
import { unidadeRepository } from '../repositories/UnidadeRepository';

export class AgendamentoController {

  public async findAll(req: Request, res: Response) {
    const agendamentos: Agendamento[] = await agendamentoRepository.find({
      relations: [
        'especialidade',
        'medico', 
        'unidade',
        'paciente', 
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
          'especialidade',
          'medico', 
          'unidade',
          'paciente',
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

  public async create(req: Request, res: Response) {
    const { hora, data, unidadeId, medicoId, pacienteId, especialidadeId } = req.body;

    try {

      const unidade = await unidadeRepository.findOneBy({ id: Number(unidadeId) });
      if (!unidade) {
        return res.status(404).json({
          message: `Unidade de código ${ unidadeId } não existe.`
        });
      }

      const medico = await medicoRepository.findOneBy({ id: Number(medicoId) });
      if (!medico) {
        return res.status(404).json({
          message: `Médico de código ${ medicoId } não existe.`
        });
      }

      const paciente = await pacienteRepository.findOneBy({ id: Number(pacienteId) });
      if (!paciente) {
        return res.status(404).json({
          message: `Paciente de código ${ pacienteId } não existe.`
        });
      }
 
      const especialidade = await especialidadeRepository.findOneBy({ id: Number(especialidadeId) });
      if (!especialidade) {
        return res.status(404).json({
          message: `Especialidade de código ${ especialidadeId } não existe.`
        });
      }

      if (!hora || !data || !unidadeId || !medicoId || !pacienteId || !especialidadeId) {
        return res.status(404).json({ 
          message: 'Os campos: hora, data, unidadeId, medicoId, pacienteId, especialidadeId são obrigatórios.' 
        });
      }

      const newAgendamento = agendamentoRepository.create({ hora, data, unidade, medico, paciente, especialidade });
      await agendamentoRepository.save(newAgendamento);

      res.status(201).json({
        message: 'Novo agendamento criado com sucesso!',
        newObject: newAgendamento
      });

    } catch (error: any) {

      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { agendamentoId } = req.params;

    try {
      const agendamento = await agendamentoRepository.findOneBy({ 
        id: Number(agendamentoId)
      });

      if (!agendamento) {
        return res.status(404).json({ 
          message: `Agendamento de código ${ agendamentoId } não existe.` 
        });
      }

      await agendamentoRepository.remove(agendamento);
      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });  
    }
  }
}
