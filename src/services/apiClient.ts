import axios from 'axios';

export interface ApiResponse<T> {
  count: number;
  next: string;
  previous: string;
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

  getAll = () => {
    return axiosInstant
      .get<ApiResponse<T>>(this._endpoint)
      .then((res) => res.data);
  };
}
