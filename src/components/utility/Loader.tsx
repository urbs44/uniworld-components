import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "gold" | "red" | "gray";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "blue",
  className,
}) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const colorClasses = {
    blue: "border-uniworld-blue",
    gold: "border-uniworld-gold",
    red: "border-uniworld-red",
    gray: "border-gray-300",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-solid border-t-transparent",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader; 