import React from "react";
import Container from "@/components/layout/Container";
import Grid from "@/components/layout/Grid";
import Flex from "@/components/layout/Flex";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LayoutComponentsExample() {
  return (
    <div className="min-h-screen">
      {/* Container Example */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h1 className="text-3xl font-libel-bold mb-8 text-uniworld-blue">Layout Components</h1>
          
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Container Component</h2>
          <p className="mb-8">
            The Container component provides a responsive wrapper with consistent maximum widths and padding.
          </p>
          
          <div className="bg-uniworld-light-gray p-4 mb-12 rounded">
            <p className="text-center">This content is inside a Container</p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Grid Example */}
      <SectionWrapper backgroundColor="light-gray" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Grid Component</h2>
          <p className="mb-8">
            The Grid component provides a responsive grid layout system.
          </p>
          
          <Grid cols={1} colsMd={2} colsLg={3} gap={4} className="mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-uniworld-white p-6 rounded shadow-sm">
                <p className="text-center">Grid Item {item}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Flex Example */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Flex Component</h2>
          <p className="mb-8">
            The Flex component provides a flexible layout system.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-questa-bold mb-2">Row (default)</h3>
            <Flex justify="between" items="center" gap={4} className="bg-uniworld-light-gray p-4 rounded">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-uniworld-white p-4 rounded shadow-sm">
                  <p className="text-center">Flex Item {item}</p>
                </div>
              ))}
            </Flex>
          </div>
          
          <div className="mb-12">
            <h3 className="text-lg font-questa-bold mb-2">Column</h3>
            <Flex direction="col" gap={4} className="bg-uniworld-light-gray p-4 rounded">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-uniworld-white p-4 rounded shadow-sm">
                  <p className="text-center">Flex Item {item}</p>
                </div>
              ))}
            </Flex>
          </div>
        </Container>
      </SectionWrapper>

      {/* SectionWrapper Example */}
      <SectionWrapper backgroundColor="light-blue" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">SectionWrapper Component</h2>
          <p className="mb-8">
            The SectionWrapper component provides consistent padding and background colors for content sections.
          </p>
          
          <div className="mb-12">
            <p className="text-center">This content is inside a SectionWrapper with light-blue background</p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Card Example */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Card Component</h2>
          <p className="mb-8">
            The Card component provides a flexible container for displaying content.
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
    </div>
  );
}
