import { Request, Response, Router } from "express";
import asynceHandler from "express-async-handler";

import { createTable, runQuery } from "../sqlite/controller/create-table";
import { seedTasksTable } from "../sqlite/controller/seedData";
import {
  checkDataExistInTable,
  getAllData,
  getDataById,
} from "../sqlite/controller/select-table";
import { insertQuery } from "../sqlite/controller/queries";

const router = Router();
const tableName = "tasks";
const columnNames = [
  { name: "task", type: "TEXT", constraints: "NOT NULL" },
  { name: "priority", type: "TEXT" },
  { name: "category", type: "TEXT", constraints: `DEFAULT '2 min'` },
];

router.get(
  "/seed",
  asynceHandler(async (req: Request, res: Response) => {
    await createTable(tableName, columnNames, {
      includeId: true,
      includeCreatedDate: true,
    });

    const exist = await checkDataExistInTable(tableName);

    if (exist) {
      await seedTasksTable();
    }
  })
);

router.get(
  "/",
  asynceHandler(async (req: Request, res: Response) => {
    try {
      const tasks = await getAllData(tableName);
      res.json({
        message: "success",
        data: tasks,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  })
);

router.get(
  "/:id",
  asynceHandler(async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const task = await getDataById(tableName, id);
      res.json({
        message: "success",
        data: task,
      });
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
        columnNames.map((name) => name.name).join(", ") + `, createdDate`,
        "?,?,?,?"
      );
      const values = Object.values(data);
      const qureyRes = await runQuery(query, values, "Insert unsuccessfull.");

      if (qureyRes) {
        res.status(200).json("Added new record.");
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  })
);

export { router as taskRouter };
