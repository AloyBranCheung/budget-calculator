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

export interface CurrentBudgets {
  budget: {
    total: number;
    remaining: number;
  };
  needs: {
    total: number;
    remaining: number;
  };
  wants: {
    total: number;
    remaining: number;
  };
  savings: {
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
