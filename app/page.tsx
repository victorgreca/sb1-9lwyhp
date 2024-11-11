'use client';

import { AppHeader } from '@/components/layout/app-header';
import { TabWrapper } from './features/tabs/components/tab-wrapper';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AppHeader />
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <TabWrapper />
      </div>
    </div>
  );
}