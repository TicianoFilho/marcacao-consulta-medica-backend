/* eslint-disable indent */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Agendamento } from './Agendamento';
import { PessoaFisica } from './PessoaFisica';
import { PlanoSaude } from './PlanoSaude';

@Entity('paciente')
export class Paciente extends PessoaFisica {

  constructor() {
    super();
  }

  @Column({ default: false })
  ativo: boolean;

  @ManyToOne(() => PlanoSaude, planoSaude => planoSaude.pacientes)
  @JoinColumn({ name: 'plano_saude_id' })
  planoSaude: PlanoSaude;

  @OneToMany(() => Agendamento, agendamento => agendamento.paciente)
  agendamentos: Agendamento[];
}
