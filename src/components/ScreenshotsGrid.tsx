import useGameScreenshots from '@/hooks/useGameScreenshots';
import { Skeleton } from './ui/skeleton';

interface Props {
  gameId: number;
}
const ScreenshotsGrid = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);
  const skeletons = Array.from(
    { length: data?.count || 8 },
    (_, num) => num + 1
  );

  if (error)
    throw new Error('Error during a loading a screenshots of the game');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Skeleton key={skeleton} className='w-full h-[400px]' />
        ))}
      {data?.results.map((screenshot) => (
        <img
          className='rounded-md'
          key={screenshot.id}
          src={screenshot.image}
        />
      ))}
    </div>
  );
};

export default ScreenshotsGrid;
