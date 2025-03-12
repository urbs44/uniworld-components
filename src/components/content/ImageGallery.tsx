"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Grid from "@/components/layout/Grid";
import { Button } from "@/components/ui/Button";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  layout?: "grid" | "masonry";
  columns?: 1 | 2 | 3 | 4;
  gap?: 2 | 4 | 6 | 8;
  showThumbnails?: boolean;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  lightboxEnabled?: boolean;
}

/**
 * ImageGallery component for displaying collections of images with lightbox functionality
 */
const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  layout = "grid",
  columns = 3,
  gap = 4,
  showThumbnails = true,
  className,
  aspectRatio = "square",
  lightboxEnabled = true,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThumbnailsInLightbox, setShowThumbnailsInLightbox] = useState(false);

  // Always show thumbnails in lightbox
  useEffect(() => {
    setShowThumbnailsInLightbox(true);
  }, []);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    auto: "",
  };

  const openLightbox = useCallback((index: number) => {
    if (lightboxEnabled) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, [lightboxEnabled]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  }, [closeLightbox, goToPrevious, goToNext]);

  // Add keyboard event listener for lightbox navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") {
          setLightboxOpen(false);
          document.body.style.overflow = "";
        } else if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <div className={cn("w-full", className)}>
      {layout === "grid" ? (
        <Grid cols={1} colsMd={columns} gap={gap}>
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "overflow-hidden rounded-lg cursor-pointer",
                aspectRatioClasses[aspectRatio]
              )}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Grid>
      ) : (
        <div className={cn("columns-1 md:columns-" + columns, "gap-" + gap)}>
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white z-10 p-2"
            onClick={closeLightbox}
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white z-10">
            {currentImageIndex + 1} of {images.length}
          </div>

          {/* Main image - full size in landscape mode */}
          <div
            className="flex-1 flex items-center justify-center p-4 max-h-[calc(100vh-200px)] mobile-landscape-fullsize"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Image info - positioned at bottom on portrait mobile/tablet, overlaid in landscape */}
          {(images[currentImageIndex].title || images[currentImageIndex].description) && (
            <div
              className="bg-black bg-opacity-70 text-white p-4 md:relative md:bottom-auto fixed bottom-0 left-0 right-0 mobile-landscape-overlay"
              onClick={(e) => e.stopPropagation()}
            >
              {images[currentImageIndex].title && (
                <h3 className="text-xl font-questa-bold mb-1">
                  {images[currentImageIndex].title}
                </h3>
              )}
              {images[currentImageIndex].description && (
                <p className="text-sm text-gray-300">
                  {images[currentImageIndex].description}
                </p>
              )}
            </div>
          )}

          {/* Thumbnails - completely removed from DOM in mobile landscape mode */}
          <div className="mobile-landscape-hide">
            {showThumbnails && (
              <div
                className="bg-black bg-opacity-70 p-2 hidden md:flex overflow-x-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-16 w-24 flex-shrink-0 mx-1 cursor-pointer overflow-hidden rounded",
                      currentImageIndex === index && "ring-2 ring-uniworld-gold"
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image.thumbnail || image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
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
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
