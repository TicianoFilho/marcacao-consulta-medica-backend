import { Request, Response } from 'express';
import { PlanoSaude } from '../entities/PlanoSaude';
import { planoSaudeRepository } from '../repositories/planoSaudeRepository';

export class PlanoSaudeController {

  public async findAll(req: Request, res: Response) {
    const planoSaude: PlanoSaude[] = await planoSaudeRepository.find();
    return res.status(200).json(planoSaude);
  }

  public async findOne(req: Request, res: Response) {
    const { planoSaudeId } = req.params;
    
    try {    
      const planoSaude = await planoSaudeRepository.findOneBy({ 
      });

      if (!planoSaude) {
        return res.status(404).json({
          message: `Plano de Saúde de código ${ planoSaudeId } não existe.`
        });
      }

      return res.status(200).json(planoSaude); 

    } catch (error: any) {
      res.status(500).json({
        message: 'Ocorreu algum erro no lado do servidor.',
        error: error.message
      });     
    }
  }
}
