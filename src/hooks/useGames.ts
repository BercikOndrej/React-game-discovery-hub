import { GameQuery } from '@/App';
import gamesService from '@/services/gamesService';
import { useInfiniteQuery } from '@tanstack/react-query';

const PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
          page_size: PAGE_SIZE,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

export default useGames;
