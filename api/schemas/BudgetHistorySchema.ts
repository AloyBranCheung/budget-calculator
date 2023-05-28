import { Schema } from "mongoose";
import BudgetDataSchema from "./budgetDataSchema";
import { BudgetHistoryApiResponse } from "../@types/budgetHistory";

const BudgetHistorySchema = new Schema<BudgetHistoryApiResponse>(
  {
    firebaseUserUid: {
      type: String,
      unique: true,
    },
    dateCreated: { type: Date },
    history: BudgetDataSchema,
  },
  {
    timestamps: true,
    collection: "budgetHistoryPerUser",
  }
);

export default BudgetHistorySchema;
