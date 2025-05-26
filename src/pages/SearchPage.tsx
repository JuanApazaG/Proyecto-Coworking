import React, { useState } from 'react';
import { MenuSquare, Map, SlidersHorizontal } from 'lucide-react';
import { workspaces } from '../data/workspaces';
import WorkspaceList from '../components/workspace/WorkspaceList';
import WorkspaceFilter from '../components/workspace/WorkspaceFilter';
import MapComponent from '../components/map/MapComponent';

const SearchPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | undefined>(undefined);
  
  // This would normally filter workspaces based on search criteria
  // For this demo, we're just using all workspaces
  
  const toggleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'map' : 'list');
  };
  
  const toggleFilterCollapse = () => {
    setIsFilterCollapsed(!isFilterCollapsed);
  };
  
  const handleSelectWorkspace = (workspaceId: string) => {
    setSelectedWorkspace(workspaceId);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with filters - on mobile this will be collapsible */}
          <div className={`lg:w-1/4 transition-all duration-300 ${
            isFilterCollapsed ? 'h-20' : 'h-auto'
          }`}>
            <WorkspaceFilter 
              isCollapsed={isFilterCollapsed}
              onToggleCollapse={toggleFilterCollapse}
            />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* View mode toggle and result count */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Espacios de Trabajo</h1>
                <p className="text-gray-600">{workspaces.length} resultados encontrados</p>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Mobile filter toggle */}
                <button 
                  className="lg:hidden p-2 rounded-lg border border-gray-300 text-gray-700"
                  onClick={toggleFilterCollapse}
                >
                  <SlidersHorizontal size={20} />
                </button>
                
                {/* View mode toggle */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    className={`p-2 ${
                      viewMode === 'list' 
                        ? 'bg-primary-900 text-white' 
                        : 'bg-white text-gray-700'
                    }`}
                    onClick={() => setViewMode('list')}
                    aria-label="Vista de lista"
                  >
                    <MenuSquare size={20} />
                  </button>
                  <button
                    className={`p-2 ${
                      viewMode === 'map' 
                        ? 'bg-primary-900 text-white' 
                        : 'bg-white text-gray-700'
                    }`}
                    onClick={() => setViewMode('map')}
                    aria-label="Vista de mapa"
                  >
                    <Map size={20} />
                  </button>
                </div>
                
                {/* Sort options */}
                <select className="p-2 border border-gray-300 rounded-lg text-gray-700 bg-white">
                  <option value="relevance">Ordenar por: Relevancia</option>
                  <option value="price_low">Precio: Menor a Mayor</option>
                  <option value="price_high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Valorados</option>
                </select>
              </div>
            </div>
            
            {/* Map view (conditionally displayed) */}
            {viewMode === 'map' && (
              <div>
                <MapComponent 
                  height="h-[600px]" 
                  selectedWorkspace={selectedWorkspace} 
                  onSelectWorkspace={handleSelectWorkspace}
                  showInfoOnHover
                />
                
                {/* Selected workspace preview (when a marker is clicked) */}
                {selectedWorkspace && (
                  <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      {workspaces.find(w => w.id === selectedWorkspace)?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {workspaces.find(w => w.id === selectedWorkspace)?.shortDescription}
                    </p>
                    <div className="flex justify-end">
                      <a 
                        href={`/workspace/${selectedWorkspace}`} 
                        className="btn btn-primary btn-sm"
                      >
                        Ver Detalles
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* List view (conditionally displayed) */}
            {viewMode === 'list' && (
              <WorkspaceList workspaces={workspaces} cols={3} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;