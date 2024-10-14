import { Genre } from '@/entities/Genre';
import APIClient from './APIClient';

const GENRES_ENDPOINT = '/genres';

export default new APIClient<Genre>(GENRES_ENDPOINT);
