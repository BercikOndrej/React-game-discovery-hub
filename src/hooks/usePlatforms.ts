import platforms from '@/data/platforms';
import Platform from '@/entities/Platform';
import APIClient from '../services/APIClient';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    placeholderData: (prev) => prev,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
