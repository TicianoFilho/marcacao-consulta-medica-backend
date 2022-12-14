/* eslint-disable indent */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from './AppBaseEntity';
import { Paciente } from './Paciente';

@Entity('plano_saude')
export class PlanoSaude extends AppBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @OneToMany(() => Paciente, paciente => paciente.planoSaude)
  pacientes: Paciente[];
}
