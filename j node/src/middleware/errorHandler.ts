import { NextFunction, Request, Response } from "express";
import BaseError from "./error/baseError";
import logger from "../utils/logger";

// Log the error
function logError(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(err);
  next(err); // Pass the error to the next middleware
}

// Return error response to the client
function returnError(err: Error, req: Request, res: Response, next: any) {
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
}

// Catch-all error handler
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.info(`Centerlized Error Handling:  ${err.message}`);

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message || "An unexpected error occurred",
  });
}

function isOperationalError(error: Error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

export { errorHandler, logError, returnError, isOperationalError };
