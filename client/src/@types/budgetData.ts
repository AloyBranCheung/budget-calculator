export interface Tags {
  id: string;
  color: string;
  tagCategory: string;
  backgroundColor: string;
}

export interface CategoryItems {
  _id: string;
  amount: number;
  date: Date;
  description: string;
  categories: Tags[]; // tags
}

export enum BudgetCategory {
  Budget = "budget",
  Needs = "needs",
  Wants = "wants",
  Savings = "savings",
}

export interface Budget {
  total: number;
  remaining: number;
}

export interface CurrentBudgets {
  budget: Budget;
  [BudgetCategory.Needs]: Budget;
  [BudgetCategory.Wants]: Budget;
  [BudgetCategory.Savings]: Budget;
}

export interface BudgetDataAPIResponse {
  firebaseUserUid: string;
  current: CurrentBudgets;
  categories: {
    [BudgetCategory.Needs]: CategoryItems[];
    [BudgetCategory.Wants]: CategoryItems[];
    [BudgetCategory.Savings]: CategoryItems[];
  };
}
