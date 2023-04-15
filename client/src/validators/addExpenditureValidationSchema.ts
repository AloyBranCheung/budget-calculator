import { z } from "zod";
import { BudgetCategory } from "../@types/budgetData";

const addExpenditureValidationSchema = z
  .object({
    category: z.enum([
      BudgetCategory.Needs,
      BudgetCategory.Savings,
      BudgetCategory.Wants,
    ]),
    amount: z.number().positive(),
    description: z.string(),
    date: z.date(),
    tags: z.array(
      z
        .object({
          color: z.string(),
          tagCategory: z.string(),
          backgroundColor: z.string(),
        })
        .required()
    ),
  })
  .required();

export default addExpenditureValidationSchema;
