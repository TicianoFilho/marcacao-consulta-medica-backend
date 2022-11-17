import { Request, Response } from 'express';
import { Unidade } from '../entities/Unidade';
import { unidadeRepository } from '../repositories/UnidadeRepository';

export class UnidadeController {

  public async findAll(req: Request, res: Response) {
    const unidades: Unidade[] = await unidadeRepository.find();
    return res.status(200).json(unidades);
  }

  public async findOne(req: Request, res: Response) {
    const { unidadeId } = req.params;
    
    try {    
      const unidade = await unidadeRepository.findOneBy({ 
        id: Number(unidadeId)
      });

      return res.status(200).json(unidade); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }

  public async create(req: Request, res: Response) {
    const { nome, endereco, telefone, email, cnpj } = req.body;

    try {

      if (!nome || !endereco || !cnpj || !telefone) {
        return res.status(404).json({ 
          message: 'Os campos: nome, endereco, telefone e cnpj são obrigatórios.' 
        });
      }

      const newUnidade = unidadeRepository.create({ nome, endereco, telefone, email, cnpj });
      await unidadeRepository.save(newUnidade);

      res.status(201).json({
        message: 'Nova unidade registrada com sucesso!',
        newObject: newUnidade
      });

    } catch (error: any) {

      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { nome, endereco, telefone, email, cnpj } = req.body;
    const { unidadeId } = req.params;

    try {
      await unidadeRepository.update(
        Number(unidadeId),
        { nome, endereco, telefone, email, cnpj }
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
