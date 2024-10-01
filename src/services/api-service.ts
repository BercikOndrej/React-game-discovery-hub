import apiClient from "./api-client";
import { AxiosRequestConfig } from "./api-client";

interface ApiResponse<T> {
  count: number;
  results: T[];
}

class ApiService {
  getAll<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = apiClient.get<ApiResponse<T>>(endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new ApiService();
