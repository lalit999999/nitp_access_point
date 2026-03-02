import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { SUBJECTS, MOCK_RESOURCES, Resource } from '../lib/data';
import { ResourceGrid } from '../components/ResourceGrid';
import { Book, GraduationCap, FileText, ChevronRight } from 'lucide-react';

export default function SemesterPage() {
  const { sem } = useParams();
  const semester = parseInt(sem || '1');
  const subjects = SUBJECTS[semester] || [];

  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate fetch
    setTimeout(() => {
      const filtered = MOCK_RESOURCES.filter(r => r.semester === semester);
      setResources(filtered);
      setLoading(false);
    }, 600);
  }, [semester]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Semester {semester}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse resources by subject or view all uploads for this semester.
        </p>
      </div>

      {/* Subjects Grid */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <Link
              key={subject}
              to={`/subject/${encodeURIComponent(subject)}`}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all dark:bg-gray-900 dark:border-gray-800 dark:hover:border-blue-700 group"
            >
              <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {subject}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
            </Link>
          ))}
        </div>
      </section>

      {/* Resources List */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Recent Uploads
        </h2>
        <ResourceGrid resources={resources} loading={loading} />
      </section>
    </div>
  );
}
