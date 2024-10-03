import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="text-6xl font-bold">
      {`${gameQuery.platform?.name ?? ""} ${
        gameQuery.genre?.name ?? ""
      }  Games`.trim()}
    </h1>
  );
};

export default GameHeading;
