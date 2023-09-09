import { createQueryKeys } from "@lukemorales/query-key-factory";
import { addSavingsGoal, getSavingsGoal } from "../queryfns/savingsGoal";

const savingsGoalKeys = createQueryKeys("savingsGoal", {
  getSavingsGoal: {
    queryKey: ["getSavingsGoal"],
    queryFn: getSavingsGoal,
  },
  addSavingsGoal: {
    queryKey: ["addSavingsGoal"],
    queryFn: addSavingsGoal,
  },
  updateSavingsGoal: {
    queryKey: ["updateSavingsGoal"],
  },
});

export default savingsGoalKeys;
