import React from "react";
import { updateBudgetCategories } from "../queryfns/budgetData";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import addExpenditureValidationSchema from "../../validators/addExpenditureValidationSchema";

export default function useMutationUpdateBudgetCategories() {
  return useMutation({
    mutationFn: (budgetObj: z.infer<typeof addExpenditureValidationSchema>) =>
      updateBudgetCategories(budgetObj),
  });
}
