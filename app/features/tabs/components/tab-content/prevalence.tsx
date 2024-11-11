'use client';

import { HospitalChart } from '@/components/charts/hospital-chart';
import { Hospital } from '@/types/hospital';
import { ChartExport } from '@/components/export/chart-export';
import { useHospitalContext } from '../../context/hospital-context';

export function PrevalenceTabContent() {
  const { hospitalName, prevalenceData } = useHospitalContext();

  const initialHospitals: Hospital[] = [
    {
      id: '1',
      name: hospitalName,
      prevalence: prevalenceData.rate,
      percentile: prevalenceData.percentile,
      color: '#1C345B'
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1e3a8a]">
            Diabetes Prevalence
          </h1>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Data includes full-year 2022 CMS inpatient data</li>
            <li>Filtered on admissions with diabetes ICD-codes</li>
            <li>Calculation: Total number of admissions with a diabetes diagnosis / Total number of admissions</li>
          </ul>
        </div>
        <ChartExport 
          chartId="prevalence-chart" 
          fileName="prevalence-chart"
          title="Diabetes Prevalence"
          description="Analysis of diabetes prevalence in hospital admissions using 2022 CMS inpatient data. Calculated as the ratio of diabetes-related admissions to total admissions, providing insights into the diabetes burden across facilities."
        />
      </div>
      <div id="prevalence-chart" className="rounded-lg bg-white shadow p-6">
        <HospitalChart initialHospitals={initialHospitals} type="prevalence" />
      </div>
    </div>
  );
}