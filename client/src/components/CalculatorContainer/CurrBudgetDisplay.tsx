import React, { ChangeEvent, useState } from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
import Input from "../UI/Input";
import Button from "../UI/Button";
// hooks
import useMutationUpdateTotalStartAmount from "../../react-query/queryHooks/useMutationUpdateTotalStartAmount";
// types
import { BudgetDataAPIResponse } from "../../@types/budgetData";

interface CurrBudgetDisplayProps {
  isLoading: boolean;
  budgetData: BudgetDataAPIResponse | undefined;
}

export default function CurrBudgetDisplay({
  isLoading,
  budgetData,
}: CurrBudgetDisplayProps) {
  const [updateAmount, setUpdateAmount] = useState<number>(0);
  const { mutate } = useMutationUpdateTotalStartAmount();

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateAmount(Number(e.target.value));
  };

  const handleClickUpdate = () => mutate(updateAmount);
  return (
    <div>
      <SectionTitle bold title="Current Budget" />
      <div>
        <div className="flex gap-2">
          <TitleText title="Starting Amount:" />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TitleText title={`$${budgetData?.current.budget.total}`} />
          )}
        </div>
        <TitleText title="Remaining Amount:" />
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TitleText
              className="!text-8xl my-5"
              title={`$${budgetData?.current.budget.remaining}`}
            />
          )}
        </div>
      </div>
      <div className="flex gap-2 flex-col sm:flex-row sm:items-center">
        <TitleText title="Update Starting Amount?:" />
        <div className="flex gap-2">
          <Input
            value={Number(updateAmount).toString()}
            onChange={handleChangeAmount}
            type="number"
            step="0.01"
            min={0}
          />
          <Button onClick={handleClickUpdate} label="Update" />
        </div>
      </div>
    </div>
  );
}
