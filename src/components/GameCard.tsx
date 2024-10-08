import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Game } from '@/hooks/useGames';
import getCroppedImage from '@/services/imageUrl';
import PlatformsIconList from '@/components/PlatformsList';
import CriticScoreBadge from '@/components/CriticScoreBadge';
import RatingEmoji from './RatingEmoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const theme = localStorage.getItem('vite-ui-theme') ?? 'light';

  return (
    <Card className='group mx-auto rounded-t-xl'>
      <img
        className='rounded-t-lg'
        src={getCroppedImage(game.background_image, theme)}
        alt='Game image'
      />
      <CardHeader className='pb-0'>
        <div className='flex flex-row justify-between'>
          <PlatformsIconList
            platforms={
              game.parent_platforms !== undefined
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          {game.metacritic !== null && (
            <CriticScoreBadge score={game.metacritic} />
          )}
        </div>
        <CardTitle className='text-2xl group-hover:text-gray-50 group-hover:dark:text-gray-900'>
          {game.name}
        </CardTitle>
      </CardHeader>
      <CardFooter className='mt-2'>
        <RatingEmoji rating={game.rating_top} />
      </CardFooter>
    </Card>
  );
};

export default GameCard;
