"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      fullWidth = false,
      id,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    // Generate a stable ID using useId
    const generatedId = useId();
    const textareaId = id || `textarea-${generatedId}`;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className={cn("space-y-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          rows={rows}
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm focus:border-uniworld-blue focus:ring-uniworld-blue sm:text-sm",
            error && "border-uniworld-red focus:border-uniworld-red focus:ring-uniworld-red",
            disabled && "opacity-50 cursor-not-allowed bg-gray-100",
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
  }
);

TextArea.displayName = "TextArea";

export { TextArea }; 