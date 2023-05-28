import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../keys/keys";
import { queryClient } from "../../main";
import { resetBudgetData } from "../queryfns/budgetData";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";

export default function useMutationResetBudget() {
  return useMutation({
    mutationFn: () => resetBudgetData(),
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error resetting budget"),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      }),
  });
}
