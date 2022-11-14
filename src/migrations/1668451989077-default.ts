/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668451989077 implements MigrationInterface {
    name = 'default1668451989077';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medico" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "telefone" character varying, "email" character varying, "crm" character varying NOT NULL, "especialidade_id" integer, CONSTRAINT "PK_ddc7f4354b3a5098b58a28df187" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "especialidade" ("id" SERIAL NOT NULL, "descricao" text NOT NULL, CONSTRAINT "PK_3f671891c0d720a785a77be31d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "medico" ADD CONSTRAINT "FK_a8a80ad0a0cb43949cc33adeffc" FOREIGN KEY ("especialidade_id") REFERENCES "especialidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico" DROP CONSTRAINT "FK_a8a80ad0a0cb43949cc33adeffc"`);
        await queryRunner.query(`DROP TABLE "especialidade"`);
        await queryRunner.query(`DROP TABLE "medico"`);
    }

}
