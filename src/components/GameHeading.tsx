import { GameQuery } from '@/App';
import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const correctGenre = useGenre(gameQuery.genreId);
  const correctPlatform = usePlatform(gameQuery.platformId);
  const heading = `${correctPlatform?.name ?? ''} ${
    correctGenre?.name ?? ''
  } Games`.trim();

  return <h1 className='text-6xl font-bold'>{heading}</h1>;
};

export default GameHeading;
