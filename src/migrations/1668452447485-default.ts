/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668452447485 implements MigrationInterface {
    name = 'default1668452447485';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "cpf" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "cpf" text NOT NULL`);
    }

}
