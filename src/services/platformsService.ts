import APIClient from './apiClient';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const PLATFORMS_ENDPOINT = '/platforms/lists/parents';

export default new APIClient<Platform>(PLATFORMS_ENDPOINT);
