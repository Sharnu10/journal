import { ColumnDefination, TableOptions } from "../model/table";
import { createQuery, runQuery } from "./queries";

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

  runQuery(query, "Table created successfully.");
};

export const getColumnDefination = (columns: ColumnDefination[]) => {
  return columns.map((col) => {
    return `${col.name} ${col.type} ${col.constraints ? col.constraints : ""}`;
  });
};
