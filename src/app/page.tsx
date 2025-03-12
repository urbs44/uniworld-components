import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-uniworld-light-gray">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-6xl font-libel-bold text-uniworld-blue mb-6" id="main-heading">
          Uniworld Component Library
        </h1>
        
        <p className="text-xl text-uniworld-dark-gray mb-12 font-questa">
          A comprehensive, modular, and reusable component system built with Next.js, TypeScript, and Tailwind CSS, 
          designed to enhance maintainability and consistency across the uniworld.com website.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="navigation" aria-label="Component Categories">
          <ComponentCard 
            title="UI Elements" 
            description="Buttons, forms, inputs, and other foundational UI components"
            href="/components/ui"
          />
          <ComponentCard 
            title="Layout Components" 
            description="Grids, sections, containers, and structural elements"
            href="/components/layout"
          />
          <ComponentCard 
            title="Navigation" 
            description="Headers, footers, breadcrumbs, and navigation menus"
            href="/components/navigation"
          />
          <ComponentCard 
            title="Booking Components" 
            description="Search interfaces, booking flows, and cabin selection"
            href="/components/booking"
          />
          <ComponentCard 
            title="Content Components" 
            description="Carousels, accordions, testimonials, and content displays"
            href="/components/content"
          />
          <ComponentCard 
            title="Utility Components" 
            description="Loaders, pagination, notifications, and helper elements"
            href="/components/utility"
          />
          <ComponentCard 
            title="Documentation" 
            description="API references, usage guidelines, and component documentation"
            href="/docs"
          />
        </div>
      </div>
    </main>
  )
}

function ComponentCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link 
      href={href}
      className="block p-6 bg-uniworld-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-uniworld-input-border hover:border-uniworld-blue focus:outline-none focus:ring-2 focus:ring-uniworld-blue"
      aria-labelledby={`card-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h2 
        id={`card-title-${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="text-2xl font-libel-bold text-uniworld-blue mb-2"
      >
        {title}
      </h2>
      <p className="text-uniworld-dark-gray font-questa">{description}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-uniworld-yellow font-questa-bold">Explore →</span>
      </div>
    </Link>
  )
} 