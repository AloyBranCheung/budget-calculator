import React from "react";
// z
import { z } from "zod";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";
// react-query
import useMutationAddSavingsGoal from "../../react-query/queryHooks/useMutationAddSavingsGoal";
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
    formState: { errors },
  } = useForm<z.infer<typeof savingsGoalValSchema>>({
    resolver: zodResolver(savingsGoalValSchema),
    defaultValues: {
      nameOfGoal: savingsGoalData?.nameOfGoal ?? "",
      descriptionOfGoal: savingsGoalData?.descriptionOfGoal ?? "",
      targetAmount: savingsGoalData?.targetAmount ?? 0,
    },
  });

  const handleFormSubmit = (data: z.infer<typeof savingsGoalValSchema>) => {
    mutate(data);
    reset();
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
      <FormInput
        className="w-full"
        control={control}
        inputType="number"
        inputPlaceholder="Target Amount"
        name="targetAmount"
        isError={"targetAmount" in errors}
        errorMessage={
          errors?.targetAmount?.message ? errors.targetAmount.message : ""
        }
      />
      <div className="flex gap-2">
        <Button label={"Cancel"} onClick={onClickCancel} />
        <Button label={"Submit"} type="submit" />
      </div>
    </form>
  );
}
