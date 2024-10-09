import { GameQuery } from '@/App';
import gamesService from '@/services/gamesService';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

const PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
          page_size: PAGE_SIZE,
          page: pageParam,
        },
      }),
    staleTime: ms('5min'),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

export default useGames;
