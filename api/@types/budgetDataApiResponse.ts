import type CreditOrDebit from "./creditOrDebit";

export interface Tags {
  id: string;
  color: string;
  tagCategory: string;
  backgroundColor: string;
}

export interface CategoryItems {
  id: string;
  amount: number;
  date: Date;
  description: string;
  creditOrDebit: CreditOrDebit;
  categories: Tags[]; // tags
}

export enum BudgetCategory {
  Budget = "budget",
  Needs = "needs",
  Wants = "wants",
  Savings = "savings",
}

export interface CurrentBudgets {
  budget: {
    total: number;
    remaining: number;
  };
  [BudgetCategory.Needs]: {
    total: number;
    remaining: number;
  };
  [BudgetCategory.Wants]: {
    total: number;
    remaining: number;
  };
  [BudgetCategory.Savings]: {
    total: number;
    remaining: number;
  };
  createdAt: Date;
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
