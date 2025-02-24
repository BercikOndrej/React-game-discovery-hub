import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 duration-500',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-white shadow hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-white dark:hover:bg-red-900/90',
        outline:
          'border border-gray-900 bg-gray-50 text-gray-700 hover:bg-gray-700 hover:text-white shadow-md dark:text-white dark:border-gray-50 dark:bg-gray-700 hover:dark:bg-gray-50 hover:dark:text-gray-700',
        secondary:
          'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800/80',
        ghost:
          'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white',
        link: 'text-gray-900 underline-offset-4 hover:underline dark:text-white',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
