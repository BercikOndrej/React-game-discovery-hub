import { useQuery } from '@tanstack/react-query';
import genres from '@/data/genres';
import ms from 'ms';
import APIClient from '@/services/APIClient';
import { Genre } from '@/entities/Genre';

const apiCLient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    placeholderData: (prev) => prev,
    staleTime: ms('24h'),
    initialData: genres,
  });
export default useGenres;
