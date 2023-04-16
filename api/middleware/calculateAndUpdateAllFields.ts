import { Request, Response, NextFunction } from "express";
import BudgetDataModel from "../models/BudgetDataModel";
import { BudgetCategory } from "../@types/budgetDataApiResponse";

const recalculateTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const currDocument = await BudgetDataModel.findOne({
      firebaseUserUid: req.firebaseUid,
    });

    currDocument?.categories[BudgetCategory.Needs].forEach((category) => {
      currDocument.current.needs.remaining -= category.amount;
    });
    currDocument?.categories[BudgetCategory.Wants].forEach((category) => {
      currDocument.current.wants.remaining -= category.amount;
    });
    currDocument?.categories[BudgetCategory.Savings].forEach((category) => {
      currDocument.current.savings.remaining -= category.amount;
    });

    await currDocument?.save();

    res.status(200).send("Ok");
  } catch (error) {
    next(error);
  }
};

export default recalculateTotal;
