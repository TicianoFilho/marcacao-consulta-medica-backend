/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668454162005 implements MigrationInterface {
    name = 'default1668454162005';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_6457e818ae8ca1121eda19459b1"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "medicoId"`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "medico_id" integer`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "paciente_id" integer`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_7bdc228a43c2fc5e178883a439b" FOREIGN KEY ("medico_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_b0baf933c9be5fc649f2a9c6073" FOREIGN KEY ("paciente_id") REFERENCES "paciente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_b0baf933c9be5fc649f2a9c6073"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP CONSTRAINT "FK_7bdc228a43c2fc5e178883a439b"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "paciente_id"`);
        await queryRunner.query(`ALTER TABLE "agendamento" DROP COLUMN "medico_id"`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD "medicoId" integer`);
        await queryRunner.query(`ALTER TABLE "agendamento" ADD CONSTRAINT "FK_6457e818ae8ca1121eda19459b1" FOREIGN KEY ("medicoId") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
