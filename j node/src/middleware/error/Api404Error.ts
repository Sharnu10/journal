import BaseError from "./baseError";
import HttpStatusCodes from "./httpStatusCodes";

class Api404Error extends BaseError {
  constructor(
    name: string,
    statusCode = HttpStatusCodes.NOT_FOUND,
    description: string = "NOT Found",
    isOperational: boolean = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}

export default Api404Error;
