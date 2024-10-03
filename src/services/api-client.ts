import axios, { CanceledError } from "axios";
import { AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
  },
});

export { CanceledError };
export type { AxiosRequestConfig };
