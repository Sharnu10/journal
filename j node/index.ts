import express from "express";
import cors from "cors";

import { taskRouter } from "./src/router/task-router";
import { db } from "./src/sqlite/config/db.config";
import { cardRouter } from "./src/router/card-router";
import { formikRouter } from "./src/router/formik-router";
import {
  errorHandler,
  logError,
  returnError,
} from "./src/middleware/errorHandler";

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

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("server is up");
});

app.use("/api/task", taskRouter);
app.use("/api/card", cardRouter);
app.use("/api/formik", formikRouter);

app.use(errorHandler);
app.use(logError);
app.use(returnError);

// Global error handling for unhandled promise rejections and uncaught exceptions
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Optional: send entire application down. Recommended to restart the server in production.
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception thrown:", error);
  // Optional: send entire application down. Recommended to restart the server in production.
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
