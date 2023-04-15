import { Request, Response, NextFunction } from "express";

const recalculateTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("recalculate total middleware");
};

export default recalculateTotal;
