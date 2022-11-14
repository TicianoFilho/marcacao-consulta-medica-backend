/* eslint-disable indent */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from './Paciente';

@Entity('plano_saude')
export class PlanoSaude {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @OneToMany(() => Paciente, paciente => paciente.planoSaude)
  paciente: Paciente;
}
