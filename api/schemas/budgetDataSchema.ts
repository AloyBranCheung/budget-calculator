import mongoose from "mongoose";
import { BudgetCategory } from "../@types/BudgetData";
import { type BudgetDataAPIResponse } from "../@types/budgetDataApiResponse";
import CreditOrDebit from "../@types/creditOrDebit";

const CategorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  amount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  creditOrDebit: {
    type: String,
    enum: [CreditOrDebit.Credit, CreditOrDebit.Debit],
  },
  categories: [
    {
      id: mongoose.Schema.Types.ObjectId,
      color: String,
      tagCategory: String,
      backgroundColor: String,
    },
  ],
});

const BudgetSchema = new mongoose.Schema(
  {
    total: { type: Number, default: 0 },
    remaining: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const CurrentTotalsSchema = new mongoose.Schema(
  {
    [BudgetCategory.Budget]: BudgetSchema,
    [BudgetCategory.Needs]: BudgetSchema,
    [BudgetCategory.Wants]: BudgetSchema,
    [BudgetCategory.Savings]: BudgetSchema,
  },
  {
    timestamps: true,
  }
);

const CategoriesSchema = new mongoose.Schema(
  {
    [BudgetCategory.Needs]: [CategorySchema],
    [BudgetCategory.Wants]: [CategorySchema],
    [BudgetCategory.Savings]: [CategorySchema],
  },
  {
    timestamps: true,
  }
);

const BudgetDataSchema = new mongoose.Schema<BudgetDataAPIResponse>(
  {
    firebaseUserUid: { type: String, unique: true },
    email: { type: String, unique: true },
    current: CurrentTotalsSchema,
    categories: CategoriesSchema,
  },
  {
    timestamps: true,
    collection: "budgetDataPerUser",
  }
);

export default BudgetDataSchema;
