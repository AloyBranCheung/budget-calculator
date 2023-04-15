import { NextFunction, Request, Response } from "express";

export const updateBudgetCategories = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("update categories route hit");
  console.log("req.body: ", req.body);
};
