import type { Report } from '../types/report';

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <div className="report-card">
      <h3 className="report-title">{report.title}</h3>

      <p className="report-content">
        {report.content}
      </p>

      <time className="report-date">
        {new Date(report.createdAt).toLocaleDateString()}
      </time>
    </div>
  );
}
