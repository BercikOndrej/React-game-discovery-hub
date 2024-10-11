import NavBar from '@/components/NavBar';
import GameGrid from '@/components/GameGrid';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import GenresList from '@/components/GenresList';
import GameHeading from '@/components/GameHeading';

function App() {
  return (
    <>
      <div
        id='scroll'
        className='grid grid-cols-1 grid-rows-[5em,1fr] lg:grid-cols-[200px,1fr]'
      >
        <div className='row-span-1 col-span-2'>
          <NavBar />
        </div>

        <aside className='hidden row-span-1 col-span-1 lg:inline'>
          <GenresList />
        </aside>

        <main className='col-span-1 row-span-1 mx-auto p-4 flex flex-col gap-4 w-full'>
          <GameHeading />
          <div className='flex flex-row gap-4'>
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </main>
      </div>
    </>
  );
}

export default App;
