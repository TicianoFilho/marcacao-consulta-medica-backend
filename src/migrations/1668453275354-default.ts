/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668453275354 implements MigrationInterface {
    name = 'default1668453275354';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "unidade" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "endereco" text NOT NULL, "telefone" character varying, "email" character varying, "cnpj" character varying NOT NULL, CONSTRAINT "PK_c3cde37dfa9ccefbffc4f69ff24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agendamento" ("id" SERIAL NOT NULL, "unidade_id" integer, "medicoId" integer, CONSTRAINT "PK_a102b15cfec9ce6d8ac6193345f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_a0544536ad753c58d443f026640" FOREIGN KEY ("unidade_id") REFERENCES "unidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_6457e818ae8ca1121eda19459b1" FOREIGN KEY ("medicoId") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_6457e818ae8ca1121eda19459b1"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_a0544536ad753c58d443f026640"`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "agendamento"`);
        await queryRunner.query(`DROP TABLE "unidade"`);
    }

}
