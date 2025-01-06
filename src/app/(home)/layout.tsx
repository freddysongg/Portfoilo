'use client';

import React from 'react';
import { Navbar } from '@/components/page-ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">
        {children}
      </main>

      <footer className="text-center py-4 text-sm text-neutral-600">
        © {new Date().getFullYear()} Freddy Song. All Rights Reserved.
      </footer>
    </div>
  );
}
