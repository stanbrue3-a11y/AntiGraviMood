export const generateMapboxHtml = (initialPlacesData: string): string => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; background-color: #000; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }

/* Custom Marker Styles (Same as before but adapted for Mapbox) */
.pin-outer {
  width: 32px; 
  height: 32px;
  border-radius: 50%;
  background: white;
  padding: 2px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center bottom;
  cursor: pointer;
}
.pin-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex; align-items: center; justify-content: center;
}
.pin-inner svg { width: 16px; height: 16px; fill: white; }

/* Pulse animation for user location */
.user-dot {
  width: 20px; height: 20px;
  background-color: #4285F4;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(66, 133, 244, 0.5);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 133, 244, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0); }
}
</style>
</head>
<body>
<div id="map"></div>
<script>
    // TOKENS AND DATA
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhbnRoZW1hbnMiLCJhIjoiY21qYW9rZmJzMDVrejNkc2J6dW9sbmNubCJ9.rio8auCYmW4qWaHP9YxD5A';
    const initialPlaces = ${initialPlacesData};
    const activeMarkers = {};

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11', // The Premium Dark Style
        center: [2.3522, 48.8566],
        zoom: 12,
        attributionControl: false,
        logoPosition: 'bottom-left'
    });

    // Disable default map rotation for easier UX
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    // ICONS AND COLORS
    var colors={chill:'#8ccaf7',festif:'#ffab60',culturel:'#c499ff'};
    var icons={
        'bar':'<path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 5L12 10.59 16.57 5H7.43z"/>', 
        'café':'<path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>',
        'restaurant':'<path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>',
        'club':'<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>',
        'espace-culturel':'<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>',
        'parc':'<path d="M17 8C8 10 5.9 16.17 3.82 21.34 3.57 22.03 3.5 22.5 3.5 22.5s.47-.07 1.16-.32C9.83 20.1 16 18 18 9s-1-1-1-1z"/>',
        'museum': '<path d="M4 10h3v7H4zm6.5 0h3v7h-3zm6.5 0h3v7h-3zM12 1L2 6v2h20V6zM2 22h20v-3H2z"/>',
        'workshop': '<path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/>',
        'exhibition': '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>'
    };

    function createMarkerElement(p) {
        var c=colors[p.mood]||'#888';
        var svg=icons[p.category]||'<circle cx="12" cy="12" r="8"/>';
        
        var el = document.createElement('div');
        el.className = 'pin-outer';
        el.innerHTML = '<div class="pin-inner" style="background:'+c+'"><svg viewBox="0 0 24 24">'+svg+'</svg></div>';
        
        // Click handling
        el.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent map click
            // Animate effect
            el.style.transform = 'scale(1.2)';
            setTimeout(() => el.style.transform = 'scale(1)', 200);
            
            window.ReactNativeWebView.postMessage(JSON.stringify({t:'s',id:p.id}));
        });
        
        return el;
    }

    // INITIAL RENDER
    map.on('load', function() {
        initialPlaces.forEach(function(p) {
            var el = createMarkerElement(p);
            var marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
                .setLngLat([p.lng, p.lat])
                .addTo(map);
            
            activeMarkers[p.id] = marker;
        });
        
        window.ReactNativeWebView.postMessage(JSON.stringify({t:'r'})); // Ready
    });

    // REACT NATIVE COMMUNICATION
    document.addEventListener('message', function(e) { handleRNMsg(e.data); });
    window.addEventListener('message', function(e) { handleRNMsg(e.data); });

    var userMarker = null;

    function handleRNMsg(data) {
        try {
            var d = JSON.parse(data);
            
            // UPDATE LOCATION
            if (d.t === 'u') {
                if (!userMarker) {
                    var el = document.createElement('div');
                    el.className = 'user-dot';
                    userMarker = new mapboxgl.Marker({ element: el })
                        .setLngLat([d.lng, d.lat])
                        .addTo(map);
                } else {
                    userMarker.setLngLat([d.lng, d.lat]);
                }
            }
            
            // CAMERA FLY TO
            if (d.t === 'c') {
                map.flyTo({
                    center: [d.lng, d.lat],
                    zoom: d.z || 15,
                    speed: 1.5,
                    curve: 1
                });
            }
            
            // FILTER PLACES (Simplistic add/remove for now)
            if (d.t === 'f') {
               updateMarkers(d.places);
            }

        } catch(err){ console.error('Map message error:', err); }
    }

    function updateMarkers(newPlaces) {
        var newIds = new Set(newPlaces.map(p => p.id));
        var currentIds = Object.keys(activeMarkers);
        
        // Remove old
        currentIds.forEach(id => {
            if (!newIds.has(id)) {
                activeMarkers[id].remove();
                delete activeMarkers[id];
            }
        });

        // Add new
        newPlaces.forEach(p => {
            if (!activeMarkers[p.id]) {
                var el = createMarkerElement(p);
                var marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
                    .setLngLat([p.lng, p.lat])
                    .addTo(map);
                activeMarkers[p.id] = marker;
            }
        });
    }

</script>
</body>
</html>`;
