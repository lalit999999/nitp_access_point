import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-black text-gray-200 dark:text-gray-800">404</h1>
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Page Not Found</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
