import axios, { CanceledError } from "axios";
import { AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "449958c462ce49bbb3bbcf8099de2c65",
  },
});

export { CanceledError };
export type { AxiosRequestConfig };
