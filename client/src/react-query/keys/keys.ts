import { mergeQueryKeys } from "@lukemorales/query-key-factory";
// keys
import budgetDataKeys from "./budgetDataKeys";
import savingsGoalKeys from "./savingsGoalKeys";

export const queryKeys = mergeQueryKeys(budgetDataKeys, savingsGoalKeys);
