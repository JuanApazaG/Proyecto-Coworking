import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { workspaces, Workspace } from '../../data/workspaces';

interface MapComponentProps {
  selectedWorkspace?: string;
  onSelectWorkspace?: (workspaceId: string) => void;
  showInfoOnHover?: boolean;
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  selectedWorkspace, 
  onSelectWorkspace,
  showInfoOnHover = false,
  height = 'h-96'
}) => {
  const [hoveredWorkspace, setHoveredWorkspace] = useState<string | null>(null);

  // This is a simulated map - in a real implementation, this would use Google Maps or Mapbox
  return (
    <div className={`relative w-full ${height} bg-gray-200 rounded-lg overflow-hidden`}>
      {/* Simulated map background */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
           style={{backgroundImage: 'url(https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg)'}}>
      </div>
      
      {/* Map overlay */}
      <div className="absolute inset-0 bg-primary-900 opacity-10"></div>
      
      {/* Workspace markers */}
      {workspaces.map((workspace) => {
        const isSelected = selectedWorkspace === workspace.id;
        const isHovered = hoveredWorkspace === workspace.id;
        const shouldShowInfo = isSelected || (isHovered && showInfoOnHover);
        
        // Generate simulated positions for the markers
        const left = `${20 + (workspace.location.lng % 50)}%`;
        const top = `${20 + (workspace.location.lat % 50)}%`;
        
        return (
          <div 
            key={workspace.id}
            className="absolute"
            style={{ left, top }}
          >
            {/* Marker */}
            <div 
              className={`
                relative z-10 cursor-pointer transition-all duration-300
                ${isSelected || isHovered ? 'scale-125' : 'scale-100'}
              `}
              onClick={() => onSelectWorkspace && onSelectWorkspace(workspace.id)}
              onMouseEnter={() => setHoveredWorkspace(workspace.id)}
              onMouseLeave={() => setHoveredWorkspace(null)}
            >
              <div className={`
                p-1 rounded-full
                ${isSelected ? 'bg-accent-900' : 'bg-primary-900'}
                ${isHovered && !isSelected ? 'bg-primary-700' : ''}
              `}>
                <MapPin size={24} className="text-white" />
              </div>
              
              {/* Pulse animation for selected marker */}
              {isSelected && (
                <div className="absolute inset-0 rounded-full bg-accent-900 opacity-30 animate-ping"></div>
              )}
              
              {/* Info popup */}
              {shouldShowInfo && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg z-20 overflow-hidden">
                  <div className="w-full h-20 bg-cover bg-center" 
                       style={{backgroundImage: `url(${workspace.images[0]})`}}></div>
                  <div className="p-2">
                    <h5 className="font-medium text-sm">{workspace.name}</h5>
                    <p className="text-xs text-gray-600">${workspace.price.hourly}/hr</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-xs ml-1">{workspace.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({workspace.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      
      {/* Map attribution - would be required in a real implementation */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-700 bg-white bg-opacity-70 px-2 py-1 rounded">
        Simulated Map (For Demonstration)
      </div>
    </div>
  );
};

export default MapComponent;