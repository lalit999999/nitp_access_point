import { FileX, RefreshCw } from "lucide-react";
import clsx from "clsx";

interface EmptyStateProps {
  onClearFilters?: () => void;
  message?: string;
  subMessage?: string;
}

export function EmptyState({ onClearFilters, message = "No resources found", subMessage = "Try adjusting your filters or search keyword." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
        <FileX className="h-12 w-12 text-gray-400 dark:text-gray-500" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {message}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
        {subMessage}
      </p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors font-medium"
        >
          <RefreshCw className="h-4 w-4" />
          Clear Filters
        </button>
      )}
    </div>
  );
}
