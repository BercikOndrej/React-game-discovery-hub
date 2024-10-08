import APIClient from './apiClient';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

const GENRES_ENDPOINT = '/genres';

export default new APIClient<Genre>(GENRES_ENDPOINT);
