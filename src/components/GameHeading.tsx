import { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const correctGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const correctPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  return (
    <h1 className='text-6xl font-bold'>
      {`${correctPlatform?.name ?? ''} ${
        correctGenre?.name ?? ''
      }  Games`.trim()}
    </h1>
  );
};

export default GameHeading;
