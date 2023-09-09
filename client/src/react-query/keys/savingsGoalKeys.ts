import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getSavingsGoal } from "../queryfns/savingsGoal";

const savingsGoalKeys = createQueryKeys("savingsGoal", {
  getSavingsGoal: {
    queryKey: ["getSavingsGoal"],
    queryFn: getSavingsGoal,
  },
});

export default savingsGoalKeys;
