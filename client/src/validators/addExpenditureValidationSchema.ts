import { z } from "zod";
import { BudgetCategory } from "../@types/budgetData";

const addExpenditureValidationSchema = z
  .object({
    category: z
      .enum([
        BudgetCategory.Needs,
        BudgetCategory.Savings,
        BudgetCategory.Wants,
        "",
      ])
      .default(""),
    amount: z.number().positive().multipleOf(0.01),
    description: z.string(),
    date: z.date(),
  })
  .required();

export default addExpenditureValidationSchema;
