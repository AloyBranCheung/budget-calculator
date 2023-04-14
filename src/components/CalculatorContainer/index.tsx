import React from "react";
import Spendables from "./Spendables";
import CurrBudgetDisplay from "./CurrBudgetDisplay";

export default function Calculator() {
  return (
    <div className="flex flex-col gap-5">
      <CurrBudgetDisplay />
      <Spendables />
    </div>
  );
}
