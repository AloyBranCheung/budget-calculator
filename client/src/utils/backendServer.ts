import axios from "axios";
import getFirebaseIdtoken from "./firebaseGetIdToken";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const backendServer = axios.create({
  baseURL: baseUrl,
});

backendServer.interceptors.request.use(async (config) => {
  const token = await getFirebaseIdtoken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default backendServer;
