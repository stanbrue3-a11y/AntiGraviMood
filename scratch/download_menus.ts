import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function download(url: string, dest: string) {
  const writer = fs.createWriteStream(dest);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function main() {
  const ayakoUrl = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/ayako-teppanyaki/Ayako_teppanyaki_.pdf";
  const banakUrl = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/banak-cuisine-du-tibet/BANAK_CUISINE_DU_TIBET.pdf";

  console.log('Downloading Ayako menu...');
  await download(ayakoUrl, path.join(__dirname, 'ayako_menu.pdf'));
  console.log('Ayako menu downloaded.');

  console.log('Downloading Banak menu...');
  await download(banakUrl, path.join(__dirname, 'banak_menu.pdf'));
  console.log('Banak menu downloaded.');
}

main().catch(console.error);
