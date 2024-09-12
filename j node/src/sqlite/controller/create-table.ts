import { db } from "../config/db.config";
import { ColumnDefination, TableOptions } from "../model/table";
import { createQuery } from "./queries";

export const createTable = (
  tableName: string,
  columns: ColumnDefination[],
  options: TableOptions = { includeId: true, includeCreatedDate: true }
) => {
  let columnDefinations: string[] = getColumnDefination(columns);

  if (options.includeId) {
    columnDefinations = [
      "id INTEGER PRIMARY KEY AUTOINCREMENT",
      ...columnDefinations,
    ];
  }

  if (options.includeCreatedDate) {
    columnDefinations.push("createdDate DATETIME DEFAULT CURRENT_TIMESTAMP");
  }

  const query = createQuery(tableName, columnDefinations);

  runQuery(query, null, "Table created successfully.");
};

/**
 * function to run create table and insert new record.
 * @param query
 * @param insertValues
 * @param elseMessage
 * @returns
 */
export const runQuery = (
  query: string,
  insertValues?: any | null,
  elseMessage?: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.run(query, insertValues, (err) => {
      if (err) {
        console.log("runQuery fun:- ", err.message);
        reject(false);
      } else {
        console.log("elseMessage: ", elseMessage);
        resolve(true);
      }
    });
  });
};

export const getColumnDefination = (columns: ColumnDefination[]) => {
  return columns.map((col) => {
    return `${col.name} ${col.type} ${col.constraints ? col.constraints : ""}`;
  });
};
