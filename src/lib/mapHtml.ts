/**
 * Leaflet Map HTML Generator
 * Code HTML/JS pour la WebView Leaflet
 */

export const generateMapHtml = (initialPlacesData: string, isDark: boolean = false): string => `<!DOCTYPE html>  
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body,#map{width:100%;height:100%}

/* DARK MODE OVERRIDES (ESRI PROFESSIONAL DARK) */
    ${isDark ? `
      body { background-color: #0B0E14; } /* Deep Midnight Blue match */
      .leaflet-container { background: #0B0E14 !important; }
      
      /* Enhance Dark Mode to look like Apple Maps Night */
      .leaflet-layer { 
        filter: contrast(1.1) saturate(1.1) brightness(0.95);
      }
    ` : ''}

.pin-outer {
  width: 32px; 
  height: 32px;
  border-radius: 50%;
  background: white;
  padding: 2px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center bottom;
}
.pin-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex; align-items: center; justify-content: center;
}
.pin-inner svg { width: 16px; height: 16px; fill: white; }

.custom-cluster {
    background: #6366f1;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.25);
    text-align: center;
    color: white;
    font-weight: 700;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}
.custom-cluster:active { transform: scale(0.95); }

/* ... existing user-dot styles ... */
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
var map=L.map('map',{zoomControl:false,attributionControl:false}).setView([48.864,2.34],13);

/* TILE LAYERS SWITCH LOGIC */
    ${isDark ? `
        // DARK MODE: CartoDB Dark Matter (Premium Dark, resembling Apple Maps)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            subdomains: 'abcd',
            attribution: ''
        }).addTo(map);
    ` : `
        // LIGHT MODE: CartoDB Voyager (Pastel luxury)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', { maxZoom: 20, attribution: '' }).addTo(map);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', { maxZoom: 20, attribution: '' }).addTo(map);
    `}

var userMarker = null;

var colors={chill:'#8ccaf7',festif:'#ffab60',culturel:'#c499ff'};

var markersLayer = L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    spiderfyOnMaxZoom: true,
    removeOutsideVisibleBounds: true,
    chunkedLoading: true, // Smoother loading RESTORED
    maxClusterRadius: 35,
    iconCreateFunction: function (cluster) {
        var children = cluster.getAllChildMarkers();
        var childCount = children.length;
        
        // Calculate mood distribution
        var counts = {};
        children.forEach(function(m) {
            var mood = m.mood || 'chill'; 
            counts[mood] = (counts[mood] || 0) + 1;
        });

        // Generate Conic Gradient
        var gradientParts = [];
        var currentPerc = 0;
        var keys = Object.keys(counts).sort(); // Sort for consistency

        keys.forEach(function(mood) {
            var color = colors[mood] || '#888';
            var perc = (counts[mood] / childCount) * 100;
            var endPerc = currentPerc + perc;
            gradientParts.push(color + ' ' + currentPerc + '% ' + endPerc + '%');
            currentPerc = endPerc;
        });

        var bgStyle = 'background: conic-gradient(' + gradientParts.join(', ') + ');';
        var size = childCount < 10 ? 36 : childCount < 50 ? 44 : 52;
        
        return L.divIcon({ 
            html: '<span style="z-index:2; position:relative; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">' + childCount + '</span>', 
            className: 'custom-cluster', 
            iconSize: L.point(size, size),
            html: '<div style="width:100%; height:100%; border-radius:50%; position:absolute; top:0; left:0; ' + bgStyle + ' opacity:0.9;"></div><span style="position:relative; z-index:2;">' + childCount + '</span>'
        });
    }
});
map.addLayer(markersLayer);

var activeMarkers = {};

var initialPlaces=${initialPlacesData};
// defined above now
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

function createMarker(p) {
  var c=colors[p.mood]||'#888';
  var svg=icons[p.category]||'<circle cx="12" cy="12" r="8"/>';
  
  var icon=L.divIcon({
    className:'',
    html:'<div class="pin-outer"><div class="pin-inner" style="background:'+c+'"><svg viewBox="0 0 24 24">'+svg+'</svg></div></div>',
    iconSize:[32,32],
    iconAnchor:[16,32] 
  });
  
  var m = L.marker([p.lat,p.lng],{icon:icon});
  m.mood = p.mood; // Attach mood for cluster calculation
  m.on('click',function(){
      window.ReactNativeWebView.postMessage(JSON.stringify({t:'s',id:p.id}));
  });
  return m;
}

var markers = [];
initialPlaces.forEach(function(p){
  var m = createMarker(p);
  markers.push(m);
  activeMarkers[p.id] = m;
});
markersLayer.addLayers(markers);

window.ReactNativeWebView.postMessage(JSON.stringify({t:'r'}));

document.addEventListener('message', function(e) { handleRNMsg(e.data); });
window.addEventListener('message', function(e) { handleRNMsg(e.data); });

function handleRNMsg(data) {
  try {
    var d = JSON.parse(data);
    
    if (d.t === 'u') {
      if (!userMarker) {
        var icon = L.divIcon({ className:'user-dot', iconSize:[20,20] });
        userMarker = L.marker([d.lat, d.lng], {icon: icon}).addTo(map);
      } else {
        userMarker.setLatLng([d.lat, d.lng]);
      }
    }
    
    if (d.t === 'c') {
      map.flyTo([d.lat, d.lng], d.z || 15, { animate: true, duration: 1.5 });
    }
    
    if (d.t === 'f') {
       updateMarkers(d.places);
    }

    if (d.t === 'h') {
        var m = activeMarkers[d.id];
        if(m) {
             markersLayer.zoomToShowLayer(m, function() {
                 var el = m.getElement();
                 if(el) {
                     var pin = el.querySelector('.pin-outer');
                     if(pin) {
                         pin.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                         pin.style.transform = 'scale(1.8)';
                         setTimeout(function(){ pin.style.transform = 'scale(1)'; }, 300);
                     }
                 }
             });
        }
    }
    
  } catch(err){ console.error('Map message error:', err); }
}

function updateMarkers(newPlaces) {
  var newIds = new Set(newPlaces.map(function(p){ return p.id; }));
  var currentIds = Object.keys(activeMarkers);
  
  var toRemove = [];
  var toAdd = [];

  // Identify Removals
  currentIds.forEach(function(id) {
    if (!newIds.has(id)) {
      var m = activeMarkers[id];
      toRemove.push(m);
      
      // Animate out if fully visible (not clustered)
      var el = m.getElement();
      if (el) {
         var pin = el.querySelector('.pin-outer');
         if(pin) {
             // Use ease-in for exit, no bounce
             pin.style.transition = 'all 0.3s ease-in';
             pin.style.transform = 'scale(0)';
             pin.style.opacity = '0';
         }
      }
      delete activeMarkers[id];
    }
  });

  // Identify Additions
  newPlaces.forEach(function(p) {
    if (!activeMarkers[p.id]) {
       var m = createMarker(p);
       toAdd.push(m);
       activeMarkers[p.id] = m;
    }
  });

  // Execute Batch Updates
  // 1. Remove markers (wait 300ms for animation)
  setTimeout(function() {
      if (toRemove.length > 0) {
          markersLayer.removeLayers(toRemove);
      }
      
      // 2. Add new markers
      if (toAdd.length > 0) {
          markersLayer.addLayers(toAdd);
          
          // Animate in new individual markers RESTORED SMOOTH LOGIC
          toAdd.forEach(function(m) {
              requestAnimationFrame(function() {
                  var el = m.getElement();
                  if(el) {
                       var pin = el.querySelector('.pin-outer');
                       if(pin) {
                           // Set initial state
                           pin.style.transition = 'none'; // reset
                           pin.style.transform = 'scale(0)';
                           pin.style.opacity = '0';
                           
                           // Reflow
                           void pin.offsetWidth; 
                           
                           // Animate to final with bounce
                           pin.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                           pin.style.transform = 'scale(1)';
                           pin.style.opacity = '1';
                       }
                  }
              });
          });
      }
  }, 300); 
}

</script>
</body>
</html>`;
