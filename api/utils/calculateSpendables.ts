import { CurrentBudget } from "../@types/BudgetData";

const calculateCurrSpendables = (totalAmount: number): CurrentBudget => {
  const budget = {
    total: totalAmount,
    remaining: totalAmount,
  };
  const needs = {
    total: totalAmount * 0.5,
    remaining: totalAmount * 0.5,
  };
  const wants = {
    total: totalAmount * 0.3,
    remaining: totalAmount * 0.3,
  };
  const savings = {
    total: totalAmount * 0.2,
    remaining: totalAmount * 0.2,
  };
  return {
    budget,
    needs,
    wants,
    savings,
  };
};

export default calculateCurrSpendables;
