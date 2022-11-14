/* eslint-disable indent */
import { Column } from 'typeorm';
import { Pessoa } from './Pessoa';

export abstract class PessoaJuridica extends Pessoa {

  constructor() {
    super();
  }

  @Column()
  cnpj: string;

}
