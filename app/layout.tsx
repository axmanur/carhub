import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'car hup',
  description: 'discovered by axmanur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative`}>
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
