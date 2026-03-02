import { Link } from 'react-router';
import { Resource } from '../lib/data';
import { Download, Eye, Star, FileText, Book, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'book': return <Book className="h-5 w-5 text-purple-500" />;
      case 'pyq': return <GraduationCap className="h-5 w-5 text-blue-500" />;
      default: return <FileText className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={`/resource/${resource.id}`}
        className="group flex min-h-[260px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              {getIcon()}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {resource.type}
            </span>
          </div>
          
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {resource.title}
          </h3>
          
          <div className="mb-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <span className="font-medium text-gray-900 dark:text-gray-300">{resource.subject}</span>
            </p>
            <p>Semester {resource.semester} • {resource.year}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Download className="h-4 w-4" />
            <span>{resource.downloadCount}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span>{resource.rating}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
