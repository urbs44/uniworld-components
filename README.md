# 🚀 Uniworld Next.js Component Library

A comprehensive, modular, and reusable component system built with Next.js, TypeScript, and Tailwind CSS, designed to enhance maintainability and consistency across the uniworld.com website.

## 🎯 Project Overview

This repository is a Next.js project using TypeScript and Tailwind CSS. The goal is to build a reusable, modular component system for the Uniworld website.

## 📚 Project Structure

- `/src/components` → Stores all reusable UI components

Organized by category:

- `components/ui/` → Buttons, forms, inputs
- `components/layout/` → Grids, sections, containers
- `components/navigation/` → Headers, footers, breadcrumbs
- `components/booking/` → Search, booking flows, cabin selection
- `components/content/` → Carousels, accordions, testimonials
- `components/utility/` → Loaders, pagination, notifications
- `components/docs/` → API references & guidelines

- `/src/app` → Site pages using components
- `/src/styles` → Global styles
- `/src/lib` → Helper functions/hooks

## 🎯 Component Development Guidelines

### 1️⃣ Start with Base Components

Each category should have core components first.

Example: Card Component (components/ui/Card.tsx)

```tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
```

All variations of a component should extend the base component.

Example: CardFeatured.tsx, CardWithButton.tsx

### 2️⃣ Keep Carousels, Tabs, & Accordions Consistent

Use a single core implementation for all carousels, tabs, and accordions.

Example: components/content/Carousel.tsx

Reuse across different sections instead of duplicating logic.

## 📌 Guiding Principles

- Use Tailwind for styling.
- Prioritize reusability—avoid duplicate code.
- Follow Atomic Design principles to maintain scalability.
- Ensure accessibility in all components.
- Document components thoroughly.

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start
```

## 🧪 Component Testing

Each component should have appropriate tests to ensure functionality and accessibility.

```bash
# Run tests
npm test
```

## 📖 Documentation

Visit the [documentation site](/docs) to see examples and usage guidelines for all components.

## Technology Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/urbs44/uniworld-components.git

# Navigate to the project directory
cd uniworld-components

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component library in your browser.

## Component Documentation

The component library includes:

- **Layout Components**: Page layouts, grids, containers
- **Navigation Components**: Headers, footers, menus, breadcrumbs
- **UI Elements**: Buttons, forms, cards, modals
- **Content Components**: Hero sections, carousels, testimonials
- **Booking Components**: Cruise search, cabin selection, booking forms

Each component is:
- Fully responsive
- Accessible (WCAG 2.1 compliant)
- Customizable through props
- Thoroughly documented with usage examples

## Contributing

1. Create a new branch for your feature or bugfix
2. Make your changes
3. Submit a pull request with a clear description of the changes

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For questions or support, please contact the Uniworld digital team. 