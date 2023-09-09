import { useState } from "react";
// components
import SectionTitle from "../UI/typography/SectionTitle";
import Button from "../UI/Button";
import EditSavingsGoal from "./EditSavingsGoal";

export default function SavingsGoal() {
  const [isCreateGoal, setIsCreateGoal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // if null data then create goal?

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SectionTitle title="Savings Goal" bold />
        <Button label="Edit" onClick={() => setIsEdit(true)} />
      </div>
      {isEdit ? (
        <EditSavingsGoal />
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
