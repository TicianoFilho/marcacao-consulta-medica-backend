/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668629795327 implements MigrationInterface {
    name = 'default1668629795327';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_40272768341cf3849787eea5771"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827" FOREIGN KEY ("especialidade_id") REFERENCES "especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_40272768341cf3849787eea5771" FOREIGN KEY ("medico_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_40272768341cf3849787eea5771"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827" FOREIGN KEY ("especialidade_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_40272768341cf3849787eea5771" FOREIGN KEY ("medico_id") REFERENCES "especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
