import { GameQuery } from '@/App';
import gamesService from '@/services/gamesService';
import { useQuery } from '@tanstack/react-query';

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
