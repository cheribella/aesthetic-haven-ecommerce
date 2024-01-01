import type { Metadata } from 'next'

import { Sen } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Sen({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aesthetic Haven',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
