/* eslint-disable indent */
import { Column, Entity, OneToMany, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => Especialidade, especialidade => especialidade.medicos)
  especialidades: Especialidade[];

  @OneToMany(() => Agendamento, Agendamento => Agendamento.medico)
  agendamentos: Agendamento[];
}
