/* eslint-disable indent */
import { AppBaseEntity } from './AppBaseEntity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Usuario extends AppBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

}
