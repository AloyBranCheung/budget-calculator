import Spendables from "./Spendables";
import CurrBudgetDisplay from "./CurrBudgetDisplay";
import ExpenditureHistory from "./ExpenditureHistory";
import AddExpenditure from "./AddExpenditure";
import SavingsGoal from "./SavingsGoal";
// hooks
import useBudgetData from "../../react-query/queryHooks/useBudgetData";
import useGetSavingsGoal from "../../react-query/queryHooks/useGetSavingsGoal";

export default function Calculator() {
  const { data: budgetData, isLoading } = useBudgetData();
  const { data: savingsGoalData, isLoading: savingsGoalIsLoading } =
    useGetSavingsGoal();

  console.log({ savingsGoalData });

  return (
    <div className="flex flex-col gap-5">
      <SavingsGoal />
      <AddExpenditure />
      <CurrBudgetDisplay isLoading={isLoading} budgetData={budgetData} />
      <Spendables isLoading={isLoading} budgetData={budgetData} />
      <ExpenditureHistory isLoading={isLoading} budgetData={budgetData} />
    </div>
  );
}
