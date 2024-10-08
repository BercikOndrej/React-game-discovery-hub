import axios, { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
  count: number;
  results: T[];
}

const axiosInstant = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
  },
});

export default class APIClient<T> {
  constructor(private _endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstant
      .get<ApiResponse<T>>(this._endpoint, config)
      .then((res) => res.data);
  };
}
