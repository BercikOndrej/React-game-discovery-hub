import useGames from '@/hooks/useGames';
import GameCard from '@/components/GameCard';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import { GameQuery } from '@/App';
import ErrorAlert from './ErrorAlert';
import { Button } from './ui/button';
import React from 'react';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const keys = Array.from({ length: 16 }, (_, num) => num + 1);
  return (
    <>
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {isLoading &&
          keys.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <Button
          className='my-4 w-40'
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
