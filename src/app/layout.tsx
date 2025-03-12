import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display, Montserrat } from 'next/font/google'
import '@/styles/globals.css'

// Open Sans for secondary body text
const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['400', '600', '700'],
})

// Playfair Display as a replacement for Libel Suit
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
})

// Montserrat as a replacement for Questa Sans
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
})

// Note: Libel Suit and Questa Sans are custom fonts that would need to be imported
// via a custom font loader or CSS. For now, we'll use system fonts as fallbacks.

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
    <html lang="en" className={`${openSans.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* Custom font imports */}
      </head>
      <body className="min-h-screen bg-uniworld-light-gray font-questa text-uniworld-dark-gray">
        {children}
      </body>
    </html>
  )
} 