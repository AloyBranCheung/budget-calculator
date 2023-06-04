import { CategoryItems } from "../@types/budgetData";

export default function calculateExpenditureTotals(
  categorArr: CategoryItems[]
) {
  return categorArr.reduce((total, item) => {
    return total + item.amount;
  }, 0);
}
