import express from "express";
import cors from "cors";

import { taskRouter } from "./src/router/task-router";
import { db } from "./src/sqlite/config/db.config";
import { cardRoutes } from "./src/router/card-router";

const app = express();
const port = 3003;

db;

const allowedOrigins = ["http://localhost:3000", "http://localhost:4200"];

app.use(
  cors({
    // origin: "http://localhost:3000",

    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS!"));
      }
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is up");
});

app.use("/api/task", taskRouter);
app.use("/api/card", cardRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
