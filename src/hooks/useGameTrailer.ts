import { GameTrailer } from '@/entities/GameTrailer';
import APIClient from '@/services/APIClient';
import { useQuery } from '@tanstack/react-query';

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['games', gameId, 'movies'],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
