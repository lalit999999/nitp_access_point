import { motion } from 'motion/react';

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="mb-4 text-6xl">📂</div>
      <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
        No resources found
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Try adjusting your filters or search keyword.
      </p>
    </motion.div>
  );
}
