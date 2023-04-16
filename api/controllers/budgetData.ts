import { NextFunction, Request, Response } from "express";
import BudgetDataModel from "../models/BudgetDataModel";
import calculateCurrSpendables from "../utils/calculateSpendables";

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

export const updateBudgetData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { totalStartingAmount } = req.body;
  const decodedToken = req.decodedIdToken;
  try {
    if (decodedToken && decodedToken.uid) {
      const update = {
        current: {
          ...calculateCurrSpendables(totalStartingAmount),
        },
      };
      await BudgetDataModel.findOneAndUpdate(
        { firebaseUserUid: decodedToken.uid },
        update,
        { new: true }
      );
      next();
    } else {
      res.status(500).send("Could not find data for user.");
    }
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
