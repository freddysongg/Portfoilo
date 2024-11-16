import '@/lib/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://freddysongg.github.io'),
  title: 'Freddy Song',
  description: 'Welcome to my personal portfolio!',
  applicationName: 'Freddy Song',
  keywords: [
    'Freddy Song',
    'portfolio',
    'personal',
    'website',
    'developer',
    'designer',
    'engineer',
    'software',
    'engineer',
    'machine learning',
  ],
  openGraph: {
    siteName: 'Freddy Song',
    title: 'Freddy Song',
    description: 'Welcome to my personal portfolio!',
    type: 'website',
    images: ['/opengraph-image.png'],
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
