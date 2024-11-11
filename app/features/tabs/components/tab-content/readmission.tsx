'use client';

import { HospitalChart } from '@/components/charts/hospital-chart';
import { Hospital } from '@/types/hospital';
import { ChartExport } from '@/components/export/chart-export';
import { useHospitalContext } from '../../context/hospital-context';

export function ReadmissionTabContent() {
  const { hospitalName, readmissionData } = useHospitalContext();

  const initialHospitals: Hospital[] = [
    {
      id: '1',
      name: hospitalName,
      readmissionRate: readmissionData.rate,
      percentile: readmissionData.percentile,
      color: '#1C345B'
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1e3a8a]">
            Readmission Rates
          </h1>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Data includes full-year 2022 CMS inpatient data</li>
            <li>Filtered on admissions with diabetes ICD-codes</li>
            <li>Condition: Re-admitted to a hospital 30 days prior to an admission with a diabetes diagnosis</li>
          </ul>
        </div>
        <ChartExport 
          chartId="readmission-chart" 
          fileName="readmission-chart"
          title="Diabetes Readmission Rates"
          description="30-day readmission rates for diabetes-related hospital stays based on 2022 CMS inpatient data. Tracks patients readmitted within 30 days of a previous diabetes-related admission."
        />
      </div>
      <div id="readmission-chart" className="rounded-lg bg-white shadow p-6">
        <HospitalChart initialHospitals={initialHospitals} type="readmission" />
      </div>
    </div>
  );
}