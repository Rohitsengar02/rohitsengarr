import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from '@/components/CustomCursor';
import PreLoader from '@/components/PreLoader';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';
import Loading from './loading';
import { Toaster } from "@/components/ui/toaster";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rohit Sengar - Portfolio',
  description: 'Full Stack Developer & UI/UX Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PreLoader />
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
          <MobileNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}