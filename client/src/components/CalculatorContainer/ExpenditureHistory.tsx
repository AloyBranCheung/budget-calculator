import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { BudgetCategory, BudgetDataAPIResponse } from "../../@types/budgetData";
// hooks
import useMutationDeleteExpenditure from "../../react-query/queryHooks/useMutationDeleteExpenditure";

interface ExpenditureHistoryProps {
  isLoading: boolean;
  budgetData: BudgetDataAPIResponse | undefined;
}

export default function ExpenditureHistory({
  isLoading,
  budgetData,
}: ExpenditureHistoryProps) {
  const { mutate } = useMutationDeleteExpenditure();
  const handleConfirm = (
    id: string,
    dialogRef: React.MutableRefObject<HTMLDialogElement | null>
  ) => {
    mutate(id);
    dialogRef?.current?.close();
  };

  return (
    <div>
      <SectionTitle className="mb-2" bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory
          onConfirm={handleConfirm}
          items={
            (budgetData?.categories &&
              budgetData?.categories[BudgetCategory.Needs]) ||
            []
          }
          title="Necessities"
        />
        <ExpendCategory
          onConfirm={handleConfirm}
          items={
            (budgetData?.categories &&
              budgetData?.categories[BudgetCategory.Wants]) ||
            []
          }
          title="Wants"
        />
        <ExpendCategory
          onConfirm={handleConfirm}
          items={
            (budgetData?.categories &&
              budgetData?.categories[BudgetCategory.Savings]) ||
            []
          }
          title="Savings"
        />
      </div>
    </div>
  );
}
