import React from "react";
import Spendables from "./Spendables";
import CurrBudgetDisplay from "./CurrBudgetDisplay";
import ExpenditureHistory from "./ExpenditureHistory";
import AddExpenditure from "./AddExpenditure";
// hooks
import useBudgetData from "../../react-query/queries/useBudgetData";

export default function Calculator() {
  const { data, isLoading } = useBudgetData();
  if (!isLoading) {
    console.log(data);
  } else {
    console.log("loading");
  }

  return (
    <div className="flex flex-col gap-5">
      <AddExpenditure />
      <CurrBudgetDisplay />
      <Spendables />
      <ExpenditureHistory />
    </div>
  );
}
