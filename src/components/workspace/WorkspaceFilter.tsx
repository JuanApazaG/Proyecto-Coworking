import React, { useState } from 'react';
import { Search, Filter, Coffee, Wifi, Power, DollarSign, Volume2, Calendar } from 'lucide-react';

interface WorkspaceFilterProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  
  selectedType: string | 'any';
  setSelectedType: React.Dispatch<React.SetStateAction<string | 'any'> | 'any'>;
  selectedPriceRange: string | 'any';
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string | 'any'> | 'any'>;
  selectedSort: string | 'relevance';
  setSelectedSort: React.Dispatch<React.SetStateAction<string | 'relevance'> | 'relevance'>;
}

const WorkspaceFilter: React.FC<WorkspaceFilterProps> = ({
  isCollapsed = false,
  onToggleCollapse,
  selectedType,
  setSelectedType,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedSort,
  setSelectedSort,
}) => {
  const [amenitiesState, setAmenitiesState] = useState({
    wifi: false,
    powerOutlets: false,
    coffee: false,
    quiet: false,
  });

  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleToggleAmenity = (amenity: keyof typeof amenitiesState) => {
    setAmenitiesState(prevState => ({
      ...prevState,
      [amenity]: !prevState[amenity],
    }));
  };

  const handleDateClick = () => {
    setIsDateSelected(true);
    alert('Funcionalidad de selección de fecha próximamente.');
  };

  const priceRangeOptions = [
    { value: 'any', label: 'Cualquier Precio' },
    { value: '0-5', label: 'Bs. 0-5/hora' },
    { value: '5-15', label: 'Bs. 5-15/hora' },
    { value: '15-30', label: 'Bs. 15-30/hora' },
    { value: '30-50', label: 'Bs. 30-50/hora' },
    { value: '50-', label: 'Bs. 50+/hora' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Buscar por ubicación, nombre o palabra clave"
          className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-500"
        />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Filter size={18} className="text-primary-900 mr-2" />
          <h3 className="font-medium">Filtros</h3>
        </div>
        {onToggleCollapse && (
          <button 
            onClick={onToggleCollapse}
            className="text-sm text-primary-700 hover:text-primary-900"
          >
            {isCollapsed ? 'Mostrar Filtros' : 'Ocultar Filtros'}
          </button>
        )}
      </div>
      
      {!isCollapsed && (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Comodidades</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  amenitiesState.wifi 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleAmenity('wifi')}
              >
                <Wifi size={16} className="mr-2" />
                WiFi Rápido
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  amenitiesState.powerOutlets 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleAmenity('powerOutlets')}
              >
                <Power size={16} className="mr-2" />
                Enchufes
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  amenitiesState.coffee 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleAmenity('coffee')}
              >
                <Coffee size={16} className="mr-2" />
                Café
              </button>
              
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors ${
                  amenitiesState.quiet 
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleToggleAmenity('quiet')}
              >
                <Volume2 size={16} className="mr-2" />
                Ambiente Silencioso
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Rango de Precio</h4>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value as string | 'any')}
            >
              {priceRangeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Tipo de Espacio</h4>
            <div className="grid grid-cols-2 gap-3">
              {['any', 'coworking', 'cafe', 'library', 'hotel'].map((type) => (
                <button
                  key={type}
                  className={`px-3 py-2 rounded-lg text-sm border capitalize transition-colors ${
                    selectedType === type
                      ? 'bg-primary-50 border-primary-200 text-primary-900'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedType(type as string | 'any')}
                >
                  {type === 'any' ? 'Cualquier Tipo' :
                   type === 'coworking' ? 'Coworking' :
                   type === 'cafe' ? 'Cafetería' :
                   type === 'library' ? 'Biblioteca' :
                   'Hotel'}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Fecha</h4>
            <button
              className={`flex items-center px-3 py-2 rounded-lg text-sm border transition-colors w-full ${
                 isDateSelected
                    ? 'bg-primary-50 border-primary-200 text-primary-900' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={handleDateClick}
            >
              <Calendar size={16} className="mr-2" />
              <span>Seleccionar Fecha</span>
            </button>
          </div>
          
          <button className="btn btn-primary w-full">
            Aplicar Filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkspaceFilter;