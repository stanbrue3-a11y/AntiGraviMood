import fs from 'fs';
import path from 'path';

const targetSlugs = [
  'mosugo-mory-sacko-14',
  'mosuke-par-mory-sacko',
  'mr-chow-cuisine-chinoise',
  'oggi',
  'les-tontons',
  'les-fauves-restaurant',
  'mr-chow-paris-14',
  'mian-fan',
  'maison-binder',
  'hanoi-quan-montparnasse',
  'les-petits-parisiens-paris-14',
  'ma-shi-ta',
  'madame-ngo',
  'maison-peret'
];

targetSlugs.forEach(slug => {
  const p = path.join(__dirname, `${slug}_payload.json`);
  if (!fs.existsSync(p)) {
    console.log(`- ${slug}: payload file DOES NOT EXIST`);
    return;
  }
  const content = JSON.parse(fs.readFileSync(p, 'utf8'));
  const isDefault = content.on_mange_quoi_ici === "Cuisine [adjectif/type]. [Plat 1] & [Plat 2].";
  console.log(`- ${slug}: isDefault=${isDefault} | itemsCount=${content.menu_items?.flatMap((c: any) => c.items || []).length || 0}`);
});
