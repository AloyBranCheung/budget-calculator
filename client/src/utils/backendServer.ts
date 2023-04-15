import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const backendServer = axios.create({
  baseURL: baseUrl,
});

export default backendServer;
