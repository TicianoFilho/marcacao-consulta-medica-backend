import { Especialidade } from '../entities/Especialidade';

export interface IEspecialidadeService {
  findAll(): Promise<Especialidade[]>
}
