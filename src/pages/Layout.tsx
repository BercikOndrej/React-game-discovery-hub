import NavBar from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div id='scroll' className='w-full'>
        <nav className='w-full'>
          <NavBar />
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
