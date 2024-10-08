import { useEffect, useState } from 'react';
import { CanceledError } from '../services/api-client';
import apiService from '../services/apiService';
import { AxiosRequestConfig } from '../services/api-client';

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    () => {
      setLoading(true);

      const { request, cancel } = apiService.getAll<T>(endpoint, requestConfig);

      request
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => cancel();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
