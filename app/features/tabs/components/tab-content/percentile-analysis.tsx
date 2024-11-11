'use client';

import { useState } from 'react';
import { PercentileHeader } from '@/components/percentile/percentile-header';
import { PercentileSection } from '@/components/percentile/percentile-section';
import { useHospitalContext } from '../../context/hospital-context';

export function PercentileAnalysisTabContent() {
  const [mainTitle, setMainTitle] = useState('Percentile Analysis');
  const [prevalenceTitle, setPrevalenceTitle] = useState('Diabetes Prevalence');
  const [losTitle, setLosTitle] = useState('Diabetes Length of Stay');
  const [readmissionTitle, setReadmissionTitle] = useState('Diabetes Readmission Rates');
  
  const {
    prevalenceData,
    losData,
    readmissionData,
    updatePrevalence,
    updateLOS,
    updateReadmission
  } = useHospitalContext();

  return (
    <div className="container mx-auto p-4 space-y-8">
      <PercentileHeader mainTitle={mainTitle} setMainTitle={setMainTitle} />
      <div id="benchmark-data" className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PercentileSection
            title={prevalenceTitle}
            setTitle={setPrevalenceTitle}
            type="prevalence"
            percentile={prevalenceData.percentile}
            setPercentile={(value) => updatePrevalence(value, prevalenceData.rate)}
            rate={prevalenceData.rate}
            setRate={(value) => updatePrevalence(prevalenceData.percentile, value)}
            cmsAverage="35.6"
            cmsStdDev="6.7"
            rateLabel="2022 Prevalence Rate"
          />
          <PercentileSection
            title={losTitle}
            setTitle={setLosTitle}
            type="los"
            percentile={losData.percentile}
            setPercentile={(value) => updateLOS(value, losData.rate)}
            rate={losData.rate}
            setRate={(value) => updateLOS(losData.percentile, value)}
            cmsAverage="5.2"
            cmsStdDev="1.7"
            rateLabel="2022 Length of Stay"
            showPercentage={false}
          />
          <PercentileSection
            title={readmissionTitle}
            setTitle={setReadmissionTitle}
            type="readmission"
            percentile={readmissionData.percentile}
            setPercentile={(value) => updateReadmission(value, readmissionData.rate)}
            rate={readmissionData.rate}
            setRate={(value) => updateReadmission(readmissionData.percentile, value)}
            cmsAverage="25"
            cmsStdDev="0.1"
            rateLabel="2022 Readmission Rate"
          />
        </div>
      </div>
    </div>
  );
}