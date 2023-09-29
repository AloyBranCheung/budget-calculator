import React from "react";
// z
import { z } from "zod";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";
// react-query
import useMutationAddSavingsGoal from "../../react-query/queryHooks/useMutationAddSavingsGoal";
// types/utils
import CreditOrDebit from "../../@types/creditOrDebit";
// components
import FormInput from "../UI/form/FormInput";
import { SavingsGoalSchema } from "../../@types/savingsGoal";
import Button from "../UI/Button";

interface EditSavingsGoalProps {
  savingsGoalData: SavingsGoalSchema | undefined;
  onClickCancel: () => void;
}

export default function EditSavingsGoal({
  savingsGoalData,
  onClickCancel,
}: EditSavingsGoalProps) {
  const { mutate } = useMutationAddSavingsGoal();
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof savingsGoalValSchema>>({
    resolver: zodResolver(savingsGoalValSchema),
    defaultValues: {
      nameOfGoal: savingsGoalData?.nameOfGoal ?? "",
      descriptionOfGoal: savingsGoalData?.descriptionOfGoal ?? "",
      targetAmount: savingsGoalData?.targetAmount ?? 0,
      creditOrDebit: CreditOrDebit.Credit,
    },
  });

  const handleFormSubmit = (data: z.infer<typeof savingsGoalValSchema>) => {
    mutate(data);
    reset();
    onClickCancel();
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormInput
        className="w-full"
        control={control}
        inputType="text"
        inputPlaceholder="Name of Goal"
        name="nameOfGoal"
        isError={"nameOfGoal" in errors}
        errorMessage={
          errors?.nameOfGoal?.message ? errors.nameOfGoal.message : ""
        }
      />
      <FormInput
        className="w-full"
        control={control}
        inputType="text"
        inputPlaceholder="Description of Goal"
        name="descriptionOfGoal"
        isError={"descriptionOfGoal" in errors}
        errorMessage={
          errors?.descriptionOfGoal?.message
            ? errors.descriptionOfGoal.message
            : ""
        }
      />
      <div>
        <p>Target Amount</p>
        <input
          step={0.01}
          type="number"
          className={`border-2 border-gray-300 rounded-md p-1 w-min`}
          {...register("targetAmount", { valueAsNumber: true })}
        />
        {"targetAmount" in errors && errors.targetAmount?.message && (
          <p className="text-red-500">{errors.targetAmount.message}</p>
        )}
      </div>
      <div className="flex gap-2">
        <Button label={"Cancel"} onClick={onClickCancel} />
        <Button label={"Submit"} type="submit" />
      </div>
    </form>
  );
}
