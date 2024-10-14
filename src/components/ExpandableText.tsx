import { useState } from 'react';
import { Button } from './ui/button';

interface Props {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const [showText, setShowText] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  if (!children) return null;

  return (
    <div className='flex flex-row items-center'>
      <p className='self-baseline'>
        {showText ? children : children.slice(0, maxChars) + '...'}
        <Button
          className='self-baseline text-xs ms-1 h-5'
          onClick={() => setShowText(!showText)}
          variant='outline'
          size='sm'
        >
          {showText ? 'Show Less' : 'Show More'}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableText;
