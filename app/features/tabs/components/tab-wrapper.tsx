'use client';

import { Tabs, TabsContent } from '@/components/ui/tabs';
import { TabList } from './tab-list';
import { DataPullTabContent } from './tab-content/data-pull';
import { InterpretingDataTabContent } from './tab-content/interpreting-data';
import { PercentileAnalysisTabContent } from './tab-content/percentile-analysis';
import { LengthOfStayTabContent } from './tab-content/length-of-stay';
import { PrevalenceTabContent } from './tab-content/prevalence';
import { ReadmissionTabContent } from './tab-content/readmission';
import { useTabState } from '../hooks/use-tabs';
import { HospitalProvider } from '../context/hospital-context';

export function TabWrapper() {
  const { activeTab, setActiveTab } = useTabState();

  return (
    <HospitalProvider>
      <Tabs defaultValue="data-context" onValueChange={setActiveTab} className="w-full">
        <TabList />
        <div className="w-full overflow-x-hidden">
          <TabsContent value="data-context" className="mt-0">
            <DataPullTabContent />
          </TabsContent>
          
          <TabsContent value="data-interpretation" className="mt-0">
            <InterpretingDataTabContent />
          </TabsContent>
          
          <TabsContent value="percentile-analysis" className="mt-0">
            <PercentileAnalysisTabContent />
          </TabsContent>
          
          <TabsContent value="los-chart" className="mt-0">
            <LengthOfStayTabContent />
          </TabsContent>

          <TabsContent value="prevalence-chart" className="mt-0">
            <PrevalenceTabContent />
          </TabsContent>

          <TabsContent value="readmission-chart" className="mt-0">
            <ReadmissionTabContent />
          </TabsContent>
        </div>
      </Tabs>
    </HospitalProvider>
  );
}