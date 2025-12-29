import type { Report } from '../types/report';
import { ReportCard } from './ReportCard';

interface ReportListProps {
  reports: Report[];
}

export function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return <p className="empty-message">まだ日報が登録されていません</p>;
  }

  return (
    <div className="report-list">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}
