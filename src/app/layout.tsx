import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bennis Autoservice',
  description: 'Kfz-Werkstatt in Leipzig Plagwitz',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
