import { Input } from '@/components/ui/input';
import useGameQueryStore from '@/gameQueryStore';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current !== null) setSearchText(searchRef.current.value);
      }}
      className='flex items-center w-full group focus:text-white'
    >
      <FaSearch className='relative left-8 top-2 transform -translate-y-1/2 z-10 text-gray-400 group-hover:text-white group-hover:dark:text-gray-700 duration-500 ease-linear' />
      <Input
        id='search'
        type='text'
        ref={searchRef}
        placeholder='Search Games...'
        className='pl-10 h-10'
      />
    </form>
  );
};

export default SearchInput;
