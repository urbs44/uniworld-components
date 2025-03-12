"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helperText?: string;
  error?: string;
  indeterminate?: boolean;
  animation?: "scale" | "pulse" | "none";
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      indeterminate,
      id,
      disabled,
      animation = "none",
      ...props
    },
    ref
  ) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);
    
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    // Generate a stable ID using useId
    const generatedId = useId();
    const checkboxId = id || `checkbox-${generatedId}`;
    const errorId = `${checkboxId}-error`;
    const helperId = `${checkboxId}-helper`;

    const animationClasses = {
      scale: "transform transition-transform duration-200 checked:scale-90",
      pulse: "transition-opacity duration-200 checked:animate-pulse",
      none: "",
    };

    return (
      <div className="space-y-1">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id={checkboxId}
              className={cn(
                "h-4 w-4 rounded border-gray-300 text-uniworld-blue focus:ring-uniworld-blue",
                error && "border-uniworld-red focus:ring-uniworld-red",
                disabled && "opacity-50 cursor-not-allowed",
                animationClasses[animation],
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
              ref={checkboxRef}
              {...props}
            />
          </div>
          {label && (
            <div className="ml-3 text-sm">
              <label
                htmlFor={checkboxId}
                className={cn(
                  "font-medium text-gray-700",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {label}
              </label>
            </div>
          )}
        </div>
        {helperText && !error && (
          <p id={helperId} className="text-sm text-gray-500 ml-7">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-uniworld-red ml-7">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox }; 