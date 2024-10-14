import ErrorAlert from '@/components/ErrorAlert';
import NavBar from '@/components/NavBar';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className='flex flex-col gap-8 p-8'>
        <h2 className='text-5xl text-red-500'>Oops...</h2>
        <ErrorAlert>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occured.'}
        </ErrorAlert>
      </div>
    </>
  );
};

export default ErrorPage;
