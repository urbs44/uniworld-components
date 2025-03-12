"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Grid from "@/components/layout/Grid";
import Flex from "@/components/layout/Flex";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LayoutComponentsDocumentation() {
  return (
    <div className="min-h-screen">
      <SectionWrapper backgroundColor="white" paddingY="lg">
        <Container>
          <h1 className="text-3xl font-libel-bold mb-8 text-uniworld-blue">Layout Components Documentation</h1>
          
          <p className="mb-12 text-lg">
            These layout components provide the structural foundation for building consistent and responsive layouts across the Uniworld website.
          </p>
          
          {/* Container Documentation */}
          <div className="mb-16">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue border-b border-uniworld-light-gray pb-2">Container</h2>
            <p className="mb-4">
              The Container component provides a responsive wrapper with consistent maximum widths and padding.
            </p>
            
            <h3 className="text-xl font-questa-bold mb-2">Props</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>children:</strong> React.ReactNode - The content to be wrapped by the container</li>
              <li><strong>className:</strong> string - Additional CSS classes</li>
              <li><strong>maxWidth:</strong> "sm" | "md" | "lg" | "xl" | "2xl" | "full" - Maximum width of the container (default: "xl")</li>
              <li><strong>padding:</strong> boolean - Whether to apply horizontal padding (default: true)</li>
            </ul>
            
            <h3 className="text-xl font-questa-bold mb-2">Example Usage</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
              <p className="mb-2">
                The Container component is typically used to wrap page content with consistent width constraints.
              </p>
              
              <p className="mb-2">
                For example, to create a page with content that has a large maximum width:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Import the Container component</li>
                <li>Use Container with maxWidth="lg" and padding=true</li>
                <li>Place your content inside the Container</li>
              </ul>
              
              <p className="italic text-sm">
                See the examples page for a live demonstration of this component.
              </p>
            </div>
          </div>
          
          {/* Grid Documentation */}
          <div className="mb-16">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue border-b border-uniworld-light-gray pb-2">Grid</h2>
            <p className="mb-4">
              The Grid component provides a responsive grid layout system based on CSS Grid.
            </p>
            
            <h3 className="text-xl font-questa-bold mb-2">Props</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>children:</strong> React.ReactNode - The grid items</li>
              <li><strong>className:</strong> string - Additional CSS classes</li>
              <li><strong>cols:</strong> 1 | 2 | 3 | 4 | 5 | 6 | 12 - Number of columns at the smallest breakpoint (default: 1)</li>
              <li><strong>colsMd:</strong> 1 | 2 | 3 | 4 | 5 | 6 | 12 - Number of columns at the medium breakpoint</li>
              <li><strong>colsLg:</strong> 1 | 2 | 3 | 4 | 5 | 6 | 12 - Number of columns at the large breakpoint</li>
              <li><strong>colsXl:</strong> 1 | 2 | 3 | 4 | 5 | 6 | 12 - Number of columns at the extra large breakpoint</li>
              <li><strong>gap:</strong> 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12 - Gap between grid items (default: 4)</li>
              <li><strong>alignItems:</strong> "start" | "center" | "end" | "stretch" - Vertical alignment of grid items</li>
              <li><strong>justifyItems:</strong> "start" | "center" | "end" | "stretch" - Horizontal alignment of grid items</li>
            </ul>
            
            <h3 className="text-xl font-questa-bold mb-2">Example Usage</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
              <p className="mb-2">
                The Grid component is typically used to create responsive grid layouts for collections of items.
              </p>
              
              <p className="mb-2">
                For example, to create a product grid that displays 1 column on mobile, 2 columns on tablet, and 3 columns on desktop:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Import the Grid component</li>
                <li>Use Grid with cols=1, colsMd=2, colsLg=3, and gap=6</li>
                <li>Place your product cards or other content inside the Grid</li>
              </ul>
              
              <p className="italic text-sm">
                See the examples page for a live demonstration of this component.
              </p>
            </div>
          </div>
          
          {/* Flex Documentation */}
          <div className="mb-16">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue border-b border-uniworld-light-gray pb-2">Flex</h2>
            <p className="mb-4">
              The Flex component provides a flexible layout system based on CSS Flexbox.
            </p>
            
            <h3 className="text-xl font-questa-bold mb-2">Props</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>children:</strong> React.ReactNode - The flex items</li>
              <li><strong>className:</strong> string - Additional CSS classes</li>
              <li><strong>direction:</strong> "row" | "row-reverse" | "col" | "col-reverse" - Direction of the flex container (default: "row")</li>
              <li><strong>wrap:</strong> "nowrap" | "wrap" | "wrap-reverse" - Whether items should wrap (default: "nowrap")</li>
              <li><strong>justify:</strong> "start" | "end" | "center" | "between" | "around" | "evenly" - Horizontal alignment of items (default: "start")</li>
              <li><strong>items:</strong> "start" | "end" | "center" | "baseline" | "stretch" - Vertical alignment of items (default: "start")</li>
              <li><strong>gap:</strong> 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12 - Gap between flex items (default: 0)</li>
              <li><strong>inline:</strong> boolean - Whether to use inline-flex instead of flex (default: false)</li>
            </ul>
            
            <h3 className="text-xl font-questa-bold mb-2">Example Usage</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
              <p className="mb-2">
                The Flex component is typically used for creating flexible layouts, especially for navigation bars and content alignment.
              </p>
              
              <p className="mb-2">
                For example, to create a header with logo on the left, navigation in the center, and a search button on the right:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Import the Flex component</li>
                <li>Use Flex with justify="between", items="center", and gap=4</li>
                <li>Place your logo, navigation, and search button components inside the Flex</li>
              </ul>
              
              <p className="italic text-sm">
                See the examples page for a live demonstration of this component.
              </p>
            </div>
          </div>
          
          {/* SectionWrapper Documentation */}
          <div className="mb-16">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue border-b border-uniworld-light-gray pb-2">SectionWrapper</h2>
            <p className="mb-4">
              The SectionWrapper component provides consistent padding and background colors for content sections.
            </p>
            
            <h3 className="text-xl font-questa-bold mb-2">Props</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>children:</strong> React.ReactNode - The section content</li>
              <li><strong>className:</strong> string - Additional CSS classes</li>
              <li><strong>id:</strong> string - HTML id attribute</li>
              <li><strong>backgroundColor:</strong> "white" | "light-gray" | "light-blue" | "blue" | "gold" | "none" - Background color of the section (default: "white")</li>
              <li><strong>paddingY:</strong> "none" | "sm" | "md" | "lg" | "xl" - Vertical padding (default: "lg")</li>
              <li><strong>paddingX:</strong> "none" | "sm" | "md" | "lg" | "xl" - Horizontal padding (default: "none")</li>
              <li><strong>marginY:</strong> "none" | "sm" | "md" | "lg" | "xl" - Vertical margin (default: "none")</li>
              <li><strong>marginBottom:</strong> "none" | "sm" | "md" | "lg" | "xl" - Bottom margin</li>
              <li><strong>marginTop:</strong> "none" | "sm" | "md" | "lg" | "xl" - Top margin</li>
              <li><strong>as:</strong> "section" | "div" | "article" | "main" - HTML element to render (default: "section")</li>
            </ul>
            
            <h3 className="text-xl font-questa-bold mb-2">Example Usage</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
              <p className="mb-2">
                The SectionWrapper component is typically used to create page sections with consistent styling.
              </p>
              
              <p className="mb-2">
                For example, to create a hero section with a blue background, you would:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Import SectionWrapper and Container components</li>
                <li>Use SectionWrapper with backgroundColor="blue" and paddingY="xl"</li>
                <li>Place a Container component inside the SectionWrapper</li>
                <li>Add your content inside the Container with appropriate text colors</li>
              </ul>
              
              <p className="italic text-sm">
                See the examples page for a live demonstration of this component.
              </p>
            </div>
          </div>
          
          {/* Card Documentation */}
          <div className="mb-16">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue border-b border-uniworld-light-gray pb-2">Card</h2>
            <p className="mb-4">
              The Card component provides a flexible container for displaying content in a card format.
            </p>
            
            <h3 className="text-xl font-questa-bold mb-2">Props</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>children:</strong> React.ReactNode - The card content</li>
              <li><strong>className:</strong> string - Additional CSS classes</li>
              <li><strong>title:</strong> string - Card title</li>
              <li><strong>description:</strong> string - Card description</li>
              <li><strong>image:</strong> string - URL of the card image</li>
              <li><strong>imageAlt:</strong> string - Alt text for the image (default: "")</li>
              <li><strong>imagePosition:</strong> "top" | "bottom" | "left" | "right" - Position of the image (default: "top")</li>
              <li><strong>variant:</strong> "default" | "outline" | "elevated" | "flat" - Card style variant (default: "default")</li>
              <li><strong>padding:</strong> "none" | "sm" | "md" | "lg" - Padding inside the card (default: "md")</li>
              <li><strong>onClick:</strong> () =&gt; void - Click handler</li>
              <li><strong>href:</strong> string - Link URL (renders as an anchor)</li>
              <li><strong>footer:</strong> React.ReactNode - Content to render in the card footer</li>
              <li><strong>header:</strong> React.ReactNode - Content to render in the card header</li>
              <li><strong>as:</strong> "div" | "article" | "li" - HTML element to render (default: "div")</li>
            </ul>
            
            <h3 className="text-xl font-questa-bold mb-2">Example Usage</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
              <p className="mb-2">
                The Card component is typically used to display content in a contained, visually distinct format.
              </p>
              
              <p className="mb-2">
                For example, to create a product card for a luxury river cruise:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Import the Card and Button components</li>
                <li>Use Card with title, description, image, and variant="elevated"</li>
                <li>Add a footer with a "Book Now" button</li>
                <li>Include additional content like pricing information as children</li>
              </ul>
              
              <p className="italic text-sm">
                See the examples page for a live demonstration of this component.
              </p>
            </div>
          </div>
          
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-questa-bold mb-4 text-uniworld-blue">View Examples</h2>
            <p className="mb-6">
              See these components in action in our examples section.
            </p>
            <Link href="/examples/layout-components">
              <Button variant="primary">
                View Layout Component Examples
              </Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
