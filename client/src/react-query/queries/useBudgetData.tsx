import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../keys/keys";

export default function useBudgetData() {
  return useQuery(queryKeys.budget.data);
}
