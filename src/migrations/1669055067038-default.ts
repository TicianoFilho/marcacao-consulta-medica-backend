import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669055067038 implements MigrationInterface {
    name = 'default1669055067038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "usuario" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "email" TO "usuario"`);
    }

}
