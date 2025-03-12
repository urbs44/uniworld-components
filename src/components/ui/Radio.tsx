"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  helperText,
  error,
  className,
  orientation = "vertical",
  disabled,
}) => {
  // Generate a stable ID using useId
  const generatedId = useId();
  const groupId = `radio-group-${generatedId}`;
  const errorId = `${groupId}-error`;
  const helperId = `${groupId}-helper`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="text-sm font-medium text-gray-700">{label}</div>
      )}
      <div
        role="radiogroup"
        aria-labelledby={label ? groupId : undefined}
        aria-describedby={
          error ? errorId : helperText ? helperId : undefined
        }
        className={cn(
          orientation === "horizontal" ? "flex flex-wrap gap-4" : "space-y-2"
        )}
      >
        {options.map((option) => {
          const radioId = `${name}-${option.value}`;
          const isChecked = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={handleChange}
                disabled={isDisabled}
                className={cn(
                  "h-4 w-4 border-gray-300 text-uniworld-blue focus:ring-uniworld-blue",
                  error && "border-uniworld-red focus:ring-uniworld-red",
                  isDisabled && "opacity-50 cursor-not-allowed"
                )}
                aria-invalid={!!error}
              />
              <label
                htmlFor={radioId}
                className={cn(
                  "ml-3 block text-sm font-medium text-gray-700",
                  isDisabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      {helperText && !error && (
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm text-uniworld-red">
          {error}
        </p>
      )}
    </div>
  );
};

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, disabled, ...props }, ref) => {
    // Generate a stable ID using useId
    const generatedId = useId();
    const radioId = id || `radio-${generatedId}`;

    return (
      <div className="flex items-center">
        <input
          type="radio"
          id={radioId}
          className={cn(
            "h-4 w-4 border-gray-300 text-uniworld-blue focus:ring-uniworld-blue",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className={cn(
              "ml-3 block text-sm font-medium text-gray-700",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio"; 