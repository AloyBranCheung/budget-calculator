import { useMutation } from "@tanstack/react-query";
import { updateBudgetData } from "../queryfns/budgetData";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";

export default function useMutationUpdateTotalStartAmount() {
  return useMutation({
    mutationFn: async (amount: number) => {
      await updateBudgetData(amount);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      });
    },
  });
}
