/* eslint-disable indent */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from './AppBaseEntity';
import { Especialidade } from './Especialidade';
import { Medico } from './Medico';
import { Paciente } from './Paciente';
import { Unidade } from './Unidade';

@Entity('agendamento')
export class Agendamento extends AppBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  hora: string;

  @Column({ type: 'date' })
  data: Date;

  @ManyToOne(() => Especialidade, especialidade => especialidade.agendamentos)
  @JoinColumn({ name: 'especialidade_id' })
  especialidade: Especialidade;

  @ManyToOne(() => Unidade, unidade => unidade.agendamentos)
  @JoinColumn({ name: 'unidade_id' })
  unidade: Unidade;

  @ManyToOne(() => Medico, medico => medico.agendamentos)
  @JoinColumn({ name: 'medico_id' })
  medico: Medico;

  @ManyToOne(() => Paciente, paciente => paciente.agendamentos)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

}
