import mongoose from "mongoose";
// types
import SavingsGoalSchema from "./savingsGoalSchema";
import { type SavingsGoalHistory } from "../@types/savingsGoal";

const SavingsGoalHistorySchema = new mongoose.Schema<SavingsGoalHistory>(
  {
    firebaseUserUid: { type: String, unique: true, required: true },
    savingsGoalHistory: [{ type: SavingsGoalSchema, default: [] }],
  },
  {
    timestamps: true,
    collection: "userSavingsGoalHistory",
  }
);

export default SavingsGoalHistorySchema;
