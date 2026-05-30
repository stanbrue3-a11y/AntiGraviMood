import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const MAPBOX_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_TOKEN || '';

async function main() {
  const darkStyleUrl =
    'https://api.mapbox.com/styles/v1/stanthemans/cmkn3jdva007y01qzaryxax7k?access_token=' +
    MAPBOX_TOKEN;
  const lightStyleUrl =
    'https://api.mapbox.com/styles/v1/stanthemans/cml3tpi82009c01r4c18r83yz?access_token=' +
    MAPBOX_TOKEN;

  console.log('=== DARK STYLE ===');
  const dark = (await axios.get(darkStyleUrl)).data;
  console.log('Name:', dark.name);
  console.log('Own layers count:', dark.layers?.length);
  console.log('Imports:', JSON.stringify(dark.imports, null, 2));
  console.log('Sources:', JSON.stringify(Object.keys(dark.sources || {})));

  console.log('\n=== LIGHT STYLE ===');
  const light = (await axios.get(lightStyleUrl)).data;
  console.log('Name:', light.name);
  console.log('Own layers count:', light.layers?.length);
  console.log('Imports:', JSON.stringify(light.imports, null, 2));
  console.log('Sources:', JSON.stringify(Object.keys(light.sources || {})));
}

main().catch(console.error);
