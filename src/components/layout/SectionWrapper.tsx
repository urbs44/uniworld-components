import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: "white" | "light-gray" | "light-blue" | "blue" | "gold" | "none";
  paddingY?: "none" | "sm" | "md" | "lg" | "xl";
  paddingX?: "none" | "sm" | "md" | "lg" | "xl";
  marginY?: "none" | "sm" | "md" | "lg" | "xl";
  marginBottom?: "none" | "sm" | "md" | "lg" | "xl";
  marginTop?: "none" | "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article" | "main";
}

/**
 * SectionWrapper component for wrapping content sections with consistent spacing
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
  backgroundColor = "white",
  paddingY = "lg",
  paddingX = "none",
  marginY = "none",
  marginBottom,
  marginTop,
  as: Component = "section",
}) => {
  const backgroundClasses = {
    white: "bg-uniworld-white",
    "light-gray": "bg-uniworld-light-gray",
    "light-blue": "bg-uniworld-light-blue",
    blue: "bg-uniworld-blue text-uniworld-white",
    gold: "bg-uniworld-gold text-uniworld-white",
    none: "",
  };

  const paddingYClasses = {
    none: "py-0",
    sm: "py-4",
    md: "py-8",
    lg: "py-12 md:py-16",
    xl: "py-16 md:py-24",
  };

  const paddingXClasses = {
    none: "px-0",
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
    xl: "px-12",
  };

  const marginYClasses = {
    none: "my-0",
    sm: "my-4",
    md: "my-8",
    lg: "my-12",
    xl: "my-16",
  };

  const marginBottomClasses = {
    none: "mb-0",
    sm: "mb-4",
    md: "mb-8",
    lg: "mb-12",
    xl: "mb-16",
  };

  const marginTopClasses = {
    none: "mt-0",
    sm: "mt-4",
    md: "mt-8",
    lg: "mt-12",
    xl: "mt-16",
  };

  return (
    <Component
      id={id}
      className={cn(
        backgroundClasses[backgroundColor],
        paddingYClasses[paddingY],
        paddingXClasses[paddingX],
        marginY !== "none" && marginYClasses[marginY],
        marginBottom && marginBottomClasses[marginBottom],
        marginTop && marginTopClasses[marginTop],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default SectionWrapper;
