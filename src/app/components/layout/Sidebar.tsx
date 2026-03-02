import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { BookOpen, Calendar, Star, FileText, ChevronRight, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const semesters = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    label: `Semester ${i + 1}`,
    path: `/semester/${i + 1}`,
  }));

  const popularSubjects = [
    { name: "Data Structures", path: "/subject/dsa" },
    { name: "Operating Systems", path: "/subject/os" },
    { name: "Computer Networks", path: "/subject/cn" },
    { name: "DBMS", path: "/subject/dbms" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={clsx(
          "fixed lg:sticky top-0 lg:top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4 space-y-6">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden mb-4">
            <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Semesters */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">
              Academic Semesters
            </h3>
            <nav className="space-y-1">
              {semesters.map((sem) => (
                <Link
                  key={sem.id}
                  to={sem.path}
                  onClick={onClose}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(sem.path)
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  <Calendar className="h-4 w-4" />
                  {sem.label}
                  {isActive(sem.path) && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              ))}
            </nav>
          </div>

          {/* Popular Subjects */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">
              Popular Subjects
            </h3>
            <nav className="space-y-1">
              {popularSubjects.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={onClose}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(sub.path)
                      ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  {sub.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">
              Quick Links
            </h3>
            <nav className="space-y-1">
              <Link
                to="/resources/popular"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Star className="h-4 w-4 text-yellow-500" />
                Top Rated Resources
              </Link>
              <Link
                to="/announcements"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FileText className="h-4 w-4 text-green-500" />
                All Announcements
              </Link>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-center text-gray-400 dark:text-gray-500">
              © 2024 CSE ResourceHub
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
