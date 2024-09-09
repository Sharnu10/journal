import { Request, Response, Router } from "express";
import asynceHandler from "express-async-handler";

import { createTable } from "../sqlite/controller/create-table";
import { seedTasksTable } from "../sqlite/controller/seedData";
import {
  checkDataExistInTable,
  getAllData,
  getDataById,
} from "../sqlite/controller/select-table";

const router = Router();
const tableName = "tasks";

router.get(
  "/",
  asynceHandler((req, res) => {
    const text = "server 1 accesable 1";
    res.json(text);
  })
);

router.get(
  "/seed",
  asynceHandler(async (req: Request, res: Response) => {
    await createTable(
      tableName,
      [
        { name: "task", type: "TEXT", constraints: "NOT NULL" },
        { name: "priority", type: "TEXT" },
        { name: "category", type: "TEXT", constraints: `DEFAULT '2 min'` },
      ],
      { includeId: true, includeCreatedDate: true }
    );

    const exist = await checkDataExistInTable(tableName);

    if (exist) {
      await seedTasksTable();
    }
  })
);

router.get(
  "/tasks",
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
  "/tasks/:id",
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

export { router as taskRouter };
