import { useState } from 'react';
import type { Report, ReportInput } from '../types/report';

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addReport = (input: ReportInput) => {
    const newReport: Report = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setReports((prev) => [...prev, newReport]);
  };

  const filteredReports = reports
    .filter((report) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        report.todayWork.toLowerCase().includes(query) ||
        report.tomorrowPlan.toLowerCase().includes(query) ||
        report.memo.toLowerCase().includes(query) ||
        report.date.includes(query)
      );
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    reports: filteredReports,
    addReport,
    searchQuery,
    setSearchQuery,
  };
}
