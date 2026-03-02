import { Download, Eye, FileText, Star } from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";

interface Resource {
  id: string;
  title: string;
  semester: number;
  subject: string;
  year: string;
  type: string;
  downloadCount: number;
  rating: number;
  previewUrl?: string;
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full overflow-hidden">
      {/* Type Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={clsx(
            "px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide",
            resource.type === "pyq"
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              : resource.type === "notes"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
          )}
        >
          {resource.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <FileText className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {resource.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {resource.subject} • {resource.year}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              {resource.downloadCount}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              {resource.rating}
            </span>
          </div>
          <Link
            to={`/resource/${resource.id}`}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View
            <Eye className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
