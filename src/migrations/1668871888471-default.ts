/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668871888471 implements MigrationInterface {
    name = 'default1668871888471';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "especialidade" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "plano_saude" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "unidade" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "unidade" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "plano_saude" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "especialidade" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "updated_at"`);
    }

}
