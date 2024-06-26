import './globals.css'
import Header from '@/components/header'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: 'Bilal Ikram',
  description: 'Bilal Ikram is a Software Developer its 1.5 years of industry experience, currently looking for work!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`bg-[#f6f2e5] text-[#292929] relative overflow-x-hidden`}>
        <ActiveSectionContextProvider>
        <Header />   
        {children}
        <SpeedInsights />
        <Analytics />
        <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
