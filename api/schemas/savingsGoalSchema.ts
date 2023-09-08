import mongoose from "mongoose";
// types
import { SavingsGoal } from "../@types/savingsGoal";

const SavingsGoalSchema = new mongoose.Schema<SavingsGoal>(
  {
    firebaseUserUid: { type: String, unique: true, required: true },
    currentAmountContributed: { type: Number, default: 0 },
    descriptionOfGoal: { type: String, default: "" },
    nameOfGoal: { type: String, required: true },
    targetAmount: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: "userSavingsGoal",
  }
);

export default SavingsGoalSchema;
