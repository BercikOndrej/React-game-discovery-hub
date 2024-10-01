import NavBar from "@/components/NavBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[5em,1fr] lg:grid-cols-[200px,1fr]">
        <div className="row-span-1 col-span-2">
          <NavBar />
        </div>

        <div className="hidden row-span-1 col-span-1 lg:inline">Aside</div>

        <div className="col-span-1 row-span-1 mx-auto p-4 flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-4">
            <div className="w-50"> test</div>
            <div className="w-50"> test</div>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
