import mongoose from "mongoose";
import SavingsGoalSchema from "../schemas/savingsGoalSchema";
import { SavingsGoal } from "../@types/savingsGoal";

const SavingsGoalModel = mongoose.model<SavingsGoal>(
  "SavingsGoal",
  SavingsGoalSchema
);

export default SavingsGoalModel;
