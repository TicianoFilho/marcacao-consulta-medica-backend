import { Entity } from 'typeorm';
import { Agendamento } from './Agendamento';
import { PessoaJuridica } from './PessoaJuridica';

@Entity('unidade')
export class Unidade extends PessoaJuridica {

  agendamentos: Agendamento[];
}
