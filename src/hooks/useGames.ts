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
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 30 * 60 * 1000, // 30min
  });

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     ENPOINT,
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.ordering,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
