"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ErrorMessage } from "./ErrorMessage";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      children,
      label,
      htmlFor,
      helperText,
      error,
      required,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-1", fullWidth && "w-full", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={htmlFor}
            className="block text-sm font-questa-bold text-uniworld-dark-gray"
          >
            {label}
            {required && <span className="text-uniworld-red ml-1">*</span>}
          </label>
        )}
        {children}
        {helperText && !error && (
          <p className="text-sm text-uniworld-dark-gray/70 font-questa">{helperText}</p>
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField }; 