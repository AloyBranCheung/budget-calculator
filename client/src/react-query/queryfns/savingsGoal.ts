import backendServer from "../../utils/backendServer";

export const getSavingsGoal = async () => {
  const response = await backendServer.get("/savings-goal");
  return response.data;
};

export const addSavingsGoal = async () => {
  console.log("addSavingsGoal hehe");
  return null;
};
