import ExpandableText from '@/components/ExpandableText';
import { Spinner } from '@/components/ui/spinner';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router-dom';
import GameAttributes from '@/components/GameAttributes';
import GameTrailer from '@/components/GameTrailer';
import ScreenshotsGrid from '@/components/ScreenshotsGrid';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size='large' className='m-4' />;

  if (error || !game) throw new Error('Error during loading a game details.');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4'>
      <div>
        <h2 className='text-4xl font-bold'>{game.name}</h2>
        <ExpandableText maxChars={400}>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div>
        <GameTrailer gameId={game.id} />
        <ScreenshotsGrid gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
