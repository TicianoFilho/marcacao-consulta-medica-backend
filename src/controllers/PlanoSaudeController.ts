import { Request, Response } from 'express';
import { PlanoSaude } from '../entities/PlanoSaude';
import { planoSaudeRepository } from '../repositories/planoSaudeRepository';

export class PlanoSaudeController {

  public async findAll(req: Request, res: Response) {
    const planoSaude: PlanoSaude[] = await planoSaudeRepository.find();
    return res.status(200).json(planoSaude);
  }

}
