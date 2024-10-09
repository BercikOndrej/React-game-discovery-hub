import genresService from '@/services/genresService';
import { useQuery } from '@tanstack/react-query';
import genres from '@/data/genres';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    placeholderData: (prev) => prev,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres, next: null },
  });
export default useGenres;
