const { execFileSync } = require('child_process');

const payload = {
  on_mange_quoi_ici: 'Tibétain. Sha momos au bœuf & Then Thuk.',
  Url_Photos_Menu: [
    'https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/banak-cuisine-du-tibet/BANAK_CUISINE_DU_TIBET.pdf',
    'https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/banak-cuisine-du-tibet/Capture_d_e_cran_2026-05-20_a__14.48.13.png'
  ],
  coffee_price: 2,
  cocktail_price: 4.5,
  wine_glass: 3,
  menu_items: [
    {
      category_type: 'starter',
      display_label: 'Entrées',
      items: [
        { name: 'Salade Tibétaine', price_cents: 350, description: 'Salade croquante de chou blanc et carottes.' },
        { name: 'Soupe Tsamtang', price_cents: 350, description: 'Soupe traditionnelle tibétaine à la farine d’orge grillée et à la viande finement hachée.' },
        { name: 'Soupe au Maïs et Coriandre', price_cents: 350, description: 'Soupe réconfortante au maïs et coriandre fraîche.' },
        { name: 'Soupe aux Lentilles Corail', price_cents: 350, description: 'Soupe de lentilles corail doucement épicée.' },
        { name: 'Ragoût de Porc Épicé', price_cents: 500, description: 'Ragoût de porc parfumé aux épices traditionnelles tibétaines.' },
        { name: 'Pain Tibétain à la Vapeur', price_cents: 300, description: 'Pain tibétain cuit à la vapeur, accompagnement idéal.' },
        { name: 'Riz Nature', price_cents: 300, description: 'Bol de riz blanc cuit à la vapeur.' },
        { name: 'Edamame', price_cents: 450, description: 'Fèves de soja vertes dans leur cosse, cuites au sel.' }
      ]
    },
    {
      category_type: 'main',
      display_label: 'Momos & Soupes (Spécialités)',
      items: [
        { name: 'Sha Momos au Bœuf', price_cents: 1000, description: '8 pièces. Raviolis faits maison farcis à la viande de bœuf et oignons, cuits à la vapeur. Servis avec sauce soja pimentée.', is_highlight: true },
        { name: 'Sha Momos au Porc', price_cents: 1000, description: '8 pièces. Raviolis faits maison farcis à la viande de porc et ciboulette, cuits à la vapeur. Servis avec sauce soja pimentée.', is_highlight: true },
        { name: 'Tsé Momos', price_cents: 1000, description: '8 pièces. Raviolis faits maison farcis aux épinards, choux, fromage et oignons, cuits à la vapeur.', is_highlight: true },
        { name: 'Then Thuk Viande & Légumes', price_cents: 1050, description: 'Soupe tibétaine traditionnelle de petites pâtes fraîches maison carrées, légumes et viande au choix (bœuf, porc ou végétarienne).' },
        { name: 'Thukpa Viande & Légumes', price_cents: 900, description: 'Soupe tibétaine de grandes pâtes fraîches faites maison, légumes et viande au choix (bœuf, porc ou végétarienne).' },
        { name: 'Grande Soupe aux Momos', price_cents: 1200, description: 'Bouillon chaud de nouilles fraîches garni de raviolis momos (bœuf, porc ou végétarienne).' },
        { name: 'Riz Sauté Spécial', price_cents: 1100, description: 'Riz sauté à la viande de bœuf, porc ou version végétarienne.' },
        { name: 'Riz Sauté aux Crevettes', price_cents: 1200, description: 'Riz sauté aux crevettes et légumes croquants.' },
        { name: 'Nouilles Sautées Spécial', price_cents: 1100, description: 'Nouilles de blé fraîches sautées avec bœuf, porc ou légumes.' },
        { name: 'Nouilles Sautées aux Crevettes', price_cents: 1200, description: 'Nouilles de blé fraîches sautées avec crevettes et légumes.' },
        { name: 'Jjajang Thukpa', price_cents: 1200, description: 'Nouilles de blé fraîches avec viande finement hachée mijotée dans une sauce noire à base de soja fermenté.' }
      ]
    },
    {
      category_type: 'soft_drink',
      display_label: 'Boissons sans alcool',
      items: [
        { name: 'Thé Maison Tibétain (Verre)', price_cents: 350, description: 'Thé noir tibétain chaud infusé.' },
        { name: 'Thé Maison Tibétain (Théière)', price_cents: 600, description: 'Théière de thé noir tibétain chaud infusé.' },
        { name: 'Thé Tibétain au Lait', price_cents: 350, description: 'Thé traditionnel au lait, disponible en version sucrée ou salée.' },
        { name: 'Thé Citron Miel Gingembre', price_cents: 350, description: 'Infusion de gingembre frais, citron vert et miel.' },
        { name: 'Café Expresso', price_cents: 200, description: 'Café expresso serré.' },
        { name: 'Jus de Fruits (25cl)', price_cents: 300, description: 'Parfums au choix : orange, ananas, mangue ou litchi.' },
        { name: 'Coca-Cola (33cl)', price_cents: 350 },
        { name: 'Perrier (50cl)', price_cents: 350 }
      ]
    },
    {
      category_type: 'alcohol_drink',
      display_label: 'Bières & Vins',
      items: [
        { name: 'Bière Singha 33cl (Bouteille)', price_cents: 350, description: 'Bière blonde thaïlandaise.' },
        { name: 'Bière Kirin Ichiban 33cl (Bouteille)', price_cents: 350, description: 'Bière blonde japonaise.' },
        { name: 'Bière Heineken 33cl (Bouteille)', price_cents: 350 },
        { name: 'Bière 1664 33cl (Bouteille)', price_cents: 350 },
        { name: 'AOC Côtes du Rhône (1/2 Bouteille)', price_cents: 900 },
        { name: 'AOC Côtes du Rhône (Bouteille)', price_cents: 1200 },
        { name: 'AOC Bordeaux (Bouteille)', price_cents: 1600 },
        { name: 'AOC Saint-Émilion (Bouteille)', price_cents: 2400 },
        { name: 'AOC Rosé Côtes de Provence (1/2 Bouteille)', price_cents: 1000 },
        { name: 'AOC Rosé Côtes de Provence (Bouteille)', price_cents: 1400 },
        { name: 'Verre de Vin en Pichet', price_cents: 300, description: 'Rouge, blanc ou rosé au choix.' },
        { name: 'Vin en Pichet (50cl)', price_cents: 680, description: 'Rouge, blanc ou rosé au choix.' },
        { name: 'Cocktail Maison sans Alcool (9cl)', price_cents: 450 },
        { name: 'Cocktail Maison avec Alcool (9cl)', price_cents: 450 },
        { name: 'Kir (9cl)', price_cents: 450, description: 'Rouge ou Blanc.' },
        { name: 'Martini (9cl)', price_cents: 450, description: 'Rouge ou Blanc.' },
        { name: 'Porto (9cl)', price_cents: 450 },
        { name: 'Ricard (9cl)', price_cents: 450 },
        { name: 'Kir Royal (9cl)', price_cents: 800 },
        { name: 'Coupe de Champagne (9cl)', price_cents: 700 },
        { name: 'Spiritueux J&B (4cl)', price_cents: 500 },
        { name: 'Spiritueux Vodka (4cl)', price_cents: 500 },
        { name: 'Spiritueux Red Label (4cl)', price_cents: 500 },
        { name: 'Spiritueux Jameson (4cl)', price_cents: 500 },
        { name: 'Spiritueux Nikka Japonais (4cl)', price_cents: 700 },
        { name: 'Spiritueux Jack Daniel\'s (4cl)', price_cents: 700 },
        { name: 'Spiritueux Chivas Regal (4cl)', price_cents: 700 }
      ]
    }
  ]
};

try {
  console.log('Ingesting Banak menu...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--menu', 'banak-cuisine-du-tibet', JSON.stringify(payload)],
    { stdio: 'inherit' }
  );
} catch (e) {
  console.error('Failed to ingest Banak menu:', e.message);
  process.exit(1);
}
