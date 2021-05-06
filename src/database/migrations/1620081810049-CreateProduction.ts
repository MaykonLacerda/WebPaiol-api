import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduction1620081810049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "productions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "worker_id",
                        type: "uuid",
                    },
                    {
                        name: "amount",
                        type: "integer",
                    },
                    {
                      name: "value",
                      type: "double",
                  },
                    {
                        name: "task",
                        type: "varchar"
                    },
                    {
                        name: "day",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            "productions",
         new TableForeignKey({
             name: "FKProductionWorker",
             referencedTableName: "workers",
             referencedColumnNames: ["id"],
             columnNames: ["worker_id"],
             onDelete: "SET NULL",
             onUpdate: "CASCADE"
         })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('productions', 'FKProductionWorker');
        await queryRunner.dropTable('productions');
    }

}
