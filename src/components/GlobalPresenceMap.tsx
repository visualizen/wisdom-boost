import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Globe } from 'lucide-react';

interface CountryPresence {
  country: string;
  coordinates: [number, number];
  description: string;
  type: 'office' | 'partner' | 'representative';
}

const GlobalPresenceMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const countries: CountryPresence[] = [
    // Brasil - Sede
    { country: 'Brasil (São Paulo)', coordinates: [-46.6333, -23.5505], description: 'Sede - Escritório Principal', type: 'office' },
    
    // América do Norte
    { country: 'Estados Unidos', coordinates: [-95.7129, 37.0902], description: 'Parceiro Comercial', type: 'partner' },
    { country: 'Canadá', coordinates: [-106.3468, 56.1304], description: 'Representante Comercial', type: 'representative' },
    { country: 'México', coordinates: [-102.5528, 23.6345], description: 'Parceiro Comercial', type: 'partner' },
    
    // América do Sul
    { country: 'Argentina', coordinates: [-63.6167, -38.4161], description: 'Parceiro Comercial', type: 'partner' },
    { country: 'Chile', coordinates: [-71.5430, -35.6751], description: 'Representante Comercial', type: 'representative' },
    { country: 'Colômbia', coordinates: [-74.2973, 4.5709], description: 'Parceiro Comercial', type: 'partner' },
    
    // Europa
    { country: 'Alemanha', coordinates: [10.4515, 51.1657], description: 'Parceiro Estratégico', type: 'partner' },
    { country: 'França', coordinates: [2.2137, 46.2276], description: 'Representante Comercial', type: 'representative' },
    { country: 'Espanha', coordinates: [-3.7492, 40.4637], description: 'Parceiro Comercial', type: 'partner' },
    { country: 'Itália', coordinates: [12.5674, 41.8719], description: 'Representante Comercial', type: 'representative' },
    { country: 'Reino Unido', coordinates: [-3.4360, 55.3781], description: 'Parceiro Estratégico', type: 'partner' },
    { country: 'Holanda', coordinates: [5.2913, 52.1326], description: 'Parceiro Comercial', type: 'partner' },
    
    // Ásia
    { country: 'China', coordinates: [104.1954, 35.8617], description: 'Parceiro Estratégico', type: 'partner' },
    { country: 'Índia', coordinates: [78.9629, 20.5937], description: 'Representante Comercial', type: 'representative' },
    { country: 'Japão', coordinates: [138.2529, 36.2048], description: 'Parceiro Comercial', type: 'partner' },
    { country: 'Coreia do Sul', coordinates: [127.7669, 35.9078], description: 'Parceiro Comercial', type: 'partner' },
    
    // Oriente Médio
    { country: 'Emirados Árabes', coordinates: [53.8478, 23.4241], description: 'Parceiro Estratégico', type: 'partner' },
    { country: 'Arábia Saudita', coordinates: [45.0792, 23.8859], description: 'Representante Comercial', type: 'representative' },
    
    // África
    { country: 'África do Sul', coordinates: [22.9375, -30.5595], description: 'Parceiro Comercial', type: 'partner' },
    { country: 'Angola', coordinates: [17.8739, -11.2027], description: 'Representante Comercial', type: 'representative' },
    { country: 'Moçambique', coordinates: [35.5296, -18.6657], description: 'Parceiro Comercial', type: 'partner' },
    
    // Oceania
    { country: 'Austrália', coordinates: [133.7751, -25.2744], description: 'Parceiro Comercial', type: 'partner' },
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: { name: 'globe' },
      zoom: 1.5,
      center: [30, 15],
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add atmosphere effect
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(220, 235, 255)',
        'high-color': 'rgb(180, 210, 240)',
        'horizon-blend': 0.05,
      });
    });

    // Add markers for each country
    countries.forEach((country) => {
      const markerColor = 
        country.type === 'office' ? '#1e40af' : 
        country.type === 'partner' ? '#0891b2' : 
        '#06b6d4';

      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41eiIgZmlsbD0iJycgKyBtYXJrZXJDb2xvciArICciLz4KPC9zdmc+)';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.backgroundSize = 'contain';
      el.style.cursor = 'pointer';

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`
          <div style="padding: 8px; min-width: 180px;">
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">${country.country}</div>
            <div style="font-size: 13px; color: #64748b;">${country.description}</div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; text-transform: uppercase;">
              ${country.type === 'office' ? '🏢 Escritório' : 
                country.type === 'partner' ? '🤝 Parceiro' : 
                '👤 Representante'}
            </div>
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(country.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      // Show popup on hover
      el.addEventListener('mouseenter', () => popup.addTo(map.current!));
      el.addEventListener('mouseleave', () => popup.remove());
    });

    // Globe rotation
    const secondsPerRevolution = 180;
    const maxSpinZoom = 4;
    const slowSpinZoom = 2;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();
    setIsMapInitialized(true);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {!isMapInitialized ? (
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary-light/5">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Mapa de Presença Global</h3>
                <p className="text-muted-foreground mb-4">
                  Para visualizar nosso mapa interativo de presença global, insira seu token do Mapbox
                </p>
                <p className="text-sm text-muted-foreground">
                  Obtenha seu token gratuito em{' '}
                  <a 
                    href="https://account.mapbox.com/access-tokens/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    mapbox.com
                  </a>
                </p>
              </div>

              <div className="w-full max-w-md space-y-3">
                <Input
                  type="text"
                  placeholder="Cole seu token do Mapbox aqui..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="text-center"
                />
                <Button 
                  onClick={handleTokenSubmit}
                  className="w-full bg-gradient-primary"
                  disabled={!mapboxToken.trim()}
                >
                  Carregar Mapa Interativo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full max-w-md pt-4 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-xs text-muted-foreground">Países</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">Continentes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24</div>
                  <div className="text-xs text-muted-foreground">Parceiros</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border/50 shadow-lg">
          <div ref={mapContainer} className="absolute inset-0" />
          
          {/* Legend */}
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Legenda</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1e40af]"></div>
                <span className="text-muted-foreground">Escritório Principal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0891b2]"></div>
                <span className="text-muted-foreground">Parceiros Estratégicos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
                <span className="text-muted-foreground">Representantes</span>
              </div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50">
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{countries.length}</div>
                <div className="text-xs text-muted-foreground">Localizações</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-xs text-muted-foreground">Continentes</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalPresenceMap;
