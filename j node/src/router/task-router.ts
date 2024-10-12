import { Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";

import { createTable } from "../sqlite/controller/create-table";
import { seedTasksTable } from "../sqlite/controller/seedData";
import {
  checkDataExistInTable,
  getAllData,
  getDataById,
} from "../sqlite/controller/select-table";
import { insertQuery, runQueryWithValues } from "../sqlite/controller/queries";
import Api404Error from "../middleware/error/Api404Error";

const router = Router();
const tableName = "tasks";
const columnNames = [
  { name: "task", type: "TEXT", constraints: "NOT NULL" },
  { name: "priority", type: "TEXT" },
  { name: "category", type: "TEXT", constraints: `DEFAULT '2 min'` },
];

router.get(
  "/seed",
  asyncHandler(async (req: Request, res: Response) => {
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

// Route to get all task with asyncHandler.
// while useing this, comment other route path with try-catch
// router.get(
//   "/",
//   asyncHandler(async (req: Request, res: Response) => {
//     const tasks = await getAllData(tableName);
//     res.json({
//       message: "success",
//       data: tasks,
//     });
//   })
// );

// Route to get all task with try-catch.
//  while using this, comment other route path with asyncHandler.
router.get("/", async (req: Request, res: Response, next) => {
  try {
    const tasks = await getAllData(tableName);
    res.json({
      message: "success",
      data: tasks,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get a task by its ID with asyncHandler of express-async-handler
router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const task = await getDataById(tableName, id);

    res.status(200).json({
      message: "success",
      data: task,
    });
  })
);

// Route to get a task by its ID
router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response, next) => {
    try {
      const id = req.params.id;
      const task = await getDataById(tableName, id);

      res.json({
        message: "success",
        data: task,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
      next(err);
    }
  })
);

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const query = insertQuery(
        tableName,
        columnNames.map((name) => name.name).join(", ") + `, createdDate`,
        "?,?,?,?"
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

export { router as taskRouter };
