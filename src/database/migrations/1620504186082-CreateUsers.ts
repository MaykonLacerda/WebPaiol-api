import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1620504186082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "name",
              type: "string",
              isUnique: true
            },
            {
              name: "phone",
              type: "string"
            },
            {
              name: "email",
              type: "string"
            },
            {
              name: "password",
              type: "string"
            },
            {
              name: "is_owner",
              type: "boolean"
            },
            {
              name: "description",
              type: "string"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
