"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface CardWithCTAProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  ctaText: string;
  ctaLink?: string;
  ctaType: "button" | "link" | "arrow";
  ctaVariant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "danger" | "red" | "yellow" | "light";
  ctaSize?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "outline" | "elevated" | "flat";
  children?: React.ReactNode;
  onClick?: () => void;
}

/**
 * CardWithCTA component for content with a prominent call-to-action
 */
const CardWithCTA: React.FC<CardWithCTAProps> = ({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "top",
  ctaText,
  ctaLink,
  ctaType,
  ctaVariant = "primary",
  ctaSize = "md",
  className,
  variant = "default",
  children,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (ctaLink) {
      window.location.href = ctaLink;
    }
  };

  const renderCTA = () => {
    if (ctaType === "button") {
      return (
        <Button 
          variant={ctaVariant} 
          size={ctaSize} 
          onClick={ctaLink ? undefined : handleClick}
          {...(ctaLink ? { as: "a", href: ctaLink } : {})}
          fullWidth
        >
          {ctaText}
        </Button>
      );
    } else if (ctaType === "link") {
      return (
        <Link 
          href={ctaLink || "#"} 
          className={cn(
            "text-uniworld-blue font-questa-bold hover:underline",
            ctaVariant === "primary" && "text-uniworld-blue",
            ctaVariant === "secondary" && "text-uniworld-dark-gray",
            ctaVariant === "red" && "text-uniworld-red",
            ctaVariant === "yellow" && "text-uniworld-yellow"
          )}
          onClick={ctaLink ? undefined : handleClick}
        >
          {ctaText} →
        </Link>
      );
    } else if (ctaType === "arrow") {
      return (
        <div className="flex justify-between items-center w-full">
          <span className="font-questa-bold">{ctaText}</span>
          <div 
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full text-white cursor-pointer",
              ctaVariant === "primary" && "bg-uniworld-blue hover:bg-uniworld-blue-hover",
              ctaVariant === "secondary" && "bg-uniworld-dark-gray hover:bg-gray-600",
              ctaVariant === "red" && "bg-uniworld-red hover:bg-red-700",
              ctaVariant === "yellow" && "bg-uniworld-yellow hover:bg-yellow-600 text-uniworld-blue"
            )}
            onClick={handleClick}
          >
            <span className="text-xl">→</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card
      title={title}
      description={description}
      image={image}
      imageAlt={imageAlt}
      imagePosition={imagePosition}
      variant={variant}
      className={cn(
        "transition-all duration-300",
        className
      )}
      footer={renderCTA()}
    >
      {children}
    </Card>
  );
};

export default CardWithCTA;
