import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Temple } from '@/data/temples';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TempleMapProps {
  temples: Temple[];
  selectedTemple?: Temple | null;
  onTempleSelect?: (temple: Temple) => void;
}

const TempleMap = ({ temples, selectedTemple, onTempleSelect }: TempleMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [78.9629, 20.5937], // Center of India
        zoom: 4,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setIsMapReady(true);
      });

      return () => {
        markersRef.current.forEach(marker => marker.remove());
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [mapboxToken]);

  // Add markers when map is ready
  useEffect(() => {
    if (!map.current || !isMapReady) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    temples.forEach(temple => {
      if (temple.latitude && temple.longitude) {
        const el = document.createElement('div');
        el.className = 'temple-marker';
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = selectedTemple?.id === temple.id ? '#d97706' : '#c2410c';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';
        el.style.transition = 'transform 0.2s, background-color 0.2s';

        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.2)';
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
        });
        el.addEventListener('click', () => {
          onTempleSelect?.(temple);
        });

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="font-family: 'Lora', serif; padding: 4px;">
            <h3 style="font-family: 'Cinzel', serif; font-weight: 600; font-size: 14px; margin-bottom: 4px;">${temple.name}</h3>
            <p style="font-size: 12px; color: #666;">${temple.deity} • ${temple.state}</p>
          </div>
        `);

        const marker = new mapboxgl.Marker(el)
          .setLngLat([temple.longitude, temple.latitude])
          .setPopup(popup)
          .addTo(map.current!);

        markersRef.current.push(marker);
      }
    });
  }, [temples, isMapReady, selectedTemple, onTempleSelect]);

  // Fly to selected temple
  useEffect(() => {
    if (map.current && selectedTemple && selectedTemple.latitude && selectedTemple.longitude) {
      map.current.flyTo({
        center: [selectedTemple.longitude, selectedTemple.latitude],
        zoom: 10,
        duration: 1500,
      });
    }
  }, [selectedTemple]);

  if (!mapboxToken) {
    return (
      <div className="h-full bg-muted rounded-xl flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4 text-center">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Enable Interactive Map
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Enter your Mapbox public token to view temples on an interactive map.
            Get your free token at{' '}
            <a
              href="https://mapbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="space-y-2 text-left">
            <Label htmlFor="mapbox-token" className="font-body text-sm">
              Mapbox Public Token
            </Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1..."
              className="font-body"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-card">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapReady && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="animate-pulse font-body text-muted-foreground">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default TempleMap;
