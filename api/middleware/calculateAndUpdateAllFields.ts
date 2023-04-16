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
    if (currDocument) {
      currDocument.current.budget.remaining = currDocument.current.budget.total;
      currDocument.current.needs.remaining = currDocument.current.needs.total;
      currDocument.current.wants.remaining = currDocument.current.wants.total;
      currDocument.current.savings.remaining =
        currDocument.current.savings.total;

      currDocument?.categories[BudgetCategory.Needs].forEach((category) => {
        currDocument.current.budget.remaining -= category.amount;
        currDocument.current.needs.remaining -= category.amount;
      });
      currDocument?.categories[BudgetCategory.Wants].forEach((category) => {
        currDocument.current.budget.remaining -= category.amount;
        currDocument.current.wants.remaining -= category.amount;
      });
      currDocument?.categories[BudgetCategory.Savings].forEach((category) => {
        currDocument.current.budget.remaining -= category.amount;
        currDocument.current.savings.remaining -= category.amount;
      });

      await currDocument?.save();

      res.status(200).send("Ok");
    } else {
      res.status(500).send("could not find document.");
    }
  } catch (error) {
    next(error);
  }
};

export default recalculateTotal;
