'use client';

import { HospitalChart } from '@/components/charts/hospital-chart';
import { Hospital } from '@/types/hospital';
import { ChartExport } from '@/components/export/chart-export';
import { useHospitalContext } from '../../context/hospital-context';

export function LengthOfStayTabContent() {
  const { hospitalName, losData } = useHospitalContext();

  const initialHospitals: Hospital[] = [
    {
      id: '1',
      name: hospitalName,
      days: losData.rate,
      percentile: losData.percentile,
      color: '#1C345B'
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1e3a8a]">
            Length of Stay
          </h1>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Data includes full-year 2022 CMS inpatient data</li>
            <li>Filtered on admissions with diabetes ICD-codes</li>
            <li>Calculation: Average days of admission with a diabetes diagnosis</li>
          </ul>
        </div>
        <ChartExport 
          chartId="los-chart" 
          fileName="length-of-stay-chart"
          title="Length of Stay"
          description="Average duration of hospital stays for diabetes-related admissions based on 2022 CMS inpatient data. Analysis includes only admissions with diabetes ICD codes."
        />
      </div>
      <div id="los-chart" className="rounded-lg bg-white shadow p-6">
        <HospitalChart initialHospitals={initialHospitals} type="los" />
      </div>
    </div>
  );
}