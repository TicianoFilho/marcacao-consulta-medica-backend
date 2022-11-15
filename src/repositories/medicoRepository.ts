import { AppDataSource } from '../data-source';
import { Medico } from '../entities/Medico';

export const medicoRepository = AppDataSource.getRepository(Medico);
