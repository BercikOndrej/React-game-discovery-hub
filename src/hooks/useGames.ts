import { Genre } from "./useGenres";
import useData from "./useData";
import { Platform } from "./usePlatforms";
import { GameQuery } from "@/App";

const ENPOINT = "/games";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
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
