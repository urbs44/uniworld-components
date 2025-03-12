"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  fullWidth?: boolean;
  onValidSubmit?: (data: Record<string, any>) => void;
  validateOnSubmit?: boolean;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, fullWidth = false, onValidSubmit, validateOnSubmit = true, onSubmit, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (onSubmit) {
        onSubmit(e);
      }
      
      if (onValidSubmit && validateOnSubmit) {
        const form = e.currentTarget;
        const isValid = form.checkValidity();
        
        if (isValid) {
          const formData = new FormData(form);
          const data: Record<string, any> = {};
          
          formData.forEach((value, key) => {
            // Handle multiple values for the same key (like checkboxes)
            if (data[key]) {
              if (Array.isArray(data[key])) {
                data[key].push(value);
              } else {
                data[key] = [data[key], value];
              }
            } else {
              data[key] = value;
            }
          });
          
          onValidSubmit(data);
        }
      }
    };
    
    return (
      <form
        ref={ref}
        className={cn("space-y-6", fullWidth && "w-full", className)}
        onSubmit={handleSubmit}
        noValidate={!validateOnSubmit}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = "Form";

export { Form }; 