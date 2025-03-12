"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface CTAButton {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "danger" | "red" | "yellow" | "light";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
}

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundVideoMobile?: string;
  backgroundOverlay?: boolean;
  overlayOpacity?: number;
  textColor?: "light" | "dark";
  textAlignment?: "left" | "center" | "right";
  contentWidth?: "narrow" | "medium" | "wide" | "full";
  height?: "small" | "medium" | "large" | "full";
  ctas?: CTAButton[];
  className?: string;
}

/**
 * HeroBanner component for large header sections with background media and CTAs
 */
const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  backgroundVideoMobile,
  backgroundOverlay = true,
  overlayOpacity = 0.5,
  textColor = "light",
  textAlignment = "center",
  contentWidth = "medium",
  height = "large",
  ctas = [],
  className,
}) => {
  const contentWidthClasses = {
    narrow: "max-w-md",
    medium: "max-w-2xl",
    wide: "max-w-4xl",
    full: "w-full",
  };

  const heightClasses = {
    small: "min-h-[300px] md:min-h-[400px]",
    medium: "min-h-[400px] md:min-h-[500px]",
    large: "min-h-[500px] md:min-h-[600px]",
    full: "min-h-screen",
  };

  const textAlignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const textColorClasses = {
    light: "text-white",
    dark: "text-uniworld-dark",
  };

  const renderBackground = () => {
    if (backgroundVideo) {
      return (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {backgroundVideoMobile && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover md:hidden"
            >
              <source src={backgroundVideoMobile} type="video/mp4" />
            </video>
          )}
        </>
      );
    } else if (backgroundImage) {
      return (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      );
    }
    return (
      <div className="absolute inset-0 w-full h-full bg-uniworld-blue" />
    );
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Background */}
      {renderBackground()}
      
      {/* Overlay */}
      {backgroundOverlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <Container className="relative h-full z-10">
        <div
          className={cn(
            "flex flex-col justify-center h-full py-12",
            textAlignmentClasses[textAlignment]
          )}
        >
          <div className={cn(contentWidthClasses[contentWidth])}>
            {subtitle && (
              <p
                className={cn(
                  "text-lg md:text-xl font-questa mb-2",
                  textColorClasses[textColor]
                )}
              >
                {subtitle}
              </p>
            )}
            <h1
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl font-libel-bold mb-4",
                textColorClasses[textColor]
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "text-base md:text-lg mb-8",
                  textColorClasses[textColor]
                )}
              >
                {description}
              </p>
            )}
            {ctas.length > 0 && (
              <div
                className={cn(
                  "flex flex-wrap gap-4",
                  textAlignment === "center" && "justify-center",
                  textAlignment === "right" && "justify-end"
                )}
              >
                {ctas.map((cta, index) => (
                  <Button
                    key={index}
                    variant={cta.variant || "primary"}
                    size={cta.size || "lg"}
                    onClick={cta.onClick}
                    {...(cta.href ? { as: "a", href: cta.href } : {})}
                  >
                    {cta.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
