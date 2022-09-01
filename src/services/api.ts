import axios from "axios";

const api = axios.create({
  baseURL: "https://spapi.dev/api",
});

export default api;
