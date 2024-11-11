'use client';

import { StatValue } from "./stat-value";

interface PercentileTableProps {
  type: 'prevalence' | 'los' | 'readmission';
  showPercentage?: boolean;
}

export function PercentileTable({ type, showPercentage = true }: PercentileTableProps) {
  const getTitle = () => {
    switch (type) {
      case 'los':
        return 'Length of Stay';
      case 'prevalence':
        return 'Prevalence Rates';
      case 'readmission':
        return 'Readmission Rates';
    }
  };

  const getValues = () => {
    switch (type) {
      case 'los':
        return ['3.2', '3.6', '4.4', '5.2', '6.0', '7.0', '7.7'];
      case 'prevalence':
        return ['25.1', '27.9', '31.9', '35.6', '39.1', '43.0', '45.8'];
      case 'readmission':
        return ['17', '19', '22', '25', '29', '33', '36'];
    }
  };

  const percentiles = ['5%', '10%', '25%', '50%', '75%', '90%', '95%'];
  const values = getValues();

  return (
    <div className="space-y-6 bg-[#f8fafc] p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-[#1e3a8a]">Percentiles</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-700">Percentile</span>
          <span className="text-lg font-medium text-gray-700">{getTitle()}</span>
        </div>
        {percentiles.map((percentile, index) => (
          <div key={percentile} className="flex justify-between items-center h-10">
            <span className="text-lg text-gray-700">{percentile}</span>
            <div className={`w-32 h-8 flex items-center justify-center rounded-md ${
              index === 0 ? 'bg-[#7CD992]' :
              index === 1 ? 'bg-[#98EBA9]' :
              index === 2 ? 'bg-[#FFE17F]' :
              index === 3 ? 'bg-[#FFF3B8]' :
              index === 4 ? 'bg-[#FFB98A]' :
              index === 5 ? 'bg-[#F89B5E]' :
              'bg-[#F48B8B]'
            }`}>
              <span className="text-lg font-medium text-gray-700">
                {values[index]}{showPercentage ? ' %' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}