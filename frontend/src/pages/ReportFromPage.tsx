import { ReportForm } from '../components/ReportForm';
import type { ReportInput } from '../types/report';

interface ReportFormPageProps {
  onSubmit: (report: ReportInput) => void;
}

export function ReportFormPage({ onSubmit }: ReportFormPageProps) {
  return (
    <main>
      <ReportForm onSubmit={onSubmit} />
    </main>
  );
}
