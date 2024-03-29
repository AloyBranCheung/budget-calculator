import { type Response, type NextFunction } from "express";
// models
import BudgetDataModel from "../models/BudgetDataModel";
// types
import { BudgetCategory } from "../@types/budgetDataApiResponse";
import { type RequestWithDecodedIdToken } from "./withAuth";
import CreditOrDebit from "../@types/creditOrDebit";

const recalculateCurrTotal = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  try {
    const currDocument = await BudgetDataModel.findOne({
      firebaseUserUid: req.firebaseUid,
    });
    if (currDocument != null) {
      // recalculate remainder
      currDocument.current.budget.remaining = currDocument.current.budget.total;
      currDocument.current.needs.remaining = currDocument.current.needs.total;
      currDocument.current.wants.remaining = currDocument.current.wants.total;
      currDocument.current.savings.remaining =
        currDocument.current.savings.total;

      currDocument.categories[BudgetCategory.Needs].forEach((category) => {
        if (
          !category?.creditOrDebit ||
          category.creditOrDebit === CreditOrDebit.Debit
        ) {
          currDocument.current.budget.remaining -= category.amount;
          currDocument.current.needs.remaining -= category.amount;
        } else {
          currDocument.current.budget.remaining += category.amount;
          currDocument.current.needs.remaining += category.amount;
        }
      });

      currDocument.categories[BudgetCategory.Wants].forEach((category) => {
        if (
          !category?.creditOrDebit ||
          category.creditOrDebit === CreditOrDebit.Debit
        ) {
          currDocument.current.budget.remaining -= category.amount;
          currDocument.current.wants.remaining -= category.amount;
        } else {
          currDocument.current.budget.remaining += category.amount;
          currDocument.current.wants.remaining += category.amount;
        }
      });

      currDocument.categories[BudgetCategory.Savings].forEach((category) => {
        if (
          !category?.creditOrDebit ||
          category.creditOrDebit === CreditOrDebit.Debit
        ) {
          currDocument.current.budget.remaining -= category.amount;
          currDocument.current.savings.remaining -= category.amount;
        } else {
          currDocument.current.budget.remaining += category.amount;
          currDocument.current.savings.remaining += category.amount;
        }
      });

      // sort arrays by date (most recent first)
      currDocument.categories[BudgetCategory.Needs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      currDocument.categories[BudgetCategory.Wants].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      currDocument.categories[BudgetCategory.Savings].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      await currDocument.save();

      res.status(200).send("Ok");
    } else {
      res.status(500).send("could not find document.");
    }
  } catch (error) {
    next(error);
  }
};

export default recalculateCurrTotal;
