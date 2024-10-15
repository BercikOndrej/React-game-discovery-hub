import useGameTrailer from '@/hooks/useGameTrailer';
import { Skeleton } from './ui/skeleton';

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Skeleton className='w-full h-[400px] mb-4' />;
  if (error) throw new Error();

  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video
      className='rounded-md mb-4'
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
