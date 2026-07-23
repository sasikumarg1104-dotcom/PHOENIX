import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle custom application errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
    });
  }

  // Handle unexpected errors
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};