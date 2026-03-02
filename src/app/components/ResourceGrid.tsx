import { Resource } from '../lib/data';
import { ResourceCard } from './ResourceCard';
import { SkeletonCard } from './SkeletonCard';
import { EmptyState } from './EmptyState';

interface ResourceGridProps {
  resources: Resource[];
  loading: boolean;
}

export function ResourceGrid({ resources, loading }: ResourceGridProps) {
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
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
