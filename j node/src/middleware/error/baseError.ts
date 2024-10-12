class BaseError extends Error {
  public statusCode!: number;
  public isOperational!: boolean;

  constructor(
    name: string,
    statusCode: number,
    description: string,
    isOperational: boolean
  ) {
    super(description);

    // Set the prototype explicitly
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export default BaseError;
