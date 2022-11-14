/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668444679664 implements MigrationInterface {
    name = 'default1668444679664';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "paciente" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "telefone" character varying, "email" character varying, "ativo" boolean NOT NULL, CONSTRAINT "PK_cbcb7985432e4b49d32c5243867" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "paciente"`);
    }

}
