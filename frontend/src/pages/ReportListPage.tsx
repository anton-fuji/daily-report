import { ReportList } from '../components/ReportList';
import { SearchBar } from '../components/SearchBar';
import type { Report } from '../types/report';

interface ReportListPageProps {
  reports: Report[];
  onSearch: (query: string) => void;
}

export function ReportListPage({ reports, onSearch }: ReportListPageProps) {
  return (
    <main>
      <div className="list-container">
        <SearchBar onSearch={onSearch} />
        <h2>日報一覧</h2>
        <ReportList reports={reports} />
      </div>
    </main>
  );
}
