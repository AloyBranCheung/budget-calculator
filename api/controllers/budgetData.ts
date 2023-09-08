import { type NextFunction, type Response } from "express";
// models
import BudgetDataModel from "../models/BudgetDataModel";
import BudgetHistoryModel from "../models/BudgetHistoryModel";
// utils
import calculateCurrSpendables from "../utils/calculateSpendables";
// types
import { type RequestWithDecodedIdToken } from "../middleware/withAuth";
import {
  BudgetCategory,
  type BudgetDataAPIResponse,
} from "../@types/budgetDataApiResponse";

export const getBudgetData = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  // if user's document doesn't exist, create one for them and return an empty one
  try {
    if (req.decodedIdToken != null && req.decodedIdToken.uid) {
      const budgetData = await BudgetDataModel.findOne<BudgetDataAPIResponse>({
        firebaseUserUid: req.decodedIdToken.uid,
      });
      if (budgetData != null) {
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
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const { totalStartingAmount } = req.body;
  const decodedToken = req.decodedIdToken;
  try {
    if (decodedToken == null || !decodedToken?.uid) {
      return res.status(500).send("Could not find user.");
    }

    // save current paycheck historyr e.g. categories, budget remaining etc.
    const currBudgetHistory = await BudgetHistoryModel.findOne({
      firebaseUserUid: decodedToken.uid,
    });
    const currBudget = await BudgetDataModel.findOne({
      firebaseUserUid: decodedToken.uid,
    });

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

    if (currBudget == null || !currBudget?.current || !currBudget?.categories) {
      await BudgetDataModel.findOneAndUpdate(
        {
          firebaseUserUid: decodedToken.uid,
        },
        updateNewStartingAmount
      );
      next();
      return;
    }

    const historyObj = {
      dateCreated: currBudget?.current.createdAt,
      content: {
        current: currBudget?.current,
        categories: currBudget?.categories,
      },
    };

    if (currBudgetHistory == null) {
      await BudgetHistoryModel.create({
        firebaseUserUid: decodedToken.uid,
        history: [historyObj],
      });
    } else {
      await BudgetHistoryModel.findOneAndUpdate(
        {
          firebaseUserUid: decodedToken.uid,
        },
        {
          $push: {
            history: historyObj,
          },
        },
        {
          new: true,
        }
      );
    }

    // update new paycheck starting amount
    await BudgetDataModel.findOneAndUpdate(
      { firebaseUserUid: decodedToken.uid },
      updateNewStartingAmount
    );
    next();
  } catch (error) {
    next(error);
  }
};

export const resetBudgetData = async (
  req: RequestWithDecodedIdToken,
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
