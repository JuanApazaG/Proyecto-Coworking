import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { workspaces } from '../../data/workspaces';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

interface MapComponentProps {
  height?: string;
  showInfoOnHover?: boolean;
  selectedWorkspace?: string;
  onSelectWorkspace?: (workspaceId: string) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  height = 'h-[500px]', 
  showInfoOnHover = false,
  selectedWorkspace,
  onSelectWorkspace
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-68.1193, -16.4897], // La Paz coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers when map loads
    map.current.on('load', () => {
      workspaces.forEach(workspace => {
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">${workspace.name}</h3>
              <p class="text-sm text-gray-600">${workspace.location.address}, ${workspace.location.city}</p>
              <p class="text-sm text-gray-600">Bs. ${workspace.price.hourly}/hora</p>
              <a href="/workspace/${workspace.id}" class="text-blue-600 hover:underline text-sm">Ver detalles</a>
            </div>
          `);

        // Create marker
        const marker = new mapboxgl.Marker()
          .setLngLat([workspace.location.lng, workspace.location.lat])
          .setPopup(popup)
          .addTo(map.current!);

        // Add click handler if onSelectWorkspace is provided
        if (onSelectWorkspace) {
          marker.getElement().addEventListener('click', () => {
            onSelectWorkspace(workspace.id);
          });
        }
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [onSelectWorkspace]);

  return (
    <div className={`w-full ${height} rounded-lg overflow-hidden shadow-lg`}>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;