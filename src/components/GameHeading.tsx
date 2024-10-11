import useGameQueryStore from '@/gameQueryStore';
import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';

const GameHeading = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const correctGenre = useGenre(genreId);

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const correctPlatform = usePlatform(platformId);

  const heading = `${correctPlatform?.name ?? ''} ${
    correctGenre?.name ?? ''
  } Games`.trim();

  return <h1 className='text-6xl font-bold'>{heading}</h1>;
};

export default GameHeading;
