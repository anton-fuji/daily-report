import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { useReports } from './hooks/useReports';
import { ReportFormPage } from './pages/ReportFormPage';
import { ReportListPage } from './pages/ReportListPage';

type View = 'form' | 'list';

function App() {
  const [currentView, setCurrentView] = useState<View>('form');
  const { reports, addReport, setSearchQuery } = useReports();

  return (
    <Layout>
      <Header currentView={currentView} onViewChange={setCurrentView} />
      {currentView === 'form' ? (
        <ReportFormPage
          onSubmit={(report) => {
            addReport(report);
            setCurrentView('list');
          }}
        />
      ) : (
        <ReportListPage reports={reports} onSearch={setSearchQuery} />
      )}
    </Layout>
  );
}

export default App;
