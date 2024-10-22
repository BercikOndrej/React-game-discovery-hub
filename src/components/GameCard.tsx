import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import getCroppedImage from '@/services/imageUrl';
import PlatformsIconList from '@/components/PlatformsList';
import CriticScoreBadge from '@/components/CriticScoreBadge';
import RatingEmoji from './RatingEmoji';
import Game from '@/entities/Game';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const theme = localStorage.getItem('vite-ui-theme') ?? 'light';
  const gameLink = `/games/${game.slug}`;

  return (
    <Card className='group mx-auto rounded-t-xl'>
      <div className='overflow-hidden rounded-t-lg'>
        <img
          className='rounded-t-lg group-hover:scale-110 duration-500 transition-transform'
          src={getCroppedImage(game.background_image, theme)}
          alt='Game image'
        />
      </div>

      <CardHeader className='pb-0'>
        <div className='flex flex-row justify-between'>
          <PlatformsIconList
            platforms={
              game.parent_platforms !== undefined
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          <CriticScoreBadge score={game.metacritic} />
        </div>
        <CardTitle className='text-2xl group-hover:text-white group-hover:dark:text-gray-900'>
          <Link to={gameLink}>{game.name}</Link>
        </CardTitle>
      </CardHeader>
      <CardFooter className='mt-2'>
        <RatingEmoji rating={game.rating_top} />
      </CardFooter>
    </Card>
  );
};

export default GameCard;
