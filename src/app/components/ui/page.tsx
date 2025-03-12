"use client";

import React from "react";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Grid from "@/components/layout/Grid";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function UIComponentsPage() {
  return (
    <div className="min-h-screen">
      {/* Introduction */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h1 className="text-3xl font-libel-bold mb-8 text-uniworld-blue">UI Components</h1>
          
          <p className="mb-12 text-lg">
            These UI components provide the building blocks for creating interactive and visually consistent user interfaces across the Uniworld website.
          </p>
        </Container>
      </SectionWrapper>

      {/* Button Examples */}
      <SectionWrapper backgroundColor="light-gray" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Button Component</h2>
          <p className="mb-8">
            The Button component provides a consistent way to trigger actions across the site.
          </p>
          
          <h3 className="text-xl font-questa-bold mb-4">Button Variants</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="red">Red</Button>
            <Button variant="yellow">Yellow</Button>
            <Button variant="light">Light</Button>
          </div>
          
          <h3 className="text-xl font-questa-bold mb-4">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="icon">
              <span>+</span>
            </Button>
          </div>
          
          <h3 className="text-xl font-questa-bold mb-4">Button States</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
            <Button fullWidth>Full Width</Button>
          </div>
          
          <h3 className="text-xl font-questa-bold mb-4">Button with Icons</h3>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button leftIcon={<span>←</span>}>Previous</Button>
            <Button rightIcon={<span>→</span>}>Next</Button>
          </div>
        </Container>
      </SectionWrapper>

      {/* Card Examples */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Card Component</h2>
          <p className="mb-8">
            The Card component provides a flexible container for displaying content in a card format.
          </p>
          
          <Grid cols={1} colsMd={2} colsLg={3} gap={6} className="mb-12">
            <Card
              title="Default Card"
              description="This is a default card with an image at the top."
              image="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              imageAlt="River cruise"
              variant="default"
            >
              <Button size="sm">Learn More</Button>
            </Card>
            
            <Card
              title="Outlined Card"
              description="This is an outlined card with no image."
              variant="outline"
              footer={<Button variant="primary" size="sm" fullWidth>Book Now</Button>}
            />
            
            <Card
              title="Elevated Card"
              description="This is an elevated card with an image on the left."
              image="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              imageAlt="Cruise ship"
              imagePosition="left"
              variant="elevated"
            >
              <p className="text-sm text-uniworld-dark-gray">Starting from $2,999</p>
            </Card>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Documentation Link */}
      <SectionWrapper backgroundColor="light-gray" paddingY="lg">
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
