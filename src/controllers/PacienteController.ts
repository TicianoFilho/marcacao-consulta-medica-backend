import { Request, Response } from 'express';
import { Paciente } from '../entities/Paciente';
import { pacienteRepository } from '../repositories/pacienteRepository';

export class PacienteController {

  public async findAll(req: Request, res: Response) {
    const pacientes: Paciente[] = await pacienteRepository.find();
    return res.status(200).json(pacientes);
  }

  public async findOne(req: Request, res: Response) {
    const { pacienteId } = req.params;
    
    try {    
      const paciente = await pacienteRepository.findOneBy({ 
        id: Number(pacienteId)
      });

      if (!paciente) {
        return res.status(404).json({
          message: `Paciente de código ${ pacienteId } não existe.`
        });
      }

      return res.status(200).json(paciente); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }
}
