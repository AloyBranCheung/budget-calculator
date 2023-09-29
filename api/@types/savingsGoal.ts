export interface SavingsGoal {
  firebaseUserUid: string;
  nameOfGoal: string;
  descriptionOfGoal: string;
  targetAmount: number;
  currentAmountContributed: number;
}

export interface SavingsGoalHistory {
  firebaseUserUid: string;
  savingsGoalHistory: SavingsGoal[];
}
