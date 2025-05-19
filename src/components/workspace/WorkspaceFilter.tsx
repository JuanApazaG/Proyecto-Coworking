import React, { useState } from 'react';
import { Search, Filter, Coffee, Wifi, Power, DollarSign, Volume2, Calendar } from 'lucide-react';

interface FilterState {
  wifi: boolean;
  powerOutlets: boolean;
  coffee: boolean;
  quiet: boolean;
  priceRange: [number, number];
  workspaceType: string[];
}

interface WorkspaceFilterProps {
  onFilterChange?: (filters: FilterState) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const WorkspaceFilter: React.FC<WorkspaceFilterProps> = ({ 
  onFilterChange,
  isCollapsed = false,
  onToggleCollapse
}) => {
  const [filters, setFilters] = useState<FilterState>({
    wifi: false,
    powerOutlets: false,
    coffee: false,
    quiet: false,
    priceRange: [0, 50],
    workspaceType: [],
  });

  const handleToggleFilter = (name: keyof FilterState, value: any) => {
    let newFilters;
    
    if (name === 'workspaceType') {
      const types = [...filters.workspaceType];
      const index = types.indexOf(value);
      
      if (index === -1) {
        types.push(value);
      } else {
        types.splice(index, 1);
      }
      
      newFilters = { ...filters, [name]: types };
    } else if (typeof value === 'boolean') {
      newFilters = { ...filters, [name]: !filters[name as keyof FilterState] };
    } else {
      newFilters = { ...filters, [name]: value };
    }
    
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFilters({
      ...filters,
      priceRange: [0, value],
    });
    
    if (onFilterChange) {
      onFilterChange({
        ...filters,
        priceRange: [0, value],
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by location, name, or keyword"
          className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-500"
        />
      </div>
      
      {/* Filter header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Filter size={18} className="text-primary-900 mr-2" />
          <h3 className="font-medium">Filters</h3>
        </div>
        {onToggleCollapse && (
          <button 
            onClick={onToggleCollapse}
            className="text-sm text-primary-700 hover:text-primary-900"
          >
            {isCollapsed ? 'Show Filters' : 'Hide Filters'}
          </button>
        )}
      </div>
      
      {/* Filter options - conditionally show based on isCollapsed */}
      {!isCollapsed && (
        <div className="space-y-6">
          {/* Amenities section */}
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Amenities</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  filters.wifi 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleFilter('wifi', !filters.wifi)}
              >
                <Wifi size={16} className="mr-2" />
                Fast WiFi
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  filters.powerOutlets 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleFilter('powerOutlets', !filters.powerOutlets)}
              >
                <Power size={16} className="mr-2" />
                Power Outlets
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  filters.coffee 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleFilter('coffee', !filters.coffee)}
              >
                <Coffee size={16} className="mr-2" />
                Coffee
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  filters.quiet 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleFilter('quiet', !filters.quiet)}
              >
                <Volume2 size={16} className="mr-2" />
                Quiet Environment
              </button>
            </div>
          </div>
          
          {/* Price range slider */}
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Price Range</h4>
            <div className="mb-1 flex items-center">
              <DollarSign size={16} className="text-gray-500 mr-1" />
              <span className="text-sm text-gray-700">Up to ${filters.priceRange[1]}/hour</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$50+</span>
            </div>
          </div>
          
          {/* Workspace type */}
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Workspace Type</h4>
            <div className="grid grid-cols-2 gap-3">
              {['coworking', 'cafe', 'library', 'hotel'].map((type) => (
                <button
                  key={type}
                  className={`px-3 py-2 rounded-lg text-sm border capitalize transition-colors ${
                    filters.workspaceType.includes(type)
                      ? 'bg-primary-50 border-primary-200 text-primary-900' 
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleToggleFilter('workspaceType', type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Date picker placeholder (would be integrated with a date picker library in a real implementation) */}
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Date</h4>
            <button
              className="flex items-center px-3 py-2 rounded-lg text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 w-full"
            >
              <Calendar size={16} className="mr-2" />
              <span>Select Date</span>
            </button>
          </div>
          
          {/* Apply filters button */}
          <button className="btn btn-primary w-full">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkspaceFilter;