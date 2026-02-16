import React from "react"
import type { Metadata } from 'next'
import { Crimson_Pro, Work_Sans } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Sumud Labs — Decolonizing Scientific Knowledge Production',
  description: 'Mapping the barriers that prevent Global South researchers from equitable participation in chemistry and scientific knowledge production — and finding where consensus exists across studies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${crimsonPro.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
