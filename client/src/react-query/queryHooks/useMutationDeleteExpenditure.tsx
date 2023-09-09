import { useMutation } from "@tanstack/react-query";
import deleteExpenditure from "../queryfns/expenditure";
import toastMessage, { ToastMessageType } from "../../utils/toastMessages";
import { queryClient } from "../../main";
import { queryKeys } from "../keys/keys";

export default function useMutationDeleteExpenditure() {
  return useMutation({
    mutationFn: ({ id, category }: { id: string; category: string }) =>
      deleteExpenditure(id, category),
    onError: () =>
      toastMessage(ToastMessageType.Error, "Error deleting expenditure."),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.budget.data.queryKey,
      }),
  });
}
