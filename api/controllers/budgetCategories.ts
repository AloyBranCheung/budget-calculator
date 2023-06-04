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
  const { firebaseUid } = req;
  const category = req.params.category;
  const expenditureId = req.params.expenditureId;

  if (!firebaseUid || !expenditureId) {
    console.error(
      "Invalid firebaseUid or expenditureId at deleteExpenditure controller"
    );
    res.status(400).send("Invalid request");
  }

  try {
    await BudgetDataModel.findOneAndUpdate(
      {
        firebaseUserUid: firebaseUid,
      },
      {
        $pull: {
          [`categories.${category}`]: { _id: expenditureId },
        },
      }
    );
    next();
  } catch (error) {
    console.error(
      "Error finding one and updating in deleteExpenditure controller."
    );
    next(error);
  }
};
