import { useMutation } from "@tanstack/react-query";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";
import { contributeValSchema } from "../../validators/addSavingsGoalValidationSchema";
import { contributeToGoal } from "../queryfns/savingsGoal";
import { z } from "zod";

export default function useMutationContributeAmount() {
  return useMutation({
    mutationFn: (data: z.infer<typeof contributeValSchema>) =>
      contributeToGoal(data),
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error contributing amount."),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.savingsGoal.getSavingsGoal.queryKey,
      }),
  });
}
