import { Link, useLocation } from 'react-router';
import { BookOpen, FolderOpen, Calendar, Star, GraduationCap, X } from 'lucide-react';
import { cn } from '../../lib/utils'; // I need to create this util
import { SUBJECTS } from '../lib/data';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-950 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0 md:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-4 md:hidden">
        <span className="font-semibold">Menu</span>
        <button onClick={onClose} className="p-2">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Navigation
          </h2>
          <div className="space-y-1">
            <Link
              to="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                location.pathname === "/" ? "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              )}
            >
              <FolderOpen className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/announcements"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                location.pathname === "/announcements" ? "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              )}
            >
              <Calendar className="h-4 w-4" />
              Announcements
            </Link>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Semesters
          </h2>
          <div className="space-y-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <Link
                key={sem}
                to={`/semester/${sem}`}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  location.pathname === `/semester/${sem}` ? "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                )}
              >
                <GraduationCap className="h-4 w-4" />
                Semester {sem}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
