import { db } from "../config/db.config";
import { ColumnDefination, TableOptions } from "../model/table";
import { createQuery } from "./queries";

export const createTable = (
    tableName: string,
    columns: ColumnDefination[],
    options: TableOptions = { includeId: true, includeCreatedDate: true }
    ) => {
        let columnDefinations: string[] = columns.map(col => {
            return `${col.name} ${col.type} ${col.constraints ? col.constraints : ''}`
        });

        if(options.includeId) {
            columnDefinations = ['id INTEGER PRIMARY KEY AUTOINCREMENT', ...columnDefinations];
        }

        if(options.includeCreatedDate) {
            columnDefinations.push('createdDate DATETIME DEFAULT CURRENT_TIMESTAMP');
        }

    const query = createQuery(tableName, columnDefinations);

      runQuery(query);
};

const runQuery = (query: string) => {
    db.run(query, (err) => {
        if (err) {
            console.log('runQuery fun:- ',err.message);
        } else {
            console.log('Table created successfully.');
        }
    });
}
