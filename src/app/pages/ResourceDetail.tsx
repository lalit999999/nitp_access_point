import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { MOCK_RESOURCES, Resource } from '../lib/data';
import { Button } from '../components/ui/button';
import { ArrowLeft, Download, Eye, Star, ThumbsUp, MessageSquare, Share2, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export default function ResourceDetail() {
  const { id } = useParams();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      const found = MOCK_RESOURCES.find(r => r.id === id);
      setResource(found || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Resource Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success("Download started!");
    // Mock download logic
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 dark:text-gray-400 dark:hover:text-gray-200">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Resources
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: PDF Preview */}
        <div className="lg:col-span-2">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center dark:bg-gray-900 dark:border-gray-800 relative overflow-hidden group">
              <FileText className="h-20 w-20 text-gray-300 mb-4" />
              <p className="text-gray-500">Preview not available for mock data</p>
          </div>
          
          {/* Comments Section */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Discussion
            </h3>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6 dark:bg-gray-900 dark:border-gray-800">
              <textarea 
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                rows={3}
                placeholder="Ask a question or leave a comment..."
              ></textarea>
              <div className="flex justify-end mt-3">
                <Button size="sm">Post Comment</Button>
              </div>

              <div className="mt-8 space-y-6">
                {/* Mock Comments */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    JD
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">John Doe</span>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      This was really helpful for my mid-sem prep! Thanks for sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 mb-4 dark:bg-blue-900/30 dark:text-blue-300 uppercase tracking-wide">
                {resource.type}
              </span>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2 dark:text-gray-100">
                {resource.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  {resource.downloadCount}
                </span>
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  {resource.rating}
                </span>
              </div>

              <div className="space-y-4 border-t border-gray-100 pt-6 dark:border-gray-800">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Subject</p>
                    <p className="font-medium">{resource.subject}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Semester</p>
                    <p className="font-medium">{resource.semester}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Year</p>
                    <p className="font-medium">{resource.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Author</p>
                    <p className="font-medium">{resource.author || 'Unknown'}</p>
                  </div>
                </div>

                <Button onClick={handleDownload} className="w-full h-12 text-base shadow-lg shadow-blue-500/20">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resource
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
