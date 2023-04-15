import { createQueryKeys } from "@lukemorales/query-key-factory";
import axios, { AxiosRequestConfig } from "axios";
import getFirebaseIdtoken from "../../utils/firebaseGetIdToken";

const test = async () => {
  const token = await getFirebaseIdtoken();
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    "http://localhost:3001/api/data",
    axiosConfig
  );
  return response.data;
};

const budgetDataKeys = createQueryKeys("budget", {
  data: {
    queryKey: ["budget", "data"],
    queryFn: test,
  },
});

export default budgetDataKeys;
