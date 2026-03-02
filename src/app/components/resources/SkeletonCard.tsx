import clsx from "clsx";

export function SkeletonCard() {
  return (
    <div className="relative animate-pulse p-4 rounded-2xl shadow-md bg-gray-200 dark:bg-gray-800">
      <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
}
