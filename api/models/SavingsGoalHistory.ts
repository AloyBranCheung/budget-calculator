import mongoose from "mongoose";
import SavingsGoalHistorySchema from "../schemas/savingsGoalHistorySchema";
import { type SavingsGoalHistory } from "../@types/savingsGoal";

const SavingsGoalHistoryModel = mongoose.model<SavingsGoalHistory>(
  "SavingsGoalHistory",
  SavingsGoalHistorySchema
);

export default SavingsGoalHistoryModel;
