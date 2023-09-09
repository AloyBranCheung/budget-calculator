import { Schema } from "mongoose";
import BudgetDataSchema from "./budgetDataSchema";
import { type BudgetHistoryApiResponse } from "../@types/budgetHistory";

const BudgetHistorySchema = new Schema<BudgetHistoryApiResponse>(
  {
    firebaseUserUid: {
      type: String,
      unique: true,
    },
    history: [
      {
        dateCreated: Date,
        content: BudgetDataSchema,
      },
    ],
  },
  {
    timestamps: true,
    collection: "budgetHistoryPerUser",
  }
);

export default BudgetHistorySchema;
