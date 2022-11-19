/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668867973555 implements MigrationInterface {
    name = 'default1668867973555';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "especialidade_id" integer`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_e07dc39034efde734a05e82c518" FOREIGN KEY ("especialidade_id") REFERENCES "especialidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_e07dc39034efde734a05e82c518"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "especialidade_id"`);
    }

}
