import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div className='flex flex-col gap-1 mt-12'>
      <dt className='text-2xl text-gray-300 dark:text-gray-300 font-bold'>
        {term}
      </dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
