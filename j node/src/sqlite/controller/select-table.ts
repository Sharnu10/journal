import { db } from "../config/db.config";
import { ITask } from "../../model/node-task.module";
import { selectConstraintQuery, selectQuery } from "./queries";
import logger from "../../utils/logger";

interface Row {
  count: number;
}

/**
 * function to get all data from table.
 * @param tableName
 * @returns
 */
export const getAllData = (tableName: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = selectQuery(tableName);

    db.all(query, [], (err, rows: ITask[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// function t get data from table based on id.
export const getDataById = (tableName: string, id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = selectConstraintQuery(tableName, "id =?");

    db.get(query, [id], (err, rows) => {
      if (err) {
        reject(err);
      }
      if (!rows) {
        reject(new Error("Task not found"));
      } else {
        resolve(rows);
      }
    });
  });
};

export const checkDataExistInTable = (tableName: string): Promise<boolean> => {
  const query = `SELECT COUNT(*) AS count FROM ${tableName}`;

  return new Promise((resolve, reject) => {
    db.get<Row>(query, [], (err, rows) => {
      if (err) {
        logger.error(err.message);
        return reject(err);
      }

      if (rows && rows.count > 0) {
        logger.info("Data exists in the table");
        resolve(false);
      } else {
        logger.info("Data does not exist in the table");
        resolve(true);
      }
    });
  });
};
