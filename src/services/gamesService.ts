import APIClient from './APIClient';
import { Genre } from './genresService';
import { Platform } from './platformsService';

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const GAMES_ENDPOINT = '/games';

export default new APIClient<Game>(GAMES_ENDPOINT);
