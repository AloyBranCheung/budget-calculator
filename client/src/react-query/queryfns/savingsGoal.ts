import { z } from "zod";
import backendServer from "../../utils/backendServer";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";

export const getSavingsGoal = async () => {
  const response = await backendServer.get("/savings-goal");
  return response.data;
};

export const addSavingsGoal = async (
  data: z.infer<typeof savingsGoalValSchema>
) => {
  await backendServer.post("/savings-goal", data);
};
