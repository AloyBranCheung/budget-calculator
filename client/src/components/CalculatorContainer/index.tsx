import React from "react";
import Spendables from "./Spendables";
import CurrBudgetDisplay from "./CurrBudgetDisplay";
import ExpenditureHistory from "./ExpenditureHistory";
import AddExpenditure from "./AddExpenditure";

export default function Calculator() {
  return (
    <div className="flex flex-col gap-5">
      <AddExpenditure />
      <CurrBudgetDisplay />
      <Spendables />
      <ExpenditureHistory />
    </div>
  );
}
