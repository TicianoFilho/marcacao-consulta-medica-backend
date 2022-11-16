/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668622864398 implements MigrationInterface {
    name = 'default1668622864398';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico" DROP CONSTRAINT "FK_a8a80ad0a0cb43949cc33adeffc"`);
        await queryRunner.query(`CREATE TABLE "medico_especialidade" ("medico_id" integer NOT NULL, "especialidade_id" integer NOT NULL, CONSTRAINT "PK_e4eb7a1d596c0e400365f3deeba" PRIMARY KEY ("medico_id", "especialidade_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_40272768341cf3849787eea577" ON "medico_especialidade" ("medico_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c1cb5dd5dbfeefb1ac86c70c82" ON "medico_especialidade" ("especialidade_id") `);
        await queryRunner.query(`ALTER TABLE "medico" DROP COLUMN "especialidade_id"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_40272768341cf3849787eea5771" FOREIGN KEY ("medico_id") REFERENCES "especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827" FOREIGN KEY ("especialidade_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_40272768341cf3849787eea5771"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD "especialidade_id" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c1cb5dd5dbfeefb1ac86c70c82"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_40272768341cf3849787eea577"`);
        await queryRunner.query(`DROP TABLE "medico_especialidade"`);
        await queryRunner.query(`ALTER TABLE "medico" ADD CONSTRAINT "FK_a8a80ad0a0cb43949cc33adeffc" FOREIGN KEY ("especialidade_id") REFERENCES "especialidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
