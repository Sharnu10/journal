import { Request, Response, Router } from "express";
import asynceHandler from "express-async-handler";

import {
  checkDataExistInTable,
  getAllData,
} from "../sqlite/controller/select-table";
import { createTable } from "../sqlite/controller/create-table";
import { seedCardTable } from "../sqlite/controller/seedData";
import { ICard } from "../model/node-task.module";

const router = Router();
const tableName = "cards";

router.get(
  "/seed",
  asynceHandler(async (req: Request, res: Response) => {
    createTable(
      tableName,
      [
        { name: "headerText", type: "TEXT" },
        { name: "priority", type: "TEXT" },
        { name: "title", type: "TEXT" },
        { name: "category", type: "TEXT", constraints: "NOT NULL" },
        { name: "description", type: "TEXT" },
      ],
      { includeId: true }
    );

    const exist = await checkDataExistInTable(tableName);

    if (exist) {
      let columnNames = "headerText, priority, title, category, description";
      let valuesLength = "?, ?, ?, ?, ?";
      await seedCardTable(tableName, columnNames, valuesLength);
    }
  })
);

router.get(
  "/",
  asynceHandler(async (req: Request, res: Response) => {
    try {
      const cards: ICard[] = await getAllData(tableName);

      if (cards) {
        cards.forEach((row: any) => (row.category = JSON.parse(row.category)));
      }
      res.json({
        message: "success",
        data: cards,
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  })
);

export { router as cardRouter };
