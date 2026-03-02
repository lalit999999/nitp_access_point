import { ResourceCard } from "./ResourceCard";
import { SkeletonCard } from "./SkeletonCard";
import { EmptyState } from "./EmptyState";

interface ResourceGridProps {
  resources: any[];
  loading: boolean;
  emptyMessage?: string;
  onClearFilters?: () => void;
}

export function ResourceGrid({ resources, loading, emptyMessage, onClearFilters }: ResourceGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (resources.length === 0) {
    return <EmptyState message={emptyMessage} onClearFilters={onClearFilters} />;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-500">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} /> // Fixed to pass 'resource' prop correctly
      ))}
    </div>
  );
}
