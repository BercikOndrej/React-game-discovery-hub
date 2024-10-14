import { Platform } from '@/entities/Platform';
import APIClient from './APIClient';

const PLATFORMS_ENDPOINT = '/platforms/lists/parents';

export default new APIClient<Platform>(PLATFORMS_ENDPOINT);
