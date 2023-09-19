import { BudgetDataAPIResponse, BudgetCategory } from "../@types/budgetData";
import CreditOrDebit from "../@types/creditOrDebit";

const MOCK_BUDGET_DATA_API_RESPONSE: (
  STARTING_AMOUNT?: number,
  REMAINING_AMOUNT?: number
) => BudgetDataAPIResponse = (
  STARTING_AMOUNT = 2000,
  REMAINING_AMOUNT = 2000
) => ({
  firebaseUserUid: "asdf",
  current: {
    budget: {
      total: STARTING_AMOUNT,
      remaining: REMAINING_AMOUNT,
    },
    [BudgetCategory.Needs]: {
      total: STARTING_AMOUNT * 0.5,
      remaining: REMAINING_AMOUNT * 0.5,
    },
    [BudgetCategory.Wants]: {
      total: STARTING_AMOUNT * 0.3,
      remaining: REMAINING_AMOUNT * 0.3,
    },
    [BudgetCategory.Savings]: {
      total: STARTING_AMOUNT * 0.2,
      remaining: REMAINING_AMOUNT * 0.2,
    },
  },
  categories: {
    [BudgetCategory.Needs]: [
      {
        _id: "asdf",
        amount: 20,
        date: new Date(),
        description: "asdfasdf",
        categories: [],
        creditOrDebit: CreditOrDebit.Debit,
      },
    ],
    [BudgetCategory.Wants]: [
      {
        _id: "asdf",
        amount: 20,
        date: new Date(),
        description: "asdfasdf",
        categories: [],
        creditOrDebit: CreditOrDebit.Debit,
      },
    ],
    [BudgetCategory.Savings]: [
      {
        _id: "asdf",
        amount: 20,
        date: new Date(),
        description: "asdfasdf",
        categories: [],
        creditOrDebit: CreditOrDebit.Debit,
      },
    ],
  },
});

export default MOCK_BUDGET_DATA_API_RESPONSE;
