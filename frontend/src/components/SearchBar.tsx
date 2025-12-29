import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="日報を検索..."
      />
      <button type="button" onClick={handleSubmit} className="btn btn-success">
        検索
      </button>
      {query && (
        <button type="button" onClick={handleClear} className="btn btn-secondary">
          クリア
        </button>
      )}
    </div>
  );
}
