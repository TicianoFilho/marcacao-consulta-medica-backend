/* eslint-disable indent */
import { CreateDateColumn } from 'typeorm';

export abstract class AppBaseEntity {

@CreateDateColumn({ name: 'created_at'})
createdAt: Date;

}
