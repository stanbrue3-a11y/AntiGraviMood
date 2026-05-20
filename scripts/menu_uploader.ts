import http from 'http';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { exec } from 'child_process';

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PORT = 4500;

// Serve static HTML/JS for dashboard
const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="fr" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MoodMap — Menu Uploader</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Outfit', sans-serif;
      background: radial-gradient(circle at top, #0f172a 0%, #020617 100%);
    }
    .glass {
      background: rgba(15, 23, 42, 0.45);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="text-slate-100 min-h-screen flex flex-col selection:bg-rose-500 selection:text-white">

  <!-- Header -->
  <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-rose-500/20">M</div>
        <div>
          <h1 class="text-lg font-semibold tracking-tight">MoodMap</h1>
          <p class="text-xs text-slate-400 font-medium">Surgical Menu Ingestion Panel</p>
        </div>
      </div>
      <div class="flex items-center gap-2 text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 text-slate-400">
        <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Local Server : Active (Port ${PORT})
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1 max-w-5xl w-full mx-auto px-6 py-8">
    <div class="flex flex-col gap-6">
      
      <!-- Intro Card -->
      <div class="glass p-6 rounded-2xl flex flex-col gap-2">
        <h2 class="text-xl font-semibold text-rose-400">Fiches "SCAFFOLDED" en attente de menu</h2>
        <p class="text-sm text-slate-300">
          Glisse et dépose directement les captures d'écran des menus depuis Google Maps sur le restaurant correspondant. 
          Aucune saisie de texte requise. Les images seront automatiquement téléversées sur Supabase Storage et rattachées au lieu.
        </p>
      </div>

      <!-- Filters -->
      <div class="glass p-4 rounded-xl flex items-center gap-4">
        <span class="text-xs uppercase font-bold tracking-wider text-slate-400">Arrondissement :</span>
        <div id="filter-buttons" class="flex flex-wrap gap-2">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Places List -->
      <div id="places-container" class="grid gap-4 sm:grid-cols-2">
        <div class="col-span-full py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
          <svg class="animate-spin h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-sm font-medium">Récupération des fiches...</span>
        </div>
      </div>

    </div>
  </main>

  <footer class="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
    MoodMap 2026 — Standard Moelle & Supabase V4 Integration
  </footer>

  <script>
    let allPlaces = [];
    let selectedArrondissement = 'all';

    async function loadPlaces() {
      try {
        const response = await fetch('/api/places');
        allPlaces = await response.json();
        
        renderFilters();
        renderPlaces();
      } catch (err) {
        console.error(err);
        document.getElementById('places-container').innerHTML = '<div class="col-span-full text-center text-rose-500 font-medium">Erreur lors de la récupération des données.</div>';
      }
    }

    function renderFilters() {
      const filterContainer = document.getElementById('filter-buttons');
      const arrondissements = [...new Set(allPlaces.map(p => p.arrondissement))].sort((a, b) => a - b);
      
      if (allPlaces.length === 0) {
        filterContainer.innerHTML = '<span class="text-xs text-slate-500 font-medium">Aucun filtre disponible</span>';
        return;
      }

      let html = \`<button onclick="setFilter('all')" class="px-3 py-1 text-xs font-semibold rounded-lg transition-all border \${selectedArrondissement === 'all' ? 'bg-rose-500 text-white border-rose-500/30' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'}">Tous (\${allPlaces.length})</button>\`;
      
      arrondissements.forEach(arr => {
        const count = allPlaces.filter(p => p.arrondissement === arr).length;
        html += \`<button onclick="setFilter(\${arr})" class="px-3 py-1 text-xs font-semibold rounded-lg transition-all border \${selectedArrondissement === arr ? 'bg-rose-500 text-white border-rose-500/30' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'}">Paris \${arr}e (\${count})</button>\`;
      });

      filterContainer.innerHTML = html;
    }

    function setFilter(arr) {
      selectedArrondissement = arr;
      renderFilters();
      renderPlaces();
    }

    function renderPlaces() {
      const container = document.getElementById('places-container');
      const filtered = selectedArrondissement === 'all' 
        ? allPlaces 
        : allPlaces.filter(p => p.arrondissement === selectedArrondissement);

      if (filtered.length === 0) {
        container.innerHTML = \`
          <div class="col-span-full py-16 text-center glass rounded-2xl flex flex-col items-center justify-center gap-3">
            <span class="text-5xl">🎉</span>
            <h3 class="text-lg font-medium text-slate-200">Aucun lieu trouvé</h3>
            <p class="text-sm text-slate-400">Aucune fiche ne correspond à ce filtre.</p>
          </div>
        \`;
        return;
      }

      container.innerHTML = '';
      filtered.forEach(place => {
        const card = document.createElement('div');
        card.className = 'glass p-5 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:border-slate-700/80 relative overflow-hidden group';
        card.id = \`card-\${place.slug}\`;
        
        card.innerHTML = \`
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-rose-400">
                Paris \${place.arrondissement}e
              </span>
              <h3 class="text-base font-semibold text-slate-200 mt-2 tracking-tight group-hover:text-rose-300 transition-colors">\${place.name}</h3>
              <p class="text-xs text-slate-400 font-mono mt-1">\${place.slug}</p>
            </div>
            <div id="status-\${place.slug}" class="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              En attente
            </div>
          </div>

          <!-- Drag & Drop Zone -->
          <div 
            id="dropzone-\${place.slug}"
            class="border-2 border-dashed border-slate-800 rounded-xl py-8 px-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 bg-slate-950/20 hover:bg-rose-500/5 hover:border-rose-500/30 group/zone"
            onclick="document.getElementById('file-input-\${place.slug}').click()"
          >
            <svg class="h-6 w-6 text-slate-500 group-hover/zone:text-rose-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-xs font-medium text-slate-400 group-hover/zone:text-slate-300 transition-colors text-center">
              Glisse la photo ou le PDF ici ou clique pour choisir
            </span>
            <input 
              type="file" 
              id="file-input-\${place.slug}" 
              class="hidden" 
              accept="image/*,application/pdf" 
              onchange="handleFileSelect('\${place.slug}', this.files)"
            />
          </div>
          
          <!-- Success Overlay -->
          <div id="success-\${place.slug}" class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-3 opacity-0 pointer-events-none transition-opacity duration-300">
            <div class="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-emerald-400">Menu lié avec succès !</span>
            <a id="link-\${place.slug}" href="#" target="_blank" class="text-xs text-rose-400 hover:underline">Voir l'image du menu</a>
          </div>
        \`;

        container.appendChild(card);
        setupDragAndDrop(place.slug);
      });
    }

    function setupDragAndDrop(slug) {
      const dropzone = document.getElementById(\`dropzone-\${slug}\`);
      
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.add('bg-rose-500/10', 'border-rose-500/50');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.remove('bg-rose-500/10', 'border-rose-500/50');
        }, false);
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFileSelect(slug, files);
      }, false);
    }

    async function handleFileSelect(slug, files) {
      if (files.length === 0) return;
      const file = files[0];

      const statusEl = document.getElementById(\`status-\${slug}\`);
      const dropzoneEl = document.getElementById(\`dropzone-\${slug}\`);
      
      statusEl.innerHTML = 'Téléversement...';
      statusEl.className = 'text-xs font-medium px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 animate-pulse';

      try {
        const response = await fetch(\`/api/upload?slug=\${slug}&filename=\${encodeURIComponent(file.name)}\`, {
          method: 'POST',
          body: file
        });

        if (!response.ok) {
          throw new Error('Erreur de téléversement');
        }

        const result = await response.json();
        
        // Show success state
        const successEl = document.getElementById(\`success-\${slug}\`);
        const linkEl = document.getElementById(\`link-\${slug}\`);
        linkEl.href = result.publicUrl;
        
        successEl.classList.remove('opacity-0', 'pointer-events-none');
        successEl.classList.add('opacity-100');
        
        statusEl.innerHTML = 'Lié';
        statusEl.className = 'text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';

      } catch (err) {
        console.error(err);
        statusEl.innerHTML = 'Erreur';
        statusEl.className = 'text-xs font-medium px-2.5 py-1 rounded-full bg-rose-950 text-rose-500 border border-rose-500/30';
        alert('Erreur lors du téléversement du menu pour ' + slug);
      }
    }

    window.onload = loadPlaces;
  </script>
</body>
</html>
`;

// Helper to determine Content-Type
function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.png': return 'image/png';
    case '.gif': return 'image/gif';
    case '.webp': return 'image/webp';
    case '.pdf': return 'application/pdf';
    case '.jpg':
    case '.jpeg':
    default:
      return 'image/jpeg';
  }
}

