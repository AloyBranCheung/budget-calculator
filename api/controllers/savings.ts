import { NextFunction, Request, Response } from "express";
// models
import SavingsGoalModel from "../models/SavingsGoalModel";

const addSavingsGoal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("addSavingsGoal route hit");
  res.send("Hello world");
};

export default addSavingsGoal;
