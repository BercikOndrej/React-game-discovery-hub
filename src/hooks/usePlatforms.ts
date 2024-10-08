import platformsService, { Platform } from '@/services/platformsService';
import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/services/apiClient';

const usePlatforms = () =>
  useQuery<ApiResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformsService.getAll,
    placeholderData: (prev) => prev,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
