import { Genre } from '@/services/genresService';
import useData from './useData';
import { GameQuery } from '@/App';
import { Platform } from '@/services/platformsService';

const ENPOINT = '/games';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    ENPOINT,
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
