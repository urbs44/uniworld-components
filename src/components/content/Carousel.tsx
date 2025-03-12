"use client";

import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infiniteLoop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  showStatus?: boolean;
  centerMode?: boolean;
  centerPadding?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  className?: string;
  arrowClassName?: string;
  dotClassName?: string;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
      centerMode?: boolean;
      centerPadding?: string;
    };
  }[];
}

/**
 * Carousel component for displaying images, videos, or any content in a slider format
 */
const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  infiniteLoop = true,
  showArrows = true,
  showDots = true,
  showStatus = false,
  centerMode = false,
  centerPadding = "50px",
  slidesToShow = 1,
  slidesToScroll = 1,
  speed = 500,
  className,
  arrowClassName,
  dotClassName,
  responsive = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Simplified settings without responsive handling for now
  const settings = {
    slidesToShow,
    slidesToScroll,
    centerMode,
    centerPadding,
  };

  const goToPreviousSlide = useCallback(() => {
    if (currentSlide === 0) {
      if (infiniteLoop) {
        setCurrentSlide(children.length - settings.slidesToScroll);
      }
    } else {
      setCurrentSlide((prev) =>
        Math.max(0, prev - settings.slidesToScroll)
      );
    }
  }, [currentSlide, children.length, infiniteLoop, settings.slidesToScroll]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide >= children.length - settings.slidesToShow) {
      if (infiniteLoop) {
        setCurrentSlide(0);
      }
    } else {
      setCurrentSlide((prev) =>
        Math.min(
          children.length - settings.slidesToShow,
          prev + settings.slidesToScroll
        )
      );
    }
  }, [
    currentSlide,
    children.length,
    infiniteLoop,
    settings.slidesToShow,
    settings.slidesToScroll,
  ]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Handle mouse/touch events for dragging
  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragDistance(0);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (isDragging) {
      const distance = clientX - dragStartX;
      setDragDistance(distance);
    }
  }, [isDragging, dragStartX]);

  const handleDragEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      
      // Determine if we should navigate based on drag distance
      const threshold = 50; // Minimum drag distance to trigger slide change
      
      if (dragDistance > threshold) {
        goToPreviousSlide();
      } else if (dragDistance < -threshold) {
        goToNextSlide();
      }
      
      setDragDistance(0);
    }
  }, [isDragging, dragDistance, goToPreviousSlide, goToNextSlide]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleDragMove(e.clientX);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleDragEnd();
    }
  }, [isDragging, handleDragEnd]);

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Calculate the transform value for the carousel
  const getTransformValue = useCallback(() => {
    if (!carouselRef.current) return "translateX(0)";
    
    const slideWidth = carouselRef.current.clientWidth / settings.slidesToShow;
    const baseTransform = -(currentSlide * slideWidth);
    const dragOffset = isDragging ? dragDistance : 0;
    
    return `translateX(${baseTransform + dragOffset}px)`;
  }, [carouselRef, settings.slidesToShow, currentSlide, isDragging, dragDistance]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={cn(
            "flex",
            !isDragging && "transition-transform",
            !isDragging && `duration-${speed}`
          )}
          style={{
            transform: getTransformValue(),
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0",
                settings.centerMode && "px-[" + settings.centerPadding + "]"
              )}
              style={{
                width: `${100 / settings.slidesToShow}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <button
            className={cn(
              "absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all",
              arrowClassName
            )}
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousSlide();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className={cn(
              "absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all",
              arrowClassName
            )}
            onClick={(e) => {
              e.stopPropagation();
              goToNextSlide();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Dots navigation */}
      {showDots && (
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(
              (children.length - settings.slidesToShow) / settings.slidesToScroll
            ) + 1,
          }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 mx-1 rounded-full transition-all",
                index * settings.slidesToScroll === currentSlide
                  ? "bg-uniworld-blue"
                  : "bg-gray-300 hover:bg-gray-400",
                dotClassName
              )}
              onClick={() => goToSlide(index * settings.slidesToScroll)}
            />
          ))}
        </div>
      )}

      {/* Status indicator */}
      {showStatus && (
        <div className="text-center mt-2 text-sm text-gray-500">
          {currentSlide + 1} of{" "}
          {Math.min(
            children.length,
            children.length - settings.slidesToShow + 1
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
