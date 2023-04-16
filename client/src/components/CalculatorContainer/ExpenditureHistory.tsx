import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { ExpenditureItem } from "../../@types/expenditures";
import { BudgetCategory, BudgetDataAPIResponse } from "../../@types/budgetData";

interface ExpenditureHistoryProps {
  isLoading: boolean;
  budgetData: BudgetDataAPIResponse | undefined;
}

export default function ExpenditureHistory({
  isLoading,
  budgetData,
}: ExpenditureHistoryProps) {
  console.log(budgetData?.categories);

  return (
    <div>
      <SectionTitle className="mb-2" bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory
          items={budgetData?.categories[BudgetCategory.Needs] || []}
          title="Necessities"
        />
        <ExpendCategory
          items={budgetData?.categories[BudgetCategory.Wants] || []}
          title="Wants"
        />
        <ExpendCategory
          items={budgetData?.categories[BudgetCategory.Savings] || []}
          title="Savings"
        />
      </div>
    </div>
  );
}
