/* eslint-disable indent */
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from './AppBaseEntity';

export abstract class Pessoa extends AppBaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text'})
  nome: string;

  @Column({ type: 'text'})
  endereco: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  email: string;
}
