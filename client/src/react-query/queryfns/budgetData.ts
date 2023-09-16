import backendServer from "../../utils/backendServer";
import { BudgetDataAPIResponse } from "../../@types/budgetData";
import { z } from "zod";
import addExpenditureValidationSchema from "../../validators/addExpenditureValidationSchema";

const getBudgetData = async () => {
  const response = await backendServer.get<BudgetDataAPIResponse>("/data");

  return response.data;
};

export default getBudgetData;

export const updateBudgetData = async (totalStartingAmount: number) => {
  const response = await backendServer.put<BudgetDataAPIResponse>("/data", {
    totalStartingAmount,
    creditOrDebit: "credit",
  });

  return response.data;
};

export const updateBudgetCategories = async (
  budgetObj: z.infer<typeof addExpenditureValidationSchema>
) => {
  const response = await backendServer.put<BudgetDataAPIResponse>(
    "/data/categories",
    budgetObj
  );
  return response.data;
};

export const resetBudgetData = async () => {
  const response = await backendServer.delete<BudgetDataAPIResponse>("/data");
  return response.data;
};
