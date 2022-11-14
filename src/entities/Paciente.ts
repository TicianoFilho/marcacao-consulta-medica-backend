/* eslint-disable indent */
import { Column, Entity } from 'typeorm';
import { Pessoa } from './Pessoa';

@Entity('paciente')
export class Paciente extends Pessoa {

  constructor() {
    super();
  }

  @Column()
  ativo: boolean;
}
