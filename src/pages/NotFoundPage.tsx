import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-16 pb-8 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-900 mb-6">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The workspace you're looking for might have been moved or doesn't exist. 
          Let's help you find a better space to work!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/search" className="btn btn-secondary flex items-center justify-center">
            <Search size={18} className="mr-2" />
            Find Workspaces
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;