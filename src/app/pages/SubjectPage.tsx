import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { MOCK_RESOURCES, Resource } from '../lib/data';
import { ResourceGrid } from '../components/ResourceGrid';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ArrowLeft, BookOpen, Clock, FileText } from 'lucide-react';

export default function SubjectPage() {
  const { subject } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');
  const [activeTab, setActiveTab] = useState<'all' | 'pyq' | 'notes' | 'book'>('all');
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setLoading(true);
    // Simulate fetch
    setTimeout(() => {
      const filtered = MOCK_RESOURCES.filter(r => r.subject === decodedSubject);
      setResources(filtered);
      setLoading(false);
    }, 600);
  }, [decodedSubject]);

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(r => r.type === activeTab);

  const tabs = [
    { id: 'all', label: 'All Resources', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'pyq', label: 'PYQs', icon: <Clock className="w-4 h-4" /> },
    { id: 'notes', label: 'Notes', icon: <FileText className="w-4 h-4" /> },
    { id: 'book', label: 'Books', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4 dark:text-gray-400 dark:hover:text-gray-200">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {decodedSubject}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Access all study materials for {decodedSubject}.
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "relative flex items-center gap-2 pb-4 text-sm font-medium transition-colors hover:text-gray-700 dark:hover:text-gray-300",
                activeTab === tab.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
              )}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      <ResourceGrid resources={filteredResources} loading={loading} />
    </div>
  );
}
