import APIClient from './APIClient';
import { Game } from '@/entities/Game';

const GAMES_ENDPOINT = '/games';

export default new APIClient<Game>(GAMES_ENDPOINT);
