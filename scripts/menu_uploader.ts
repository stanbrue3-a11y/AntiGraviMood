import http from 'http';
import path from 'path';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { exec } from 'child_process';

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const PORT = 4500;

// Serve static HTML/JS for dashboard
const HTML_CONTENT = fs.readFileSync(path.join(__dirname, 'menu_uploader.html'), 'utf8');

// Helper to determine Content-Type
function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.webp':
      return 'image/webp';
    case '.pdf':
      return 'application/pdf';
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
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(HTML_CONTENT);
  } else if (req.method === 'GET' && url.pathname === '/api/places') {
    try {
      const { data, error } = await supabase
        .from('places')
        .select('slug, name, status, arrondissement, Url_Photos_Menu')
        .eq('status', 'SCAFFOLDED')
        .order('name');

      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data || []));
    } catch (err: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  } else if (req.method === 'POST' && url.pathname === '/api/upload') {
    const slug = url.searchParams.get('slug');
    const filename = url.searchParams.get('filename') || 'menu.jpg';

    if (!slug) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing slug parameter' }));
      return;
    }

    // Clean/sanitize filename to avoid path issues
    const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const contentType = getContentType(cleanFilename);
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      let bufferToUpload = buffer;
      const ext = path.extname(cleanFilename).toLowerCase();

      // Optimize image files on-the-fly to reduce size without losing readable quality
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        try {
          console.log(`⚡ [UPLOADER] Auto-optimizing image ${cleanFilename} via sharp...`);
          const pipeline = sharp(buffer);
          const metadata = await pipeline.metadata();

          // Max width 2400px preserves excellent readability while dropping file size
          if (metadata.width && metadata.width > 2400) {
            bufferToUpload = await pipeline
              .resize({ width: 2400, withoutEnlargement: true })
              .jpeg({ quality: 85, progressive: true })
              .toBuffer();
          } else {
            bufferToUpload = await pipeline.jpeg({ quality: 85, progressive: true }).toBuffer();
          }
          console.log(
            `✅ [UPLOADER] Optimization complete: ${(buffer.length / 1024 / 1024).toFixed(2)}MB -> ${(bufferToUpload.length / 1024 / 1024).toFixed(2)}MB`,
          );
        } catch (sharpError: any) {
          console.error(
            `⚠️ [UPLOADER] Sharp optimization failed, uploading original buffer:`,
            sharpError.message,
          );
        }
      }

      const storagePath = `menus/${slug}/${cleanFilename}`;

      try {
        console.log(`📡 [UPLOADER] Uploading ${cleanFilename} to Storage for ${slug}...`);

        // 1. Upload file to Supabase Storage place-media bucket
        const { error: uploadError } = await supabase.storage
          .from('place-media')
          .upload(storagePath, bufferToUpload, {
            contentType: contentType,
            upsert: true,
          });

        if (uploadError) throw uploadError;

        // 2. Get Public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from('place-media').getPublicUrl(storagePath);

        console.log(`🔗 [UPLOADER] Public URL: ${publicUrl}`);

        // 3. Fetch current Url_Photos_Menu array
        const { data: placeData, error: selectError } = await supabase
          .from('places')
          .select('Url_Photos_Menu')
          .eq('slug', slug)
          .single();

        if (selectError) throw selectError;

        let currentUrls: string[] = [];
        if (placeData?.Url_Photos_Menu) {
          if (Array.isArray(placeData.Url_Photos_Menu)) {
            currentUrls = placeData.Url_Photos_Menu;
          } else if (typeof placeData.Url_Photos_Menu === 'string') {
            try {
              currentUrls = JSON.parse(placeData.Url_Photos_Menu);
            } catch (e) {
              currentUrls = [placeData.Url_Photos_Menu];
            }
          }
        }

        if (!currentUrls.includes(publicUrl)) {
          currentUrls.push(publicUrl);
        }

        // 4. Update places table Url_Photos_Menu array column
        const { error: dbError } = await supabase
          .from('places')
          .update({
            Url_Photos_Menu: currentUrls,
          })
          .eq('slug', slug);

        if (dbError) throw dbError;

        console.log(`✅ [UPLOADER] Database appended for ${slug}!`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, publicUrl }));
      } catch (err: any) {
        console.error(`❌ [UPLOADER] Upload error:`, err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else if (req.method === 'POST' && url.pathname === '/api/delete-file') {
    const slug = url.searchParams.get('slug');
    const fileUrl = url.searchParams.get('url');

    if (!slug || !fileUrl) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing slug or url parameter' }));
      return;
    }

    try {
      console.log(`🗑️ [UPLOADER] Deleting file ${fileUrl} for ${slug}...`);

      // 1. Fetch current place's Url_Photos_Menu
      const { data: placeData, error: selectError } = await supabase
        .from('places')
        .select('Url_Photos_Menu')
        .eq('slug', slug)
        .single();

      if (selectError) throw selectError;

      const currentUrls = placeData?.Url_Photos_Menu || [];
      const updatedUrls = currentUrls.filter((u: string) => u !== fileUrl);

      // 2. Update place in database
      const { error: dbError } = await supabase
        .from('places')
        .update({
          Url_Photos_Menu: updatedUrls.length > 0 ? updatedUrls : null,
        })
        .eq('slug', slug);

      if (dbError) throw dbError;

      // 3. Remove file from storage
      const match = fileUrl.match(/\/place-media\/(.+)$/);
      if (match && match[1]) {
        const storagePath = decodeURIComponent(match[1]);
        console.log(`🧹 [UPLOADER] Removing storage file: ${storagePath}`);
        await supabase.storage.from('place-media').remove([storagePath]);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (err: any) {
      console.error(`❌ [UPLOADER] Delete error:`, err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 MoodMap Menu Uploader server running on http://localhost:${PORT}`);
  console.log(`👉 Press Ctrl+C to stop`);
  exec(`open http://localhost:${PORT}`);
});
