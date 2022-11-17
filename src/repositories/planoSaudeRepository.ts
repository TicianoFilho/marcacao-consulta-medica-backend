import { AppDataSource } from '../data-source';
import { PlanoSaude } from '../entities/PlanoSaude';

export const planoSaudeRepository = AppDataSource.getRepository(PlanoSaude);
