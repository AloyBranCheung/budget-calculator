import backendServer from "../../utils/backendServer";

const deleteExpenditure = async (id: string) => {
  await backendServer.delete(`/data/${id}`);
};

export default deleteExpenditure;
