/* eslint-disable indent */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Agendamento } from './Agendamento';
import { Especialidade } from './Especialidade';
import { PessoaFisica } from './PessoaFisica';

@Entity('medico')
export class Medico extends PessoaFisica {

  constructor() {
    super();
  }

  @Column()
  crm: string;

  @ManyToOne(() => Especialidade, especialidade => especialidade.medicos)
  @JoinColumn({ name: 'especialidade_id' })
  especialidade: Especialidade;

  @OneToMany(() => Agendamento, Agendamento => Agendamento.medico)
  agendamentos: Agendamento[];
}
