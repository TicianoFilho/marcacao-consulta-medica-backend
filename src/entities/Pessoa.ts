/* eslint-disable indent */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Pessoa {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text'})
  nome: string;

  @Column({ type: 'text'})
  cpf: string;

  @Column({ type: 'text'})
  endereco: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  email: string;
}
