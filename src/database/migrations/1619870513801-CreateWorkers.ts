import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateWorkers1619870513801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable {
            new Table({
                name: "workers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "phone",
                        type: "varchar"
                    },
                    {
                        name: "office",
                        type: "varchar"
                    }

                ]
            })
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
