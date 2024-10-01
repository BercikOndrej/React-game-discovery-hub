import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/hooks/useGames";
import getCroppedImage from "@/services/image-url";
import PlatformsIconList from "@/components/PlatformsList";
import CriticScoreBadge from "@/components/CriticScoreBadge";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="group max-w-[600px] mx-auto rounded-t-xl">
      <img
        className="rounded-t-lg"
        src={getCroppedImage(game.background_image)}
        alt="Game image"
      />
      <CardHeader>
        <div className="flex flex-row justify-between">
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
        <CardTitle className="text-2xl group-hover:text-gray-50 group-hover:dark:text-gray-900">
          {game.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
