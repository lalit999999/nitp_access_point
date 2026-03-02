import { MOCK_ANNOUNCEMENTS } from '../lib/data';
import { Calendar, Megaphone } from 'lucide-react';

export default function AnnouncementsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Announcements
      </h1>
      <div className="space-y-4">
        {MOCK_ANNOUNCEMENTS.map((announcement) => (
          <div key={announcement.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Megaphone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {announcement.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {announcement.content}
                </p>
                {announcement.isImportant && (
                  <span className="mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    Important
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
