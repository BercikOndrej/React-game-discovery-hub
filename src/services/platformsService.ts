import APIClient from './apiClient';

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  image: string;
}

const PLATFORMS_ENDPOINT = '/platforms';

export default new APIClient<Platform>(PLATFORMS_ENDPOINT);
