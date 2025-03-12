"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-questa-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uniworld-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500',
  {
    variants: {
      variant: {
        primary: 'bg-uniworld-blue text-uniworld-white hover:bg-uniworld-blue-hover shadow-sm',
        secondary: 'bg-uniworld-white text-uniworld-blue border border-uniworld-blue hover:bg-uniworld-light-gray shadow-sm',
        outline: 'border border-uniworld-blue text-uniworld-blue hover:bg-uniworld-light-blue',
        ghost: 'text-uniworld-blue hover:bg-uniworld-light-gray',
        link: 'text-uniworld-blue underline-offset-4 hover:underline p-0 h-auto',
        danger: 'bg-uniworld-red text-uniworld-white hover:bg-uniworld-red/90 shadow-sm',
        yellow: 'bg-uniworld-yellow text-uniworld-blue hover:bg-uniworld-yellow/90 shadow-sm',
        light: 'bg-uniworld-light-blue text-uniworld-blue hover:bg-uniworld-light-blue/80 shadow-sm',
      },
      size: {
        xs: 'h-8 px-2.5 text-xs rounded',
        sm: 'h-9 px-3 rounded-md text-sm',
        md: 'h-10 px-4 py-2 rounded-md',
        lg: 'h-11 px-6 rounded-md text-base',
        xl: 'h-12 px-8 rounded-md text-lg',
        icon: 'h-10 w-10 rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    leftIcon,
    rightIcon,
    isLoading,
    children,
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !isLoading && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 