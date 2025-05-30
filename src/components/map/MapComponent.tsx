import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { workspaces } from '../../data/workspaces';

// Importar el icono de marcador por defecto de Leaflet
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Configurar los iconos por defecto de Leaflet en React
// Esto es necesario porque Webpack (usado por Vite/Create-React-App) maneja las URLs de los archivos de forma diferente
L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

interface MapComponentProps {
  height?: string;
  showInfoOnHover?: boolean; // Podemos considerar usar tooltips en lugar de popups al hacer hover más adelante si es necesario
  selectedWorkspace?: string;
  onSelectWorkspace?: (workspaceId: string) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  height = 'h-[500px]',
  // showInfoOnHover = false, // No usado directamente en la implementación básica con popups
  // selectedWorkspace,
  onSelectWorkspace
}) => {
  // Posición inicial del mapa (ej. La Paz -> Sucre)
  const initialPosition: [number, number] = [-19.0333, -65.2627]; // Coordenadas de Sucre, Bolivia [lat, lng]
  const initialZoom = 13; // Podemos ajustar el zoom si es necesario

  return (
    <div className={`w-full ${height} rounded-lg overflow-hidden shadow-lg`}>
      <MapContainer
        center={initialPosition}
        zoom={initialZoom}
        scrollWheelZoom={false} // Deshabilita el zoom con la rueda del mouse para evitar scrolljacking
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {workspaces.map(workspace => (
          <Marker
            key={workspace.id}
            position={[workspace.location.lat, workspace.location.lng]} // [lat, lng] para Leaflet
            eventHandlers={{
              click: () => {
                if (onSelectWorkspace) {
                  onSelectWorkspace(workspace.id);
                }
              },
            }}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-semibold">{workspace.name}</h3>
                <p className="text-sm text-gray-600">{workspace.location.address}, {workspace.location.city}</p>
                <p className="text-sm text-gray-600">Bs. {workspace.price.hourly}/hora</p>
                <a href={`/workspace/${workspace.id}`} className="text-blue-600 hover:underline text-sm">Ver detalles</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;