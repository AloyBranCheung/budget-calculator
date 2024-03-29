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
          email: req?.decodedIdToken?.email,
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
    if (
      decodedToken == null ||
      !decodedToken?.uid ||
      decodedToken?.uid === null
    ) {
      return res.status(500).send("Could not find user.");
    }

    const updateNewStartingAmount = {
      email: decodedToken?.email,
      current: {
        ...calculateCurrSpendables(totalStartingAmount),
      },
      categories: {
        [BudgetCategory.Needs]: [],
        [BudgetCategory.Wants]: [],
        [BudgetCategory.Savings]: [],
      },
    };

    // update budget data
    const prevBudget = await BudgetDataModel.findOneAndUpdate(
      {
        firebaseUserUid: decodedToken.uid,
      },
      updateNewStartingAmount,
      {
        upsert: true,
      }
    );

    // update budget history
    const historyObj = {
      dateCreated: prevBudget?.current.createdAt,
      content: {
        current: prevBudget?.current,
        categories: prevBudget?.categories,
      },
    };

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
        upsert: true,
      }
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
