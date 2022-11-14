/* eslint-disable indent */
import { Entity, OneToMany } from 'typeorm';
import { Agendamento } from './Agendamento';
import { PessoaJuridica } from './PessoaJuridica';

@Entity('unidade')
export class Unidade extends PessoaJuridica {

  @OneToMany(() => Agendamento, agendamento => agendamento.unidade)
  agendamentos: Agendamento[];
}
