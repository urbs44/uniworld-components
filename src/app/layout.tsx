import type { Metadata } from 'next'
import '@/styles/globals.css'

// Note: Custom fonts (Libel Suit, Questa Sans, and Open Sans) are now loaded via @font-face in globals.css

export const metadata: Metadata = {
  title: 'Uniworld Components',
  description: 'Component library for the Uniworld website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-uniworld-light-gray font-questa text-uniworld-dark-gray">
        {children}
      </body>
    </html>
  )
}
