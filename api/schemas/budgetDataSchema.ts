import mongoose from "mongoose";
import { BudgetCategory } from "../@types/BudgetData";

const CategorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  amount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  categories: [
    {
      id: mongoose.Schema.Types.ObjectId,
      color: String,
      tagCategory: String,
      backgroundColor: String,
    },
  ],
});

const BudgetDataSchema = new mongoose.Schema(
  {
    firebaseUserUid: { type: String, unique: true },
    current: {
      [BudgetCategory.Budget]: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      [BudgetCategory.Needs]: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      [BudgetCategory.Wants]: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      [BudgetCategory.Savings]: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
    },
    categories: {
      [BudgetCategory.Needs]: [CategorySchema],
      [BudgetCategory.Wants]: [CategorySchema],
      [BudgetCategory.Savings]: [CategorySchema],
    },
  },
  {
    timestamps: true,
    collection: "budgetDataPerUser",
  }
);

export default BudgetDataSchema;
