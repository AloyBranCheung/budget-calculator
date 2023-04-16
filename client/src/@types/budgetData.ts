export interface Tags {
  id: string;
  color: string;
  tagCategory: string;
  backgroundColor: string;
}

export interface CategoryItems {
  id: string;
  value: number;
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
}

export interface BudgetDataAPIResponse {
  firebaseUserUid: string;
  current: CurrentBudgets;
  categories: {
    necessities: CategoryItems[];
  };
}
