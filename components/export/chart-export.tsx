'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ChartExportProps {
  chartId: string;
  fileName: string;
  title: string;
  description: string;
}

export function ChartExport({ chartId, fileName, title, description }: ChartExportProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const element = document.getElementById(chartId);
    if (!element) return;

    setIsExporting(true);
    try {
      // Create a clone of the element for export
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Remove all input elements and controls
      clone.querySelectorAll('input, button, .hospital-controls').forEach(el => {
        el.remove();
      });

      // Set up temporary container with 16:9 aspect ratio
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '1920px';
      container.style.height = '1080px';
      container.style.zIndex = '-9999';
      container.style.backgroundColor = 'white';
      container.style.padding = '40px';

      // Add title and description
      const header = document.createElement('div');
      header.style.marginBottom = '24px';
      header.innerHTML = `
        <h1 style="font-size: 32px; font-weight: bold; color: #1e3a8a; margin-bottom: 16px;">${title}</h1>
        <p style="font-size: 16px; color: #4b5563; line-height: 1.5;">${description}</p>
      `;
      container.appendChild(header);

      // Add the chart
      container.appendChild(clone);
      document.body.appendChild(container);

      // Apply export styles to clone
      clone.style.width = '100%';
      clone.style.height = 'calc(100% - 120px)'; // Account for header
      clone.style.position = 'relative';
      clone.style.backgroundColor = 'white';

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: 1920,
        windowHeight: 1080,
        onclone: (doc) => {
          const clonedElement = doc.querySelector(`#${chartId}`);
          if (clonedElement) {
            clonedElement.querySelectorAll('.hospital-controls').forEach(el => el.remove());
          }
        }
      });

      // Clean up
      document.body.removeChild(container);

      // Create download link
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      className="bg-[#00ABEC] hover:bg-[#00ABEC]/90 text-white"
    >
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Export Chart
        </>
      )}
    </Button>
  );
}