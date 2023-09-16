import type CreditOrDebit from "./creditOrDebit";

export interface AddExpenditureRequest {
  category: string;
  amount: number;
  description: string;
  date: Date;
  creditOrDebit: CreditOrDebit;
}
