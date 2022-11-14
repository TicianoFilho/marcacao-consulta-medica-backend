/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668450371360 implements MigrationInterface {
    name = 'default1668450371360';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plano_saude" ("id" SERIAL NOT NULL, "descricao" text NOT NULL, CONSTRAINT "PK_5e08f2e6119a56ef924dfefbf4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD "plano_saude_id" integer`);
        await queryRunner.query(`ALTER TABLE "paciente" ADD CONSTRAINT "FK_63a15d187b13db919d37a0ddcd7" FOREIGN KEY ("plano_saude_id") REFERENCES "plano_saude"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paciente" DROP CONSTRAINT "FK_63a15d187b13db919d37a0ddcd7"`);
        await queryRunner.query(`ALTER TABLE "paciente" DROP COLUMN "plano_saude_id"`);
        await queryRunner.query(`DROP TABLE "plano_saude"`);
    }

}
