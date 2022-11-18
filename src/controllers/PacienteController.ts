import { Request, Response } from 'express';
import { Paciente } from '../entities/Paciente';
import { pacienteRepository } from '../repositories/pacienteRepository';

export class PacienteController {

  public async findAll(req: Request, res: Response) {
    const pacientes: Paciente[] = await pacienteRepository.find();
    return res.status(200).json(pacientes);
  }
}
