import logo from '@/assets/logo.webp';
import SearchInput from '@/components/SearchInput';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-4 p-4'>
      <Link to='/'>
        <img
          className='hover:cursor-pointer object-cover'
          src={logo}
          width='60px'
          height='60px'
        />
      </Link>
      <SearchInput />
      <ModeToggle />
    </div>
  );
};

export default NavBar;