// Start Server
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '', `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/') {
    // Serve HTML Dashboard
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(HTML_CONTENT);
  } 
  
  else if (req.method === 'GET' && url.pathname === '/api/places') {
    // Fetch SCAFFOLDED places
    try {
      const { data, error } = await supabase
        .from('places')
        .select('slug, name, status, arrondissement')
        .eq('status', 'SCAFFOLDED')
        .order('name');

      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data || []));
    } catch (err: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  } 
  
  else if (req.method === 'POST' && url.pathname === '/api/upload') {
    // Handle Direct Image Binary Upload
    const slug = url.searchParams.get('slug');
    const filename = url.searchParams.get('filename') || 'menu.jpg';

    if (!slug) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing slug parameter' }));
      return;
    }

    const contentType = getContentType(filename);
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      const storagePath = `menus/${slug}/${filename}`;

      try {
        console.log(`📡 [UPLOADER] Uploading ${filename} to Storage for ${slug}...`);
        
        // 1. Upload file to Supabase Storage place-media bucket
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('place-media')
          .upload(storagePath, buffer, {
            contentType: contentType,
            upsert: true
          });

        if (uploadError) throw uploadError;

        // 2. Get Public URL
        const { data: { publicUrl } } = supabase.storage
          .from('place-media')
          .getPublicUrl(storagePath);

        console.log(`🔗 [UPLOADER] Public URL generated: ${publicUrl}`);

        // 3. Update places row Url_Photos_Menu database column
        const { error: dbError } = await supabase
          .from('places')
          .update({
            Url_Photos_Menu: [publicUrl]
          })
          .eq('slug', slug);

        if (dbError) throw dbError;

        console.log(`✅ [UPLOADER] Database updated for ${slug}!`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, publicUrl }));

      } catch (err: any) {
        console.error(`❌ [UPLOADER] Upload error:`, err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } 
  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 MoodMap Menu Uploader server running on http://localhost:${PORT}`);
  console.log(`👉 Press Ctrl+C to stop`);
  exec(`open http://localhost:${PORT}`);
});
