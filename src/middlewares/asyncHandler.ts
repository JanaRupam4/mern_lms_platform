import { NextFunction, Request, Response } from "express";

const asyncHandler = (anyFn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(anyFn(req, res, next)).catch((err) => next(err));
  };
};
export default asyncHandler;
