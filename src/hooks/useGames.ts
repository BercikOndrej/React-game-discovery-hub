import Game from '@/entities/Game';
import useGameQueryStore from '@/gameQueryStore';
import APIClient from '../services/APIClient';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

const PAGE_SIZE = 20;
const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);
  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
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
};
export default useGames;
