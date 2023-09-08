import { type BudgetDataAPIResponse } from "./budgetDataApiResponse";

export interface BudgetHistory {
  dateCreated: Date
  content: Array<Omit<BudgetDataAPIResponse, "firebaseUserUid">>
}

export interface BudgetHistoryApiResponse {
  firebaseUserUid: string
  history: BudgetHistory[]
}
