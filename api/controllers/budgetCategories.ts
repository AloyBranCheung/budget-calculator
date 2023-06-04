import { NextFunction, Request, Response } from "express";
import { AddExpenditureRequest } from "../@types/addExpenditure";
import BudgetDataModel from "../models/BudgetDataModel";

export const updateBudgetCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addExpenditureBody: AddExpenditureRequest = req.body;
  const { firebaseUid } = req;
  try {
    const newModel = await BudgetDataModel.findOneAndUpdate(
      {
        firebaseUserUid: firebaseUid,
      },
      {
        $push: {
          [`categories.${addExpenditureBody.category}`]: {
            amount: addExpenditureBody.amount,
            date: addExpenditureBody.date,
            description: addExpenditureBody.description,
          },
        },
      },
      { new: true }
    );
    if (newModel) {
      next();
    } else {
      res.status(500).send("Error updating budget categories");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteExpenditure = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("route hit");
};
