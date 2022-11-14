/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668455716754 implements MigrationInterface {
    name = 'default1668455716754';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "especialidade" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "plano_saude" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "unidade" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "hora" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "data" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "hora"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "unidade" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "plano_saude" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "especialidade" DROP COLUMN "created_at"`);
    }

}
