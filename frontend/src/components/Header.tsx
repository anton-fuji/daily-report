type View = 'form' | 'list';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h1>日報アプリ</h1>
        <nav className="nav">
          <button
            type="button"
            onClick={() => onViewChange('form')}
            className={`btn ${currentView === 'form' ? 'btn-primary' : 'btn-secondary'}`}
          >
            日報作成
          </button>
          <button
            type="button"
            onClick={() => onViewChange('list')}
            className={`btn ${currentView === 'list' ? 'btn-primary' : 'btn-secondary'}`}
          >
            一覧・検索
          </button>
        </nav>
      </div>
    </header>
  );
}
