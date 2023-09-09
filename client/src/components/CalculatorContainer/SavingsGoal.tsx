import { useState } from "react";
// z
import { z } from "zod";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { savingsGoalValSchema } from "../../validators/addSavingsGoalValidationSchema";
// components
import SectionTitle from "../UI/typography/SectionTitle";
import Button from "../UI/Button";
import FormInput from "../UI/form/FormInput";

export default function SavingsGoal() {
  const [isEdit, setIsEdit] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof savingsGoalValSchema>>({
    resolver: zodResolver(savingsGoalValSchema),
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SectionTitle title="Savings Goal" bold />
        <Button label="Edit" onClick={() => setIsEdit(true)} />
      </div>
      {isEdit ? (
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
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div>nameOfGoal</div>
          <div>currentAmountContributed (targetAmount)</div>
          <div className="self-start">descriptionOfGoal</div>
        </div>
      )}
    </div>
  );
}
