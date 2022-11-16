/* eslint-disable indent */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { AppBaseEntity } from './AppBaseEntity';
import { Medico } from './Medico';

@Entity('especialidade')
export class Especialidade extends AppBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @ManyToMany(() => Medico, medico => medico.especialidades)
  @JoinTable({
    name: 'medico_especialidade',
    joinColumn: {
      name: 'medico_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'especialidade_id',
      referencedColumnName: 'id',
    },
  })
  medicos: Medico[];
}
