import type { Metadata } from 'next';
import '@/app/globals.css';

import { Inter } from 'next/font/google';
// import Header from '@/components/Header';

const inter = Inter({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HR Harmony Test Task',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
