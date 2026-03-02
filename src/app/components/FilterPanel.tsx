import { useSearchParams } from 'react-router';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { X } from 'lucide-react';

interface FilterPanelProps {
  onClose: () => void;
}

export function FilterPanel({ onClose }: FilterPanelProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const currentSemester = searchParams.get('semester');
  const currentType = searchParams.get('type');
  const currentYear = searchParams.get('year');

  return (
    <div className="p-4 w-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block text-sm font-medium">Semester</Label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => updateFilter('semester', currentSemester === sem.toString() ? null : sem.toString())}
                className={`px-2 py-1 text-sm rounded border ${
                  currentSemester === sem.toString()
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-2 block text-sm font-medium">Type</Label>
          <div className="flex gap-2">
            {['pyq', 'notes', 'book'].map((type) => (
              <button
                key={type}
                onClick={() => updateFilter('type', currentType === type ? null : type)}
                className={`px-3 py-1 text-sm rounded-full border ${
                  currentType === type
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
                }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setSearchParams(new URLSearchParams())}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
