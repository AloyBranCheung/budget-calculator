import backendServer from "../../utils/backendServer";
import getFirebaseIdtoken from "../../utils/firebaseGetIdToken";
import { BudgetDataAPIResponse } from "../../@types/budgetData";

const getBudgetData = async () => {
  const response = await backendServer.get<BudgetDataAPIResponse>("/data", {
    headers: {
      Authorization: `Bearer ${await getFirebaseIdtoken()}`,
    },
  });

  return response.data;
};

export default getBudgetData;
