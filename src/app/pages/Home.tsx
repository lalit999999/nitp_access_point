import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { AnnouncementBanner } from '../components/AnnouncementBanner';
import { ResourceGrid } from '../components/ResourceGrid';
import { MOCK_RESOURCES, Resource } from '../lib/data';
import { Sparkles, Search } from 'lucide-react';

export default function Home() {
  const [searchParams] = useSearchParams();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  
  const query = searchParams.get('q');
  const semester = searchParams.get('semester');
  const type = searchParams.get('type');
  const year = searchParams.get('year');
  
  const isFiltering = query || semester || type || year;

  useEffect(() => {
    setLoading(true);
    // Simulate fetch
    setTimeout(() => {
      let filtered = [...MOCK_RESOURCES];

      if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(r => 
          r.title.toLowerCase().includes(q) || 
          r.subject.toLowerCase().includes(q)
        );
      }

      if (semester) {
        filtered = filtered.filter(r => r.semester === parseInt(semester));
      }

      if (type) {
        filtered = filtered.filter(r => r.type === type);
      }
      
      if (year) {
        filtered = filtered.filter(r => r.year === parseInt(year));
      }

      // If not filtering, just show popular
      if (!isFiltering) {
        filtered = filtered.sort((a, b) => b.downloadCount - a.downloadCount).slice(0, 8);
      }

      setResources(filtered);
      setLoading(false);
    }, 600);
  }, [query, semester, type, year, isFiltering]);

  return (
    <div className="space-y-8">
      {!isFiltering && (
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Welcome to CSE Resources
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Your one-stop destination for semester notes, PYQs, and books.
          </p>
        </header>
      )}

      {!isFiltering && <AnnouncementBanner />}

      <section>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isFiltering ? (
              <Search className="h-5 w-5 text-blue-500" />
            ) : (
              <Sparkles className="h-5 w-5 text-amber-500" />
            )}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {isFiltering ? `Search Results (${resources.length})` : 'Popular Resources'}
            </h2>
          </div>
        </div>
        <ResourceGrid resources={resources} loading={loading} />
      </section>
    </div>
  );
}
