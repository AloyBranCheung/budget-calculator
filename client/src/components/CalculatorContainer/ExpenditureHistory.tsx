import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { BudgetDataAPIResponse, CategoryItems } from "../../@types/budgetData";
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
  const handleConfirm = (id: string, category: string) => {
    mutate({ id, category });
  };

  const expenditureCategories =
    budgetData?.categories && Object.keys(budgetData.categories).slice(0, 3);

  const expenditures = expenditureCategories?.map((category: string) => {
    return (
      <ExpendCategory
        key={category}
        onConfirm={handleConfirm}
        items={
          ((budgetData?.categories &&
            budgetData?.categories[
              category as keyof BudgetDataAPIResponse["categories"]
            ]) as CategoryItems[]) || []
        }
        title={category}
      />
    );
  });

  return (
    <div>
      <SectionTitle className="mb-2" bold title="Expenditures" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col gap-5">{expenditures}</div>
      )}
    </div>
  );
}
