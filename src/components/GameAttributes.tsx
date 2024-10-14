import { Game } from '@/entities/Game';
import DefinitionItem from '@/components/DefinitionItem';
import CriticScoreBadge from '@/components/CriticScoreBadge';

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <dl className='grid grid-cols-2'>
      <DefinitionItem term='Platforms'>
        <ul>
          {game.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScoreBadge score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        <ul>
          {game.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        <ul>
          {game.publishers.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
