import { Request, Response } from 'express';
import { Medico } from '../entities/Medico';
import { medicoRepository } from '../repositories/medicoRepository';
import { especialidadeRepository } from '../repositories/especialidadeRepository';

export class MedicoController {

  public async findAll(req: Request, res: Response) {
    const medicos: Medico[] = await medicoRepository.find({
      relations: ['especialidades']
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
    const { nome, cpf, endereco, telefone, email, crm, especialidadesId } = req.body;
    const especialidadesIdArray: number[] = especialidadesId;

    try {

      const especialidades = await especialidadeRepository
        .createQueryBuilder('especialidade')
        .where('id in (:...ids)', { ids: especialidadesIdArray })
        .getMany();

      if (!especialidades) {
        return res.status(404).json({
          message: `Especialidade de código ${especialidadesId} não existe.`
        });
      }

      const newMedico = medicoRepository.create({ nome, cpf, endereco, telefone, email, crm, especialidades });

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

  public async update(req: Request, res: Response) {
    const { nome, cpf, endereco, telefone, email, crm, especialidadesId } = req.body;
    // const especialidadesIdArray: number[] = especialidadesId;
    const { medicoId } = req.params;

    try {

      // const especialidades = await especialidadeRepository
      //   .createQueryBuilder('especialidade')
      //   .where('id in (:...ids)', { ids: especialidadesIdArray })
      //   .getMany();
      
      await medicoRepository.update(
        Number(medicoId),
        {
          nome, cpf, endereco, telefone, email, crm, // TODO implement update to especialidades. Given error: "Cannot query across many-to-many for property especialidades".
        }
      );

      return res.status(204).send();

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }
}
