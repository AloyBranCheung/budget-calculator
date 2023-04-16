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
    console.log(firebaseUid, addExpenditureBody);
    const test = await BudgetDataModel.findOneAndUpdate(
      { firebaseUserUid: firebaseUid },
      {
        categories: {
          $push: {
            [addExpenditureBody.category]: {
              amount: addExpenditureBody.amount,
              date: addExpenditureBody.date,
              description: addExpenditureBody.description,
            },
          },
        },
      },
      { new: true }
    );
    if (test) {
      console.log(test);
      // TODO: next() to update calculations middleware
      res.status(200).send("OK");
    } else {
      res.status(500).send("Could not find data for user.");
    }
  } catch (error) {
    next(error);
  }
};
