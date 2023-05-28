import mongoose from "mongoose";
import BudgetHistorySchema from "../schemas/BudgetHistorySchema";
import { BudgetHistoryApiResponsne } from "../@types/budgetHistory";

const BudgetHistoryModel = mongoose.model<BudgetHistoryApiResponsne>(
  "BudgetHistory",
  BudgetHistorySchema
);

export default BudgetHistoryModel;
