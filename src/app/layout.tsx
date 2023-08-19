import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/redux/provider';
import HomeLayout from '@/Components/Home/HomeLayout/HomeLayout';


// const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube clone made for learning purpose',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Providers>
        <body >
          <HomeLayout>{children}</HomeLayout>

        </body>
      </Providers>
    </html>
  )
}
