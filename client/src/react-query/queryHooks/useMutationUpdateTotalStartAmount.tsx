import { useMutation } from "@tanstack/react-query";
import { updateBudgetData } from "../queryfns/budgetData";

export default function useMutationUpdateTotalStartAmount() {
  return useMutation({
    mutationFn: async (amount: number) => {
      await updateBudgetData(amount);
    },
  });
}
