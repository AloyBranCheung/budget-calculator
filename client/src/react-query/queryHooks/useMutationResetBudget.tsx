import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../keys/keys";
import { queryClient } from "../../main";
import { resetBudgetData } from "../queryfns/budgetData";

export default function useMutationResetBudget() {
  return useMutation({
    mutationFn: () => resetBudgetData(),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      }),
  });
}
