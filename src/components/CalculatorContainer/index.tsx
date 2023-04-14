import React from "react";
import TotalsDisplay from "./TotalsDisplay";
import CurrBudgetDisplay from "./CurrBudgetDisplay";

export default function Calculator() {
  return (
    <div className="flex flex-col gap-5">
      <CurrBudgetDisplay />
      <TotalsDisplay />
    </div>
  );
}
