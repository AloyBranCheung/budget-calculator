import { useState } from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import { BudgetCategory } from "../../@types/budgetData";
import FormInput from "../UI/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
// util/types
import addExpenditureValidationSchema from "../../validators/addExpenditureValidationSchema";
import { z } from "zod";

const defaultValues: z.infer<typeof addExpenditureValidationSchema> = {
  category: BudgetCategory.Needs,
  amount: 0,
  description: "",
  date: new Date(),
  tags: [],
};

export default function AddExpenditure() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addExpenditureValidationSchema),
    defaultValues,
  });

  const handleSubmitForm = (
    data: z.infer<typeof addExpenditureValidationSchema>
  ) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle title="Add Expenditure" bold />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-5"
      >
        <select className="w-min" {...register("category")}>
          <option value="">Select Category</option>
          <option value={BudgetCategory.Needs}>Needs</option>
          <option value={BudgetCategory.Wants}>Wants</option>
          <option value={BudgetCategory.Savings}>Savings</option>
        </select>
        <div className="flex flex-col gap-5">
          <FormInput
            className="w-full"
            control={control}
            name="description"
            inputType="text"
            inputPlaceholder="Description"
            isError={"description" in errors}
            errorMessage={
              errors.description?.message ? errors.description.message : ""
            }
          />
          <FormInput
            label
            labelText="Amount"
            control={control}
            name="amount"
            inputType="number"
            inputPlaceholder="Amount"
            isError={"amount" in errors}
            errorMessage={errors.amount?.message ? errors.amount.message : ""}
          />
          <select className="w-min" {...register("tags")}>
            <option value="">Select Tags</option>
            <option value="addTag">Add Custom Tag</option>
            {
              // TODO: multi-select and addTag then render tag field
            }
          </select>
          <div className="flex gap-5">
            <Button type="button" label="Clear" className="w-min" />
            <Button type="submit" label="Add" className="w-min" />
          </div>
        </div>
      </form>
    </div>
  );
}
