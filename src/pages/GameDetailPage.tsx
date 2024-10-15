import ExpandableText from '@/components/ExpandableText';
import { Spinner } from '@/components/ui/spinner';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router-dom';
import GameAttributes from '@/components/GameAttributes';
import GameTrailer from '@/components/GameTrailer';
import { useEffect } from 'react';
import ScreenshotsGrid from '@/components/ScreenshotsGrid';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  // Setting background image
  let backgroundImageStyle: string;
  if (game && game.background_image !== undefined) {
    backgroundImageStyle = "bg-[url('" + game.background_image + "')]";
    console.log(game, backgroundImageStyle);
  }

  useEffect(() => {
    const body = document.body;
    if (body && backgroundImageStyle) {
      body.classList.add(backgroundImageStyle);
      body.classList.add('bg-cover');
    }
  }, [game?.background_image]);

  if (isLoading) return <Spinner size='large' />;

  if (error || !game) throw new Error('Error during loading a game details.');

  return (
    <div className='flex flex-col gap-4 w-full p-4'>
      <h2 className='text-4xl font-bold'>{game.name}</h2>
      <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>

      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <ScreenshotsGrid gameId={game.id} />
    </div>
  );
};

export default GameDetailPage;
