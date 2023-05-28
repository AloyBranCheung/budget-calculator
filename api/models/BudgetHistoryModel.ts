import mongoose from "mongoose";
import BudgetHistorySchema from "../schemas/BudgetHistorySchema";
import { BudgetHistoryApiResponse } from "../@types/budgetHistory";

const BudgetHistoryModel = mongoose.model<BudgetHistoryApiResponse>(
  "BudgetHistory",
  BudgetHistorySchema
);

export default BudgetHistoryModel;
