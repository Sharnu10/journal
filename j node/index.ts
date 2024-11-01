import cors from "cors";
import dotenv from 'dotenv';
import express from "express";

import { cardRouter } from "./src/router/card-router";
import { db } from "./src/sqlite/config/db.config";
import { errorHandler,  logError,  returnError,} from "./src/middleware/errorHandler";
import { formikRouter } from "./src/router/formik-router";
import { taskRouter } from "./src/router/task-router";
import { s3, dynamoDb, lambda } from './aws-services';
import logger from "./src/utils/logger";

const app = express();
const port = 3003;
dotenv.config();

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
  logger.info("Server is up and running"); // Log server status
});

app.use("/api/task", taskRouter);
app.use("/api/card", cardRouter);
app.use("/api/formik", formikRouter);

app.use(errorHandler);
app.use(logError);
app.use(returnError);

// Global error handling for unhandled promise rejections and uncaught exceptions
process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Optional: send entire application down. Recommended to restart the server in production.
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception thrown:", error);
  // Optional: send entire application down. Recommended to restart the server in production.
  process.exit(1);
});


s3.listBuckets((err, data) => {
  if(err) { logger.error("error: ", err);} else { logger.info("Bucket list: ", data.Buckets);}
});

app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
