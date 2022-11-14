/* eslint-disable indent */
import { Column } from 'typeorm';
import { Pessoa } from './Pessoa';

export abstract class PessoaFisica extends Pessoa {

  constructor() {
    super();
  }

  @Column()
  cpf: string;

}
