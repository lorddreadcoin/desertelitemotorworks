import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desert Elite Motorworks | Luxury Automotive Services & Restoration',
  description: 'Premier automotive restoration, custom builds, and white-glove service for discerning enthusiasts. Elite craftsmanship in Indio, California.',
  keywords: 'luxury car repair, automotive restoration, classic car restoration, exotic car service, Indio auto shop, high-end mechanic, white glove car service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
