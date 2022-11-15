import { Especialidade } from '../entities/Especialidade';
import { especialidadeRepository } from '../repositories/especialidadeRepository';
import { IEspecialidadeService } from './IEspecialidadeService';

export class EspecialidadeSerciveImpl implements IEspecialidadeService {
  
  public findAll(): Promise<Especialidade[]> {
    return especialidadeRepository.find();   
  }
}
