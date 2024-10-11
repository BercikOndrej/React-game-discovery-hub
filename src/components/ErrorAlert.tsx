import { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { BiErrorAlt } from 'react-icons/bi';

interface Props {
  children: ReactNode;
}

const ErrorAlert = ({ children }: Props) => {
  return (
    <Alert variant='destructive'>
      <BiErrorAlt className='h-8 w-8' />
      <AlertTitle className='ms-4'>Error</AlertTitle>
      <AlertDescription className='ms-4'>{children}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
