'use client';

import { Input } from "@/components/ui/input";

interface PercentileHeaderProps {
  mainTitle: string;
  setMainTitle: (title: string) => void;
}

export function PercentileHeader({ mainTitle, setMainTitle }: PercentileHeaderProps) {
  return (
    <div className="space-y-4">
      <Input
        value={mainTitle}
        onChange={(e) => setMainTitle(e.target.value)}
        className="text-3xl font-bold text-[#1e3a8a] border-none p-0 focus-visible:ring-0"
      />
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>Data includes full-year 2022 CMS inpatient data</li>
        <li>Filtered on admissions with diabetes ICD-codes</li>
        <li>The percentiles derive from 2022 CMS inpatient data</li>
      </ul>
    </div>
  );
}