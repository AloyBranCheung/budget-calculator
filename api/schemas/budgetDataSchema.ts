import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  value: { type: Number, default: 0 },
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
      budget: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      needs: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      wants: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
      savings: {
        total: { type: Number, default: 0 },
        remaining: { type: Number, default: 0 },
      },
    },
    categories: {
      necessities: [CategorySchema],
      wants: [CategorySchema],
      Savings: [CategorySchema],
    },
  },
  {
    timestamps: true,
    collection: "budgetDataPerUser",
  }
);

export default BudgetDataSchema;
