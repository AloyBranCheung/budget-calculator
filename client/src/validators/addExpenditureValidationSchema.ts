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
      .default(BudgetCategory.Wants),
    amount: z.number().positive().multipleOf(0.01),
    description: z.string().nonempty({ message: "Can't be empty." }),
    date: z.date().default(new Date()),
    creditOrDebit: z.enum(["credit", "debit"]).default("debit"),
  })
  .required();

export default addExpenditureValidationSchema;
