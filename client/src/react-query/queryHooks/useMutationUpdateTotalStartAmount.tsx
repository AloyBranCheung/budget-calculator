import { useMutation } from "@tanstack/react-query";
import { updateBudgetData } from "../queryfns/budgetData";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";

export default function useMutationUpdateTotalStartAmount() {
  return useMutation({
    mutationFn: async (amount: number) => {
      await updateBudgetData(amount);
    },
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error resetting budget"),
    onSuccess: () =>
      toastMessage(ToastMessageType.Success, "Budget updated to new budget."),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      });
    },
  });
}
