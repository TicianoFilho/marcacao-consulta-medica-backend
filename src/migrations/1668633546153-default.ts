import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668633546153 implements MigrationInterface {
    name = 'default1668633546153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medico_especialidade" ("especialidade_id" integer NOT NULL, "medico_id" integer NOT NULL, CONSTRAINT "PK_e4eb7a1d596c0e400365f3deeba" PRIMARY KEY ("especialidade_id", "medico_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c1cb5dd5dbfeefb1ac86c70c82" ON "medico_especialidade" ("especialidade_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_40272768341cf3849787eea577" ON "medico_especialidade" ("medico_id") `);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827" FOREIGN KEY ("especialidade_id") REFERENCES "especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" ADD CONSTRAINT "FK_40272768341cf3849787eea5771" FOREIGN KEY ("medico_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_40272768341cf3849787eea5771"`);
        await queryRunner.query(`ALTER TABLE "medico_especialidade" DROP CONSTRAINT "FK_c1cb5dd5dbfeefb1ac86c70c827"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_40272768341cf3849787eea577"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c1cb5dd5dbfeefb1ac86c70c82"`);
        await queryRunner.query(`DROP TABLE "medico_especialidade"`);
    }

}
