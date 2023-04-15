import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  value: Number,
  date: Date,
  description: String,
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
    current: {
      budget: Number,
      needs: Number,
      Wants: Number,
      Savings: Number,
    },
    categories: {
      necessities: [CategorySchema],
      wants: [CategorySchema],
      Savings: [CategorySchema],
    },
  },
  {
    timestamps: true,
  }
);

export default BudgetDataSchema;
