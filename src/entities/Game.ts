import Platform from '@/entities/Platform';
import Genre from '@/entities/Genre';
import Publisher from '@/entities/Publisher';

export default interface Game {
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
