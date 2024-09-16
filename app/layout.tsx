import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

import { Inter } from 'next/font/google';
// import Header from '@/components/Header';

const inter = Inter({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Nav />
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
