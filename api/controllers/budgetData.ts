import { NextFunction, Request, Response } from "express";
import BudgetDataModel from "../models/BudgetDataModel";

export const getBudgetData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if user's document doesn't exist, create one for them and return an empty one
  try {
    if (req.decodedIdToken && req.decodedIdToken.uid) {
      const budgetData = await BudgetDataModel.findOne({
        firebaseUserUid: req.decodedIdToken.uid,
      });
      if (budgetData) {
        res.send(budgetData);
      } else {
        const newDocument = await new BudgetDataModel({
          firebaseUserUid: req.decodedIdToken.uid,
        }).save();
        res.send(newDocument);
      }
    } else {
      res.status(500).send("Could not find data for user.");
    }
  } catch (error) {
    next(error);
  }
};

export const updateBudgetData = (req: Request, res: Response) => {
  console.log("create route reached");
};
