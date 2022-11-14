/* eslint-disable indent */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from './AppBaseEntity';
import { Medico } from './Medico';

@Entity('especialidade')
export class Especialidade extends AppBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @OneToMany(() => Medico, medico => medico.especialidade)
  medicos: Medico[];
}
