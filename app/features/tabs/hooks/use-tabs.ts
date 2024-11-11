'use client';

import { useState } from 'react';
import { TabValue } from '../types/tabs';

export function useTabState() {
  const [activeTab, setActiveTab] = useState<TabValue>('data-context');

  return {
    activeTab,
    setActiveTab,
  };
}