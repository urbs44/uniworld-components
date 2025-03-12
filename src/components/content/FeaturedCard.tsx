"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaType?: "button" | "link" | "arrow";
  className?: string;
  featured?: boolean;
  onClick?: () => void;
}

/**
 * FeaturedCard component for highlighting important content
 */
const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  image,
  imageAlt = "",
  ctaText = "Learn More",
  ctaLink,
  ctaType = "button",
  className,
  featured = true,
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
          variant={featured ? "primary" : "secondary"} 
          size="md" 
          onClick={ctaLink ? undefined : handleClick}
          {...(ctaLink ? { as: "a", href: ctaLink } : {})}
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
            featured && "text-uniworld-gold"
          )}
          onClick={ctaLink ? undefined : handleClick}
        >
          {ctaText} →
        </Link>
      );
    } else if (ctaType === "arrow") {
      return (
        <div 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full bg-uniworld-blue text-white hover:bg-uniworld-blue-hover cursor-pointer",
            featured && "bg-uniworld-gold hover:bg-uniworld-yellow"
          )}
          onClick={handleClick}
        >
          <span className="text-xl">→</span>
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
      variant={featured ? "elevated" : "default"}
      className={cn(
        "transition-all duration-300",
        featured && "transform hover:-translate-y-1 border-l-4 border-uniworld-gold",
        className
      )}
      footer={renderCTA()}
      onClick={onClick && !ctaLink ? handleClick : undefined}
    />
  );
};

export default FeaturedCard;
