"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

const ErrorMessage = React.forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ className, message, children, ...props }, ref) => {
    if (!message && !children) return null;
    
    return (
      <p
        ref={ref}
        className={cn("text-sm text-uniworld-red mt-1 font-questa", className)}
        {...props}
      >
        {message || children}
      </p>
    );
  }
);

ErrorMessage.displayName = "ErrorMessage";

export { ErrorMessage }; 