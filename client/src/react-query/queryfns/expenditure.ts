import backendServer from "../../utils/backendServer";

const deleteExpenditure = async (id: string, category: string) => {
  await backendServer.delete(`/data/${category}/${id}`);
};

export default deleteExpenditure;
