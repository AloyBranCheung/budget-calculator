import { NextFunction, Request, Response } from "express";
import BudgetDataModel from "../models/BudgetDataModel";
import BudgetHistoryModel from "../models/BudgetHistoryModel";
import calculateCurrSpendables from "../utils/calculateSpendables";
import {
  BudgetCategory,
  BudgetDataAPIResponse,
} from "../@types/budgetDataApiResponse";

export const getBudgetData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if user's document doesn't exist, create one for them and return an empty one
  try {
    if (req.decodedIdToken && req.decodedIdToken.uid) {
      const budgetData = await BudgetDataModel.findOne<BudgetDataAPIResponse>({
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

export const updateBudgetData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { totalStartingAmount } = req.body;
  const decodedToken = req.decodedIdToken;
  try {
    if (!decodedToken || !decodedToken?.uid)
      return res.status(500).send("Could not find data for user.");

    // TODO: save current data to history
    // save current paycheck historyr e.g. categories, budget remaining etc.
    const currBudgetHistory = await BudgetHistoryModel.findOne({
      firebaseUserUid: decodedToken.uid,
    });
    const currBudget = await BudgetDataModel.findOne({
      firebaseUserUid: decodedToken.uid,
    });

    if (!currBudget || !currBudget?.current || !currBudget?.categories)
      res.status(500).send("Could not find current budget data for user.");

    if (!currBudgetHistory) {
      // TODO: create a document
      await BudgetHistoryModel.create({
        firebaseUserUid: decodedToken.uid,
        history: [
          {
            dateCreated: currBudget?.current.createdAt,
            content: {
              current: currBudget?.current,
              categories: currBudget?.categories,
            },
          },
        ],
      });
    } else {
      // TODO: update a document
      console.log("update the document); ");
    }

    // update new paycheck starting amount
    const updateNewStartingAmount = {
      current: {
        ...calculateCurrSpendables(totalStartingAmount),
      },
      categories: {
        [BudgetCategory.Needs]: [],
        [BudgetCategory.Wants]: [],
        [BudgetCategory.Savings]: [],
      },
    };
    await BudgetDataModel.findOneAndUpdate(
      { firebaseUserUid: decodedToken.uid },
      updateNewStartingAmount,
      { new: true }
    );
    next();
  } catch (error) {
    next(error);
  }
};

export const resetBudgetData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BudgetDataModel.findOneAndDelete({
      firebaseUserUid: req.firebaseUid,
    });
    res.status(200).send("Ok");
  } catch (error) {
    next(error);
  }
};
