"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate a stable ID using useId
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={cn("space-y-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-questa-bold text-uniworld-dark-gray"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-uniworld-dark-gray">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            className={cn(
              "block rounded-md border-uniworld-input-border shadow-sm focus:border-uniworld-blue focus:ring-uniworld-blue sm:text-sm font-questa text-uniworld-dark-gray",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-uniworld-red focus:border-uniworld-red focus:ring-uniworld-red",
              disabled && "opacity-50 cursor-not-allowed bg-uniworld-light-gray",
              fullWidth && "w-full",
              className
            )}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? errorId
                : helperText
                ? helperId
                : undefined
            }
            disabled={disabled}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-uniworld-dark-gray">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && !error && (
          <p id={helperId} className="text-sm text-uniworld-dark-gray/70 font-questa">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-uniworld-red font-questa">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input }; 