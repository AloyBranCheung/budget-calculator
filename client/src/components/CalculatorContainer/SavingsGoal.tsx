import { useState } from "react";
// types
import { SavingsGoalSchema } from "../../@types/savingsGoal";
// components
import SectionTitle from "../UI/typography/SectionTitle";
import Button from "../UI/Button";
import EditSavingsGoal from "./EditSavingsGoal";

interface SavingsGoalProps {
  savingsGoalData: SavingsGoalSchema | undefined;
  savingsGoalIsLoading: boolean;
}

export default function SavingsGoal({
  savingsGoalData,
  savingsGoalIsLoading,
}: SavingsGoalProps) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickCancel = () => setIsEdit(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SectionTitle title="Savings Goal" bold />
        <Button label="Edit" onClick={() => setIsEdit(true)} />
      </div>
      {isEdit ? (
        <EditSavingsGoal
          onClickCancel={handleClickCancel}
          savingsGoalData={savingsGoalData}
        />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div>{savingsGoalData?.nameOfGoal ?? "Please add a goal"}</div>
          <div>
            {savingsGoalData?.currentAmountContributed ??
              "No amount contributed yet."}{" "}
            ({savingsGoalData?.targetAmount ?? "No target amount specified."})
          </div>
          <div className="self-start">
            {savingsGoalData?.descriptionOfGoal ?? "No description set yet."}
          </div>
        </div>
      )}
    </div>
  );
}
