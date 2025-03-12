"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  maxRating?: number;
  ratingIcon?: "star" | "heart" | "circle";
  variant?: "default" | "card" | "minimal" | "featured";
  className?: string;
  imagePosition?: "left" | "top" | "right";
}

/**
 * Testimonial component for displaying customer quotes with ratings
 */
const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 0,
  maxRating = 5,
  ratingIcon = "star",
  variant = "default",
  className,
  imagePosition = "left",
}) => {
  const renderRating = () => {
    if (rating <= 0) return null;

    const icons = [];
    const IconComponent = getRatingIcon(ratingIcon);

    // Filled icons
    for (let i = 0; i < Math.floor(rating); i++) {
      icons.push(
        <IconComponent key={`filled-${i}`} className="text-uniworld-gold" filled />
      );
    }

    // Half-filled icon (if rating has decimal part)
    if (rating % 1 !== 0) {
      icons.push(
        <IconComponent key="half-filled" className="text-uniworld-gold" halfFilled />
      );
    }

    // Empty icons
    const emptyCount = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyCount; i++) {
      icons.push(
        <IconComponent key={`empty-${i}`} className="text-gray-300" />
      );
    }

    return (
      <div className="flex items-center mb-4">
        {icons}
        {rating > 0 && (
          <span className="ml-2 text-sm text-gray-500">
            {rating.toFixed(rating % 1 === 0 ? 0 : 1)} / {maxRating}
          </span>
        )}
      </div>
    );
  };

  const getRatingIcon = (icon: "star" | "heart" | "circle") => {
    switch (icon) {
      case "star":
        return StarIcon;
      case "heart":
        return HeartIcon;
      case "circle":
        return CircleIcon;
      default:
        return StarIcon;
    }
  };

  const renderAvatar = () => {
    if (!avatar) return null;

    return (
      <div className={cn(
        "flex-shrink-0",
        imagePosition === "left" && "mr-4",
        imagePosition === "top" && "mb-4",
        imagePosition === "right" && "ml-4",
        variant === "featured" && "border-4 border-uniworld-gold rounded-full overflow-hidden"
      )}>
        <img
          src={avatar}
          alt={`${author}'s avatar`}
          className={cn(
            "rounded-full object-cover",
            variant === "minimal" ? "w-10 h-10" : "w-16 h-16"
          )}
        />
      </div>
    );
  };

  const renderQuote = () => (
    <blockquote className={cn(
      "relative",
      variant === "card" && "italic",
      variant === "featured" && "text-lg font-questa"
    )}>
      {variant === "default" && (
        <svg
          className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-10 w-10 text-uniworld-light-blue opacity-30"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      )}
      <p className={cn(
        "relative",
        variant === "default" && "pl-8",
        variant === "featured" && "text-uniworld-blue"
      )}>
        {quote}
      </p>
    </blockquote>
  );

  const renderAuthorInfo = () => (
    <div className={cn(
      "mt-4",
      variant === "featured" && "text-uniworld-dark-gray"
    )}>
      <p className="font-questa-bold">{author}</p>
      {(role || company) && (
        <p className="text-sm text-gray-500">
          {role && <span>{role}</span>}
          {role && company && <span> • </span>}
          {company && <span>{company}</span>}
        </p>
      )}
    </div>
  );

  return (
    <div
      className={cn(
        "relative",
        variant === "card" && "bg-white p-6 rounded-lg shadow-md",
        variant === "featured" && "bg-uniworld-light-gray p-8 rounded-lg border-l-4 border-uniworld-gold",
        className
      )}
    >
      {renderRating()}
      
      <div className={cn(
        "flex",
        imagePosition === "top" && "flex-col items-center text-center",
        imagePosition === "left" && "flex-row",
        imagePosition === "right" && "flex-row-reverse"
      )}>
        {renderAvatar()}
        
        <div className="flex-1">
          {renderQuote()}
          {renderAuthorInfo()}
        </div>
      </div>
    </div>
  );
};

// Rating Icons
const StarIcon: React.FC<{ className?: string; filled?: boolean; halfFilled?: boolean }> = ({ 
  className, 
  filled = false,
  halfFilled = false
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled || halfFilled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-5 h-5", className)}
  >
    {halfFilled ? (
      <>
        <defs>
          <linearGradient id="halfFilled" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="url(#halfFilled)"
          stroke="currentColor"
        />
      </>
    ) : (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    )}
  </svg>
);

const HeartIcon: React.FC<{ className?: string; filled?: boolean; halfFilled?: boolean }> = ({ 
  className, 
  filled = false,
  halfFilled = false
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled || halfFilled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-5 h-5", className)}
  >
    {halfFilled ? (
      <>
        <defs>
          <linearGradient id="halfFilledHeart" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          fill="url(#halfFilledHeart)"
          stroke="currentColor"
        />
      </>
    ) : (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    )}
  </svg>
);

const CircleIcon: React.FC<{ className?: string; filled?: boolean; halfFilled?: boolean }> = ({ 
  className, 
  filled = false,
  halfFilled = false
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled || halfFilled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-5 h-5", className)}
  >
    {halfFilled ? (
      <>
        <defs>
          <linearGradient id="halfFilledCircle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="url(#halfFilledCircle)"
          stroke="currentColor"
        />
      </>
    ) : (
      <circle cx="12" cy="12" r="10" />
    )}
  </svg>
);

export default Testimonial;
