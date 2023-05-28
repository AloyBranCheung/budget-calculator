import { BudgetDataAPIResponse } from "./budgetDataApiResponse";

export interface BudgetHistoryApiResponse {
  firebaseUserUid: string;
  dateCreated: Date;
  history: BudgetDataAPIResponse[];
}
