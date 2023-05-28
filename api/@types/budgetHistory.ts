import { BudgetDataAPIResponse } from "./budgetDataApiResponse";

export interface BudgetHistory {
  dateCreated: Date;
  content: Omit<BudgetDataAPIResponse, "firebaseUserUid">[];
}

export interface BudgetHistoryApiResponse {
  firebaseUserUid: string;
  history: BudgetHistory[];
}
