import { BudgetDataAPIResponse } from "./budgetDataApiResponse";

export interface BudgetHistoryApiResponsne {
  dateCreated: Date;
  history: BudgetDataAPIResponse[];
}
