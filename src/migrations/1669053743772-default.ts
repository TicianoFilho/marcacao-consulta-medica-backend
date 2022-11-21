/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669053743772 implements MigrationInterface {
    name = 'default1669053743772';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "nome" character varying NOT NULL, "usuario" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
