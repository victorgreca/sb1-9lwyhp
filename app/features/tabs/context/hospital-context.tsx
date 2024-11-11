'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Hospital } from '@/types/hospital';

interface HospitalContextType {
  hospitalName: string;
  prevalenceData: {
    percentile: number;
    rate: number;
  };
  losData: {
    percentile: number;
    rate: number;
  };
  readmissionData: {
    percentile: number;
    rate: number;
  };
  updateHospitalName: (name: string) => void;
  updatePrevalence: (percentile: number, rate: number) => void;
  updateLOS: (percentile: number, rate: number) => void;
  updateReadmission: (percentile: number, rate: number) => void;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export function HospitalProvider({ children }: { children: React.ReactNode }) {
  const [hospitalName, setHospitalName] = useState('Hospital A');
  const [prevalenceData, setPrevalenceData] = useState({ percentile: 81, rate: 41 });
  const [losData, setLOSData] = useState({ percentile: 92, rate: 7.2 });
  const [readmissionData, setReadmissionData] = useState({ percentile: 88, rate: 32 });

  const updateHospitalName = (name: string) => {
    setHospitalName(name);
  };

  const updatePrevalence = (percentile: number, rate: number) => {
    setPrevalenceData({ percentile, rate });
  };

  const updateLOS = (percentile: number, rate: number) => {
    setLOSData({ percentile, rate });
  };

  const updateReadmission = (percentile: number, rate: number) => {
    setReadmissionData({ percentile, rate });
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitalName,
        prevalenceData,
        losData,
        readmissionData,
        updateHospitalName,
        updatePrevalence,
        updateLOS,
        updateReadmission,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
}

export function useHospitalContext() {
  const context = useContext(HospitalContext);
  if (context === undefined) {
    throw new Error('useHospitalContext must be used within a HospitalProvider');
  }
  return context;
}