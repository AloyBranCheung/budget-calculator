import { Request, Response, NextFunction } from "express";

const recalculateTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("recalculate total middleware");
  res.status(200).send("Ok");
};

export default recalculateTotal;
