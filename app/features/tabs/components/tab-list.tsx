import { TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabList() {
  return (
    <div className="w-full overflow-x-auto pb-2 mb-4">
      <TabsList className="w-full inline-flex flex-nowrap min-w-max sm:justify-center">
        <TabsTrigger 
          value="data-context" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Data Pull Procedure
        </TabsTrigger>
        <TabsTrigger 
          value="data-interpretation" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Interpreting the Data
        </TabsTrigger>
        <TabsTrigger 
          value="percentile-analysis" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Percentile Analysis
        </TabsTrigger>
        <TabsTrigger 
          value="los-chart" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Length of Stay Chart
        </TabsTrigger>
        <TabsTrigger 
          value="prevalence-chart" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Prevalence Chart
        </TabsTrigger>
        <TabsTrigger 
          value="readmission-chart" 
          className="whitespace-nowrap px-3 sm:px-4"
        >
          Readmission Chart
        </TabsTrigger>
      </TabsList>
    </div>
  );
}