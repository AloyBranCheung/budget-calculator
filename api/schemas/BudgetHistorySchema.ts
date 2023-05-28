import { Schema } from "mongoose";
import BudgetDataSchema from "./budgetDataSchema";
import { BudgetHistoryApiResponsne } from "../@types/budgetHistory";

const BudgetHistorySchema = new Schema<BudgetHistoryApiResponsne>(
  {
    dateCreated: { type: Date },
    history: BudgetDataSchema,
  },
  {
    timestamps: true,
    collection: "budgetHistoryPerUser",
  }
);

export default BudgetHistorySchema;
