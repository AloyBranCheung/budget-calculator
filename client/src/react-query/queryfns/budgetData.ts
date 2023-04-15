import backendServer from "../../utils/backendServer";
import { BudgetDataAPIResponse } from "../../@types/budgetData";

const getBudgetData = async () => {
  const response = await backendServer.get<BudgetDataAPIResponse>("/data");

  return response.data;
};

export default getBudgetData;

export const updateBudgetData = async (totalStartingAmount: number) => {
  const response = await backendServer.put<BudgetDataAPIResponse>("/data", {
    totalStartingAmount,
  });

  return response.data;
};
