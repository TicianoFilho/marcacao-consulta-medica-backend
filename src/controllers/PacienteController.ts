import { Request, Response } from 'express';
import { Paciente } from '../entities/Paciente';
import { pacienteRepository } from '../repositories/pacienteRepository';
import { planoSaudeRepository } from '../repositories/planoSaudeRepository';

export class PacienteController {

  public async findAll(req: Request, res: Response) {
    const pacientes: Paciente[] = await pacienteRepository.find({
      relations: ['planoSaude'],
    });
    return res.status(200).json(pacientes);
  }

  public async findOne(req: Request, res: Response) {
    const { pacienteId } = req.params;
    
    try {    
      const paciente = await pacienteRepository.findOne({ 
        where: { id: Number(pacienteId) },
        relations: ['planoSaude'],
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

  public async create(req: Request, res: Response) {
    const { nome, endereco, telefone, email, cpf, tipoPlanoId } = req.body;

    try {

      const planoSaude = await planoSaudeRepository.findOneBy({ id: Number(tipoPlanoId) });
      if (!planoSaude) {
        return res.status(404).json({
          message: `Tipo de Plano de código ${ tipoPlanoId } não existe.`
        });
      }

      if (!nome || !endereco || !cpf || !telefone) {
        return res.status(404).json({ 
          message: 'Os campos: nome, endereco, telefone e cpf são obrigatórios.' 
        });
      }

      const newPaciente = pacienteRepository.create({ nome, endereco, telefone, email, cpf, planoSaude });
      await pacienteRepository.save(newPaciente);

      res.status(201).json({
        message: 'Novo paciente registrado com sucesso!',
        obs: 'O paciente inicialmente encontra-se INATIVO.',
        newObject: newPaciente
      });

    } catch (error: any) {

      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  // TODO have to fix this method.s
  public async update(req: Request, res: Response) {
    const { nome, endereco, telefone, email, cpf, ativo } = req.body;
    const { pacienteId } = req.params;

    try {

      // const planoSaude = await planoSaudeRepository.findOneBy({ id: Number(tipoPlanoId) });
      // if (!planoSaude) {
      //   return res.status(404).json({ 
      //     message: `Tipo de Plano de saúde de código ${ tipoPlanoId } não existe.` 
      //   });
      // }

      const id = Number(pacienteId);
      const updatedPaciente = pacienteRepository.create(
        { id, nome, endereco,telefone, email, cpf, ativo },
      );

      // if (planoSaude) {
      //   updatedPaciente.planoSaude = planoSaude;
      // }

      await pacienteRepository.save(updatedPaciente);     
      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async delete(req: Request, res: Response) {
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

      await pacienteRepository.remove(paciente);
      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });  
    }
  }

}
