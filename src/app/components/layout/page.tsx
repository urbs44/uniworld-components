"use client";

import React from "react";
import Container from "@/components/layout/Container";
import Grid from "@/components/layout/Grid";
import Flex from "@/components/layout/Flex";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";

export default function LayoutComponentsPage() {
  return (
    <div className="min-h-screen">
      {/* Container Example */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h1 className="text-3xl font-libel-bold mb-8 text-uniworld-blue">Layout Components</h1>
          
          <p className="mb-12 text-lg">
            These layout components provide the structural foundation for building consistent and responsive layouts across the Uniworld website.
          </p>
          
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

      {/* Documentation Link */}
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">Documentation</h2>
            <p className="mb-6">
              For detailed documentation on these components, visit the documentation section.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/docs/layout-components'}>
              View Documentation
            </Button>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
