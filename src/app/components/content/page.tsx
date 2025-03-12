"use client";

import React from "react";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Grid from "@/components/layout/Grid";
import Flex from "@/components/layout/Flex";
import { Button } from "@/components/ui/Button";
import FeaturedCard from "@/components/content/FeaturedCard";
import ClickableCard from "@/components/content/ClickableCard";
import CardWithCTA from "@/components/content/CardWithCTA";
import HeroBanner from "@/components/content/HeroBanner";
import ImageGallery from "@/components/content/ImageGallery";
import Carousel from "@/components/content/Carousel";
import Testimonial from "@/components/content/Testimonial";

export default function ContentComponentsPage() {
  // Sample data for components
  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "River cruise ship",
      title: "Luxury River Cruise",
      description: "Experience the beauty of Europe's rivers on our luxury cruise ships."
    },
    {
      src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Cruise ship",
      title: "Ocean Voyages",
      description: "Explore the world's oceans in unparalleled comfort and style."
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Cruise dining",
      title: "Fine Dining",
      description: "Savor exquisite cuisine prepared by world-class chefs."
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Food plate",
      title: "Culinary Experiences",
      description: "Indulge in gourmet meals featuring local ingredients and flavors."
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Cruise cabin",
      title: "Luxurious Accommodations",
      description: "Relax in elegantly appointed staterooms and suites."
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "European city"
      // No title or description for this image to demonstrate conditional overlay
    }
  ];

  const carouselItems = [
    {
      type: "video",
      src: "/videos/uniworld.mp4",
      alt: "Uniworld River Cruise",
      title: "Luxury River Cruises",
      description: "Experience the beauty of Europe's rivers on our luxury cruise ships."
    },
    ...sampleImages.map(image => ({
      type: "image",
      ...image
    }))
  ];

  const testimonials = [
    {
      quote: "Our Uniworld river cruise exceeded all expectations. The ship was beautiful, the staff attentive, and the excursions fascinating.",
      author: "Sarah Johnson",
      role: "Frequent Traveler",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "The attention to detail on our cruise was remarkable. From the personalized service to the thoughtfully designed itineraries, everything was perfect.",
      author: "Michael Chen",
      company: "Travel Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.5
    },
    {
      quote: "As a solo traveler, I felt completely at home on my Uniworld cruise. The crew made me feel welcome, and I made wonderful friends along the way.",
      author: "Emma Rodriguez",
      role: "Solo Explorer",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner with Image */}
      <HeroBanner
        title="Content Components"
        subtitle="Uniworld Component Library"
        description="These reusable display components serve as building blocks for creating engaging and dynamic content across the Uniworld website."
        backgroundImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        textColor="light"
        height="medium"
        ctas={[
          {
            text: "View Documentation",
            href: "/docs",
            variant: "primary"
          },
          {
            text: "Explore Examples",
            href: "#examples",
            variant: "light"
          }
        ]}
      />

      {/* Hero Banner with Video */}
      <HeroBanner
        title="Luxury River Cruises"
        subtitle="Explore Europe's Waterways"
        description="Discover the heart of Europe from the unique perspective of its historic rivers."
        backgroundVideo="/videos/uniworld.mp4"
        backgroundVideoMobile="/videos/uniworld.mp4"
        backgroundOverlay={true}
        overlayOpacity={0.6}
        textColor="light"
        height="large"
        ctas={[
          {
            text: "Book Your Cruise",
            href: "#",
            variant: "primary"
          },
          {
            text: "View Destinations",
            href: "#",
            variant: "light"
          }
        ]}
      />

      {/* Card Variations */}
      <SectionWrapper backgroundColor="white" paddingY="lg" id="examples">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Card Variations</h2>
          <p className="mb-8">
            Different card components for displaying content with various call-to-action options.
          </p>
          
          <Grid cols={1} colsMd={3} gap={6} className="mb-12">
            <FeaturedCard
              title="Featured Card"
              description="This card highlights important content with a gold accent and elevation."
              image="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              imageAlt="River cruise"
              ctaText="Learn More"
              ctaType="button"
              featured={true}
            />
            
            <ClickableCard
              title="Clickable Card"
              description="This entire card is clickable and navigates to a new page."
              image="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              imageAlt="Cruise ship"
              href="#"
              variant="default"
            />
            
            <CardWithCTA
              title="Card with CTA"
              description="This card features a prominent call-to-action that can be a button, link, or arrow."
              image="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              imageAlt="Cruise dining"
              ctaText="Book Now"
              ctaType="arrow"
              ctaVariant="primary"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Image Gallery */}
      <SectionWrapper backgroundColor="light-gray" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Image Gallery</h2>
          <p className="mb-8">
            A responsive image gallery with lightbox functionality for viewing full-size images.
          </p>
          
          <ImageGallery
            images={sampleImages}
            layout="grid"
            columns={3}
            gap={4}
            aspectRatio="square"
            className="mb-12"
          />
        </Container>
      </SectionWrapper>

      {/* Carousel */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Carousel</h2>
          <p className="mb-8">
            A versatile carousel component for displaying images, videos, or any elements in a slider format.
          </p>
          
          <div className="mb-12">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              showDots={true}
              slidesToShow={1}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {(item.title || item.description) && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                        {item.title && <h3 className="text-xl font-questa-bold text-white mb-2">{item.title}</h3>}
                        {item.description && <p className="text-white">{item.description}</p>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper backgroundColor="light-blue" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Testimonials</h2>
          <p className="mb-8">
            Customer testimonials with ratings, displayed in various styles.
          </p>
          
          <Grid cols={1} colsMd={3} gap={6} className="mb-12">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                variant={index === 0 ? "featured" : index === 1 ? "card" : "default"}
                imagePosition={index === 0 ? "top" : "left"}
              />
            ))}
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Documentation Link */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Documentation</h2>
            <p className="mb-6">
              For detailed documentation on these components, visit the documentation section.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/docs'}>
              View Documentation
            </Button>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
