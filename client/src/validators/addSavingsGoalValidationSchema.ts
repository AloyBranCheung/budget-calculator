import { z } from "zod";
import CreditOrDebit from "../@types/creditOrDebit";

export const savingsGoalValSchema = z.object({
  nameOfGoal: z
    .string()
    .min(1, { message: "Please enter a name for your goal" }),
  descriptionOfGoal: z
    .string()
    .min(1, { message: "Please enter a description for your goal" }),
  targetAmount: z
    .number()
    .positive({ message: "Please enter a positive number" })
    .min(1, { message: "At least 1 dollar." }),
  creditOrDebit: z.enum([CreditOrDebit.Credit, CreditOrDebit.Debit]),
});

export const contributeValSchema = z.object({
  contributingAmount: z
    .number()
    .positive({ message: "Please enter a positive number" })
    .min(1, { message: "At least 1 dollar." }),
  creditOrDebit: z.enum([CreditOrDebit.Credit, CreditOrDebit.Debit]),
});
