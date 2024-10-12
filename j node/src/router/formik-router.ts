import { Request, Response, Router } from "express";
import asynceHandler from "express-async-handler";
import { createTable } from "../sqlite/controller/create-table";
import { insertQuery, runQueryWithValues } from "../sqlite/controller/queries";
import { getAllData } from "../sqlite/controller/select-table";
import logger from "../utils/logger";

const router = Router();
const tableName = "formikForm";
const columnNames = [
  { name: "firstName", type: "TEXT", constraints: "NOT NULL" },
  { name: "lastName", type: "TEXT", constraints: "NOT NULL" },
  { name: "email", type: "TEXT", constraints: "NOT NULL" },
  { name: "contact", type: "INTEGER", constraints: "NOT NULL" },
  { name: "gender", type: "TEXT", constraints: "NOT NULL" },
  { name: "choice", type: "TEXT", constraints: "NOT NULL" },
  { name: "subjects", type: "TEXT", constraints: "NOT NULL" },
  { name: "url", type: "TEXT", constraints: "NOT NULL" },
  { name: "about", type: "TEXT", constraints: "NOT NULL" },
];

router.get(
  "/seed",
  asynceHandler(async (req: Request, res: Response) => {
    try {
      createTable(tableName, columnNames, { includeId: true });
    } catch (err) {
      logger.error(err);
    }
  })
);

router.get(
  "/",
  asynceHandler(async (req, res) => {
    try {
      const tasks = await getAllData(tableName);

      if (tasks) {
        res.status(200).json({
          message: "success",
          data: tasks,
        });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  })
);

router.post(
  "/",
  asynceHandler(async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const query = insertQuery(
        tableName,
        columnNames.map((col) => col.name).join(", "),
        "?,?,?,?,?,?,?,?,?"
      );

      const values = Object.values(data);
      const qureyRes = await runQueryWithValues(
        query,
        values,
        "Insert unsuccessfull."
      );

      if (qureyRes) {
        res.status(200).json("Added new record.");
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  })
);

export { router as formikRouter };
