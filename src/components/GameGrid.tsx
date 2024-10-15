import GameCard from '@/components/GameCard';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import ErrorAlert from './ErrorAlert';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from './ui/spinner';
import useGames from '@/hooks/useGames';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const keys = Array.from({ length: 16 }, (_, num) => num + 1);
  const fetchedGamesCount =
    data?.pages.reduce((acc, currentPage) => acc + currentPage.count, 0) || 0;

  if (error) return <ErrorAlert>{error.message}</ErrorAlert>;

  return (
    <InfiniteScroll
      style={{ overflow: 'clip' }}
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner className='lg' />}
    >
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-clip'>
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
    </InfiniteScroll>
  );
};

export default GameGrid;
