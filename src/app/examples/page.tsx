import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Grid from "@/components/layout/Grid";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ExamplesPage() {
  const examples = [
    {
      title: "Layout Components",
      description: "Container, Grid, Flex, SectionWrapper, and Card components for building layouts.",
      href: "/examples/layout-components",
    },
    // More example categories can be added here in the future
  ];

  return (
    <div className="min-h-screen">
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h1 className="text-3xl font-libel-bold mb-8 text-uniworld-blue">Component Examples</h1>
          
          <p className="mb-12 text-lg">
            Browse through our component examples to see how they can be used in your projects.
          </p>
          
          <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
            {examples.map((example, index) => (
              <Card
                key={index}
                title={example.title}
                description={example.description}
                variant="elevated"
                footer={
                  <Link href={example.href} className="w-full block">
                    <Button variant="primary" fullWidth>
                      View Examples
                    </Button>
                  </Link>
                }
              />
            ))}
          </Grid>
        </Container>
      </SectionWrapper>
    </div>
  );
}
