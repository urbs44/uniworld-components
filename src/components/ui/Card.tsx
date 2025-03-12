import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  variant?: "default" | "outline" | "elevated" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  as?: "div" | "article" | "li";
}

/**
 * Card component for displaying content in a contained card format
 */
const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition = "top",
  variant = "default",
  padding = "md",
  onClick,
  href,
  footer,
  header,
  as: Component = "div",
}) => {
  const variantClasses = {
    default: "bg-uniworld-white border border-gray-200",
    outline: "bg-transparent border border-uniworld-blue",
    elevated: "bg-uniworld-white shadow-lg",
    flat: "bg-uniworld-light-gray",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const imagePositionClasses = {
    top: "flex-col",
    bottom: "flex-col-reverse",
    left: "flex-row",
    right: "flex-row-reverse",
  };

  const imageWidthClasses = {
    top: "w-full",
    bottom: "w-full",
    left: "w-1/3",
    right: "w-1/3",
  };

  const contentWidthClasses = {
    top: "w-full",
    bottom: "w-full",
    left: "w-2/3",
    right: "w-2/3",
  };

  const CardWrapper = href ? "a" : Component;
  const wrapperProps = href ? { href } : {};
  const interactiveClasses = onClick || href ? "cursor-pointer hover:shadow-md transition-shadow duration-200" : "";

  return (
    <CardWrapper
      className={cn(
        "rounded-lg overflow-hidden flex",
        imagePositionClasses[imagePosition],
        variantClasses[variant],
        interactiveClasses,
        className
      )}
      onClick={onClick}
      {...wrapperProps}
    >
      {image && (
        <div className={cn("overflow-hidden", imageWidthClasses[imagePosition])}>
          <img
            src={image}
            alt={imageAlt || title || "Card image"}
            className={cn(
              "object-cover",
              imagePosition === "top" || imagePosition === "bottom" ? "w-full h-48" : "w-full h-full"
            )}
          />
        </div>
      )}

      <div className={cn(contentWidthClasses[imagePosition], "flex flex-col")}>
        {header && <div className="border-b border-gray-200 p-4">{header}</div>}

        <div className={paddingClasses[padding]}>
          {title && <h3 className="text-lg font-questa-bold mb-2">{title}</h3>}
          {description && <p className="text-uniworld-dark-gray mb-4">{description}</p>}
          {children}
        </div>

        {footer && (
          <div className="mt-auto border-t border-gray-200 p-4">
            {footer}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
