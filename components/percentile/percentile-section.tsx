'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatValue } from "./stat-value";
import { getColorClass } from "@/lib/utils/percentile";
import { PercentileTable } from "./percentile-table";

interface PercentileSectionProps {
  title: string;
  setTitle: (title: string) => void;
  type: 'prevalence' | 'los' | 'readmission';
  percentile: number;
  setPercentile: (value: number) => void;
  rate: number;
  setRate: (value: number) => void;
  cmsAverage: string;
  cmsStdDev: string;
  rateLabel: string;
  showPercentage?: boolean;
}

export function PercentileSection({
  title,
  setTitle,
  type,
  percentile,
  setPercentile,
  rate,
  setRate,
  cmsAverage,
  cmsStdDev,
  rateLabel,
  showPercentage = true,
}: PercentileSectionProps) {
  return (
    <div className="space-y-6">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-2xl font-bold text-[#1e3a8a] border-none p-0 focus-visible:ring-0"
      />
      <div className="space-y-4 bg-[#f8fafc] p-6 rounded-lg">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor={`${type}-percentile`} className="text-lg font-medium text-gray-700">2022 Percentile</Label>
            <div className={`rounded-md overflow-hidden ${getColorClass(percentile)}`}>
              <Input
                id={`${type}-percentile`}
                value={`${percentile}%`}
                onChange={(e) => setPercentile(Number(e.target.value.replace('%', '')))}
                className="w-24 text-right text-lg border-none bg-transparent focus:ring-0 focus:ring-offset-0"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor={`${type}-rate`} className="text-lg font-medium text-gray-700">{rateLabel}</Label>
            <div className={`rounded-md overflow-hidden ${getColorClass(percentile)}`}>
              <Input
                id={`${type}-rate`}
                value={showPercentage ? `${rate}%` : rate}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9.]/g, '');
                  setRate(Number(value));
                }}
                className="w-24 text-right text-lg border-none bg-transparent focus:ring-0 focus:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-[#f8fafc] p-6 rounded-lg">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">CMS Average</span>
            <StatValue value={cmsAverage} unit={showPercentage ? "%" : ""} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">CMS Standard Deviation</span>
            <StatValue value={cmsStdDev} unit={showPercentage ? "%" : ""} />
          </div>
        </div>
      </div>
      <PercentileTable type={type} showPercentage={showPercentage} />
    </div>
  );
}