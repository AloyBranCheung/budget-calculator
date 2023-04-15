export interface CurrentBudget {
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
