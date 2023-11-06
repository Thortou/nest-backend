import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1698130897617 implements MigrationInterface {
    name = 'NewMigration1698130897617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "received" ("id" SERIAL NOT NULL, "product_id" integer NOT NULL, "description" text NOT NULL, "qty" integer NOT NULL, "price" numeric(10,2) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_b04497d4d463fd56fc4f21535d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "description" text NOT NULL, "product_id" integer NOT NULL, "qty" integer NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "category_id" integer NOT NULL, "product_code" character varying(25) NOT NULL, "name" character varying(100) NOT NULL, "qty" integer NOT NULL, "price" numeric(10,2) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "UQ_70b3f77ca8de13149b7f08d725c" UNIQUE ("product_code"), CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "category_code" character varying(25), "name" character varying(50) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "UQ_b86357ea34c7b4e7338bfe536dd" UNIQUE ("category_code"), CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "provinces" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "prov_name_eng" character varying(100) NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "deleteAt" TIMESTAMP, CONSTRAINT "PK_2e4260eedbcad036ec53222e0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "received" ADD CONSTRAINT "FK_5a41c4e3d77053cda994aedb493" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_ac832121b6c331b084ecc4121fd" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_9a5f6868c96e0069e699f33e124"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_ac832121b6c331b084ecc4121fd"`);
        await queryRunner.query(`ALTER TABLE "received" DROP CONSTRAINT "FK_5a41c4e3d77053cda994aedb493"`);
        await queryRunner.query(`DROP TABLE "provinces"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "received"`);
    }

}
