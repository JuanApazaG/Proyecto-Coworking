import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Power } from 'lucide-react';
import { Workspace } from '../../data/workspaces';

interface WorkspaceCardProps {
  workspace: Workspace;
  size?: 'sm' | 'md' | 'lg';
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace, size = 'md' }) => {
  // Conditionally set classes based on size
  const cardClasses = {
    sm: 'max-w-xs',
    md: 'max-w-sm',
    lg: 'max-w-md',
  };
  
  const imageHeight = {
    sm: 'h-40',
    md: 'h-48',
    lg: 'h-56',
  };

  return (
    <article className={`card group ${cardClasses[size]} w-full overflow-hidden transition-all duration-300 hover:-translate-y-1`}>
      {/* Image container */}
      <div className={`relative ${imageHeight[size]} overflow-hidden`}>
        <img 
          src={workspace.images[0]} 
          alt={workspace.name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {workspace.popular && (
          <div className="absolute top-2 right-2 bg-accent-900 text-white text-xs font-medium px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{workspace.name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{workspace.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{workspace.location.address}, {workspace.location.city}</span>
        </div>
        
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {workspace.shortDescription}
        </p>
        
        {/* Amenities */}
        <div className="flex items-center mb-4 space-x-3">
          {workspace.features.wifi && (
            <div className="text-xs flex items-center text-gray-600" title="WiFi Available">
              <Wifi size={14} className="mr-1" />
              <span>WiFi</span>
            </div>
          )}
          {workspace.features.powerOutlets && (
            <div className="text-xs flex items-center text-gray-600" title="Power Outlets">
              <Power size={14} className="mr-1" />
              <span>Power</span>
            </div>
          )}
          {workspace.features.coffee && (
            <div className="text-xs flex items-center text-gray-600" title="Coffee Available">
              <Coffee size={14} className="mr-1" />
              <span>Coffee</span>
            </div>
          )}
        </div>
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-primary-900">
            <span className="font-semibold">${workspace.price.hourly}</span>
            <span className="text-sm text-gray-600">/hour</span>
          </div>
          <Link 
            to={`/workspace/${workspace.id}`} 
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default WorkspaceCard;