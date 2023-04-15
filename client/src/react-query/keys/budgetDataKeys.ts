import { createQueryKeys } from "@lukemorales/query-key-factory";
import getBudgetData from "../queryfns/budgetData";

const budgetDataKeys = createQueryKeys("budget", {
  data: {
    queryKey: ["budget", "data"],
    queryFn: getBudgetData,
  },
});

export default budgetDataKeys;
