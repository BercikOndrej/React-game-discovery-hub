import { Platform } from './Platform';
import { Genre } from './Genre';
import { Publisher } from './Publisher';

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
  rating_top: number;
}
