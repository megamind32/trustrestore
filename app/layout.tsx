import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Trust Wallet Support',
  description: 'Get instant help with Trust Wallet and crypto. Our AI chatbot answers questions about wallets, transactions, and security in seconds.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Trust Wallet Support - Instant Help & AI Chatbot',
    description: 'Get instant help with Trust Wallet and crypto. Our AI chatbot answers questions about wallets, transactions, and security in seconds.',
    url: 'https://trustwallet.com/support',
    siteName: 'Trust Wallet',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trust Wallet Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Wallet Support - Instant Help & AI Chatbot',
    description: 'Get instant help with Trust Wallet and crypto. Our AI chatbot answers questions about wallets, transactions, and security in seconds.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
