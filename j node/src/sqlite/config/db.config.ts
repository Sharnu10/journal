import sql from "sqlite3";
import logger from "../../utils/logger";

const sqlite3 = sql.verbose();

// Connect to a database (in this example, a new file-based database)
export const db = new sqlite3.Database("journal-db.db", (err) => {
  if (err) {
    logger.info("db connect error:- ", err);
  } else {
    logger.info("db connected");
  }
});

// Close the database connection
export const closeDb = () =>
  db.close((err) => {
    if (err) {
      return logger.error(err.message);
    }
    logger.info("Database connection is closed.");
  });
