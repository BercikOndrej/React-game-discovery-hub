import GameGrid from '@/components/GameGrid';
import GameHeading from '@/components/GameHeading';
import GenresList from '@/components/GenresList';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';

const HomePage = () => {
  return (
    <div className='flex flex-row'>
      <aside className='hidden w-[200px] lg:inline'>
        <GenresList />
      </aside>

      <main className='flex-grow mx-auto p-4 flex flex-col gap-4 w-full'>
        <GameHeading />
        <div className='flex flex-row gap-4'>
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </main>
    </div>
  );
};

export default HomePage;
