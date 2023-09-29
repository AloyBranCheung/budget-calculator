import { useState } from "react";
// react hook form
import { useForm } from "react-hook-form";
// hooks
import useMutationContributeAmount from "../../react-query/queryHooks/useMutationContributeAmount";
// types
import { SavingsGoalSchema } from "../../@types/savingsGoal";
import { z } from "zod";
import { contributeValSchema } from "../../validators/addSavingsGoalValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CreditOrDebit from "../../@types/creditOrDebit";
// components
import SectionTitle from "../UI/typography/SectionTitle";
import Button from "../UI/Button";
import EditSavingsGoal from "./EditSavingsGoal";
import FormSubmit from "../UI/form/FormSubmit";
import TitleText from "../UI/typography/TitleText";
import { savingsColor } from "../../utils/colorCode";

interface SavingsGoalProps {
  savingsGoalData: SavingsGoalSchema | undefined;
  savingsGoalIsLoading: boolean;
}

export default function SavingsGoal({
  savingsGoalData,
  savingsGoalIsLoading,
}: SavingsGoalProps) {
  const { mutate } = useMutationContributeAmount();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contributeValSchema>>({
    resolver: zodResolver(contributeValSchema),
    defaultValues: {
      contributingAmount: 0,
      creditOrDebit: CreditOrDebit.Credit,
    },
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isContribute, setIsContribute] = useState(false);

  const handleClickCancel = () => setIsEdit(false);

  const handleFormSubmit = (data: z.infer<typeof contributeValSchema>) => {
    mutate(data);
    setIsContribute(false);
    reset();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SectionTitle title="Savings Goal" bold />
        <Button label="Edit" onClick={() => setIsEdit(true)} />
        {!isEdit && (
          <Button label="Contribute" onClick={() => setIsContribute(true)} />
        )}
      </div>
      {savingsGoalIsLoading ? (
        <div className="w-full flex items-center justify-center">
          <div>Loading...</div>
        </div>
      ) : isEdit ? (
        <EditSavingsGoal
          onClickCancel={handleClickCancel}
          savingsGoalData={savingsGoalData}
        />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <TitleText
            title={savingsGoalData?.nameOfGoal ?? "Please add a goal"}
            bold
          />
          <TitleText
            className={
              savingsGoalData?.currentAmountContributed &&
              savingsGoalData?.targetAmount
                ? savingsColor(
                    savingsGoalData.currentAmountContributed,
                    savingsGoalData.targetAmount
                  )
                : undefined
            }
            title={`${
              savingsGoalData?.currentAmountContributed
                ? `$${savingsGoalData.currentAmountContributed}`
                : "No amount contributed yet."
            } (${
              savingsGoalData?.targetAmount
                ? `$${savingsGoalData.targetAmount}`
                : "No target amount specified."
            })`}
          />
          <div className="self-start">
            {savingsGoalData?.descriptionOfGoal ?? "No description set yet."}
          </div>
          {isContribute && (
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col w-full justify-center gap-2"
            >
              <p>Contribution Amount</p>
              <input
                step={0.01}
                type="number"
                className={`border-2 border-gray-300 rounded-md p-1 w-full self-start`}
                {...register("contributingAmount", { valueAsNumber: true })}
              />
              {"contributingAmount" in errors &&
                errors.contributingAmount?.message && (
                  <p className="text-red-500">
                    {errors.contributingAmount.message}
                  </p>
                )}
              <FormSubmit
                onClickCancel={() => {
                  reset();
                  setIsContribute(false);
                }}
              />
            </form>
          )}
        </div>
      )}
    </div>
  );
}
