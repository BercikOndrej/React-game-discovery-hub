import { ApiResponse } from '@/services/apiClient';
import genresService, { Genre } from '@/services/genresService';
import { useQuery } from '@tanstack/react-query';

const useGenres = () =>
  useQuery<ApiResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    placeholderData: (prev) => prev,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGenres;
