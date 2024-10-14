import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-full border border-gray-200 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium text-gray-700 placeholder:text-white0 hover:placeholder:text-white0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:file:text-white dark:placeholder:text-gray-400 duration-500 transform ease-linear group-hover:bg-gray-700 group-hover:text-white focus:bg-gray-700 focus:placeholder:text-white group-hover:placeholder:text-white focus:text-white dark:bg-gray-700 group-hover:dark:bg-gray-50 group-hover:dark:placeholder:text-gray-700 focus:dark:bg-gray-50 focus:dark:placeholder:text-gray-700 focus:dark:text-gray-700 dark:text-white group-hover:dark:text-gray-700',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
