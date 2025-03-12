"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Link from "next/link";

interface ClickableCardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  href: string;
  className?: string;
  variant?: "default" | "outline" | "elevated" | "flat";
  children?: React.ReactNode;
  target?: "_blank" | "_self";
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * ClickableCard component for navigation and interactive content
 */
const ClickableCard: React.FC<ClickableCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "top",
  href,
  className,
  variant = "default",
  children,
  target = "_self",
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} target={target} onClick={handleClick} className="block">
      <Card
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        variant={variant}
        className={cn(
          "cursor-pointer transition-all duration-300 hover:shadow-lg",
          className
        )}
        footer={
          <div className="flex justify-end items-center text-uniworld-blue">
            <span className="text-sm font-questa-bold">View Details</span>
            <span className="ml-2">→</span>
          </div>
        }
      >
        {children}
      </Card>
    </Link>
  );
};

export default ClickableCard;
