import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-uniworld-blue mb-6">
          Uniworld Components
        </h1>
        
        <p className="text-xl mb-12">
          A modern component library built with Next.js, TypeScript, and Tailwind CSS for the next version of the uniworld.com website.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentCard 
            title="UI Elements" 
            description="Buttons, forms, cards, and other basic UI components"
            href="/components/ui"
          />
          <ComponentCard 
            title="Layout Components" 
            description="Page layouts, grids, and containers"
            href="/components/layout"
          />
          <ComponentCard 
            title="Navigation" 
            description="Headers, footers, menus, and navigation elements"
            href="/components/navigation"
          />
          <ComponentCard 
            title="Booking Components" 
            description="Cruise search, cabin selection, and booking forms"
            href="/components/booking"
          />
          <ComponentCard 
            title="Content Components" 
            description="Hero sections, carousels, and testimonials"
            href="/components/content"
          />
          <ComponentCard 
            title="Documentation" 
            description="Usage guidelines and component API documentation"
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
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-uniworld-gold"
    >
      <h2 className="text-2xl font-serif font-semibold text-uniworld-blue mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-uniworld-gold font-medium">Explore →</span>
      </div>
    </Link>
  )
} 