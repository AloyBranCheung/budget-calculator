import React from "react";
// z
import { z } from "zod";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";
// components
import FormInput from "../UI/form/FormInput";
import { SavingsGoalSchema } from "../../@types/savingsGoal";

interface EditSavingsGoalProps {
  savingsGoalData: SavingsGoalSchema | undefined;
}

export default function EditSavingsGoal({
  savingsGoalData,
}: EditSavingsGoalProps) {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof savingsGoalValSchema>>({
    resolver: zodResolver(savingsGoalValSchema),
  });

  return (
    <div>
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
    </div>
  );
}
