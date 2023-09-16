import { type NextFunction, type Response } from "express";
// models
import BudgetDataModel from "../models/BudgetDataModel";
// types
import { type AddExpenditureRequest } from "../@types/addExpenditure";
import { type RequestWithDecodedIdToken } from "../middleware/withAuth";

export const updateBudgetCategories = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const addExpenditureBody: AddExpenditureRequest = req.body;
  const { firebaseUid } = req;
  try {
    // check if current budget exists
    const currBudget = await BudgetDataModel.findOne({
      firebaseUserUid: firebaseUid,
    });
    if (!currBudget?.current) {
      throw new Error("Current budget does not exist, cannot update.");
    }

    // update current budget
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
            creditOrDebit: addExpenditureBody.creditOrDebit,
          },
        },
      },
      { new: true }
    );

    if (newModel != null) {
      next();
    } else {
      res.status(500).send("Error updating budget categories");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteExpenditure = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const { firebaseUid } = req;
  const category = req.params.category;
  const expenditureId = req.params.expenditureId;

  if (!(firebaseUid ?? "") || !(expenditureId ?? "")) {
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
