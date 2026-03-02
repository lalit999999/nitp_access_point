import { AlertCircle, Megaphone } from 'lucide-react';
import { MOCK_ANNOUNCEMENTS } from '../lib/data';

export function AnnouncementBanner() {
  const importantAnnouncement = MOCK_ANNOUNCEMENTS.find(a => a.isImportant);

  if (!importantAnnouncement) return null;

  return (
    <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-800 dark:text-blue-300">
          <Megaphone className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
            {importantAnnouncement.title}
          </h3>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            {importantAnnouncement.content}
          </p>
          <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
            Posted on {new Date(importantAnnouncement.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
