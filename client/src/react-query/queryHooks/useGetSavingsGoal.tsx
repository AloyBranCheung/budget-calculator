import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../keys/keys";

export default function useGetSavingsGoal() {
  return useQuery(queryKeys.savingsGoal.getSavingsGoal);
}
