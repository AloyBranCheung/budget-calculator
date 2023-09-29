import { useMutation } from "@tanstack/react-query";
// types
import { z } from "zod";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";
import { addSavingsGoal } from "../queryfns/savingsGoal";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";

export default function useMutationAddSavingsGoal() {
  return useMutation({
    mutationFn: (data: z.infer<typeof savingsGoalValSchema>) =>
      addSavingsGoal(data),
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error adding/updating goal."),
    onSuccess: () =>
      toastMessage(
        ToastMessageType.Success,
        "Goal added! If previous one existed, history has been saved."
      ),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.savingsGoal.getSavingsGoal.queryKey,
      }),
  });
}
