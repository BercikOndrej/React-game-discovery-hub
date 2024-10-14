import { Spinner } from '@/components/ui/spinner';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size='large' />;

  if (error || !game) throw new Error('Error during loading a game details.');

  return (
    <div className='flex flex-col gap-4 w-full p-4'>
      <h2 className='text-4xl font-bold'>{game.name}</h2>
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
