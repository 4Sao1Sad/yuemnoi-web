import axios from "axios";

// Axios Interceptor Instance
export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
  withCredentials: true,
});
