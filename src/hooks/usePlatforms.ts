import platforms from '@/data/platforms';
import platformsService from '@/services/platformsService';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: platformsService.getAll,
    placeholderData: (prev) => prev,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
