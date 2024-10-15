import GameScreenshot from '@/entities/GameScreenshot';
import APIClient from '../services/APIClient';
import { useQuery } from '@tanstack/react-query';

const useGameScreenshots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ['games', gameId, 'screenshots'],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshots;
