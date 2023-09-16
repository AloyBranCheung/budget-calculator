import SectionTitle from "../UI/typography/SectionTitle";
import { BudgetCategory } from "../../@types/budgetData";
import FormInput from "../UI/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import Button from "../UI/Button";
import addExpenditureValidationSchema from "../../validators/addExpenditureValidationSchema";
import { z } from "zod";
import useMutationUpdateBudgetCategories from "../../react-query/queryHooks/useMutationUpdateBudgetCategories";

const defaultValues: z.infer<typeof addExpenditureValidationSchema> = {
  category: "",
  amount: 0,
  description: "",
  date: new Date(),
  creditOrDebit: "debit",
};

export default function AddExpenditure() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addExpenditureValidationSchema),
    defaultValues,
  });
  const { mutate, isLoading, isSuccess } = useMutationUpdateBudgetCategories();

  const watchCategory = watch("category");

  const handleSubmitForm = (
    data: z.infer<typeof addExpenditureValidationSchema>
  ) => {
    mutate(data);
    reset({ ...defaultValues, category: watch("category") });
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

        {!(watchCategory === "") && (
          <div className="flex flex-col gap-5">
            <div>
              <p>Date</p>
              <input type="date" {...register("date", { valueAsDate: true })} />
              {"date" in errors && errors.date?.message && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>

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
            <div>
              <p>Amount</p>
              <input
                step={0.01}
                type="number"
                className={`border-2 border-gray-300 rounded-md p-1 w-min`}
                {...register("amount", { valueAsNumber: true })}
              />
              {"amount" in errors && errors.amount?.message && (
                <p className="text-red-500">{errors.amount.message}</p>
              )}
            </div>
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="debit"
                  {...register("creditOrDebit")}
                  value="debit"
                />
                <label htmlFor="debit">Debit</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  {...register("creditOrDebit")}
                  type="radio"
                  id="credit"
                  value="credit"
                />
                <label htmlFor="credit">Credit</label>
              </div>
            </div>

            <div className="flex gap-5">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  Loading...
                </div>
              ) : isSuccess ? (
                <div className="flex gap-5 items-center">
                  <Button
                    type="button"
                    onClick={() => reset(defaultValues)}
                    label="Close"
                  />
                  <Button type="submit" label="Add More" />
                </div>
              ) : (
                <>
                  <Button
                    type="button"
                    label="Cancel"
                    className="w-min"
                    onClick={() => reset()}
                  />

                  <Button type="submit" label="Add" className="w-min" />
                </>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
