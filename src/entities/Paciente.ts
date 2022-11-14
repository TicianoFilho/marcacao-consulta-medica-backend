/* eslint-disable indent */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Pessoa } from './Pessoa';
import { PlanoSaude } from './PlanoSaude';

@Entity('paciente')
export class Paciente extends Pessoa {

  constructor() {
    super();
  }

  @Column()
  ativo: boolean;

  @ManyToOne(() => PlanoSaude, planoSaude => planoSaude.paciente)
  @JoinColumn({ name: 'plano_saude_id' })
  planoSaude: PlanoSaude;
}
