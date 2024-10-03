import { db } from "../config/db.config";

export const insertQuery = (
  tableName: string,
  columnNames: string,
  valuesLength: string
) => {
  return `INSERT INTO ${tableName} (${columnNames}) VALUES (${valuesLength})`;
};

export const createQuery = (tableName: string, columnDefinations: string[]) =>
  `CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinations.join(", ")})`;

export const selectQuery = (tableName: string) => `SELECT * FROM ${tableName}`;
export const selectConstraintQuery = (tableName: string, constraints: string) =>
  `SELECT * FROM ${tableName} WHERE ${constraints}`;

/**
 * function to run create table and insert new record.
 * @param query
 * @param insertValues
 * @param elseMessage
 * @returns
 */
export const runQueryWithValues = (
  query: string,
  insertValues?: any,
  message?: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.run(query, insertValues, (err) => {
      if (err) {
        console.log("runQueryWithValues fun:- ", err.message);
        reject(false);
      } else {
        console.log("message: ", message);
        resolve(true);
      }
    });
  });
};

/**
 *
 * @param query
 * @param message
 * @returns
 */
export const runQuery = (query: string, message?: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.run(query, (err) => {
      if (err) {
        console.log("runQuery fun: ", err.message);
        reject(false);
      } else {
        console.log("message: ", message);
        resolve(true);
      }
    });
  });
};
