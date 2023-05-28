import React from "react";
import { updateBudgetCategories } from "../queryfns/budgetData";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import addExpenditureValidationSchema from "../../validators/addExpenditureValidationSchema";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";

export default function useMutationUpdateBudgetCategories() {
  return useMutation({
    mutationFn: (budgetObj: z.infer<typeof addExpenditureValidationSchema>) =>
      updateBudgetCategories(budgetObj),
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error resetting budget"),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      }),
  });
}
