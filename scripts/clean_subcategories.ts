import path from 'path';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Chargement du référentiel
const subcatRefPath = path.join(__dirname, 'data/subcategories.json');
const subcatData = JSON.parse(fs.readFileSync(subcatRefPath, 'utf8'));
const ALLOWED_SUBCATS = new Set([
  ...subcatData.format,
  ...subcatData.cuisine,
  ...subcatData.specialite
]);

// ⚠️ MAPPING MANUEL POUR LE NETTOYAGE
// Ajoute ici tes correspondances "ancien_nom_bizarre" -> "nouveau_tag_propre"
// Si l'ancien tag n'est pas dans le mapping et n'est pas autorisé, il sera simplement supprimé.
const MAPPING: Record<string, string> = {
  "Bistro": "bistrot",
  "Bistro Chic": "bistronomique",
  "Bistro Créatif": "bistronomique",
  "Bistronomie": "bistronomique",
  "Brasserie Classique": "brasserie",
  "Café de Parc": "cafe",
  "Coffee Shop": "cafe",
  "Bar à vin": "bar_a_vins",
  "Bar à vins naturels": "bar_a_vins",
  "Japonais": "japonaise",
  "Italien": "italienne",
  "Pizza": "pizza",
  "Burgers": "burger"
};

async function main() {
  console.log("🧹 Démarrage du nettoyage des sous-catégories...");
  
  const { data: places, error } = await supabase.from('places').select('slug, name, subcategories');
  if (error) {
    console.error("❌ Erreur DB:", error);
    return;
  }

  let totalUpdated = 0;

  for (const place of places) {
    if (!place.subcategories || !Array.isArray(place.subcategories)) continue;

    const oldTags = place.subcategories as string[];
    const newTagsSet = new Set<string>();
    let needsUpdate = false;

    for (const tag of oldTags) {
      if (ALLOWED_SUBCATS.has(tag)) {
        // Déjà parfait
        newTagsSet.add(tag);
      } else if (MAPPING[tag] && ALLOWED_SUBCATS.has(MAPPING[tag])) {
        // Tag connu et mappé
        newTagsSet.add(MAPPING[tag]);
        needsUpdate = true;
      } else {
        // Tag inconnu ou poubelle (ex: "Bassin de la Villette", "Art Déco")
        needsUpdate = true;
      }
    }

    const newTagsArray = Array.from(newTagsSet);

    // Si on a tout supprimé et qu'il ne reste rien, c'est grave, on devrait peut-être le logger
    if (newTagsArray.length === 0 && oldTags.length > 0) {
      console.warn(`⚠️ ALERTE : ${place.name} (${place.slug}) n'a plus aucune catégorie après nettoyage ! Anciens tags: [${oldTags.join(', ')}]`);
    }

    if (needsUpdate) {
      console.log(`\n📝 MAJ ${place.name} (${place.slug})`);
      console.log(`   Avant : ${oldTags.join(', ')}`);
      console.log(`   Après : ${newTagsArray.join(', ')}`);

      // Décommenter pour écrire en base !
      // await supabase.from('places').update({ subcategories: newTagsArray }).eq('slug', place.slug);
      totalUpdated++;
    }
  }

  console.log(`\n✅ Terminé ! ${totalUpdated} fiches nécessitent une mise à jour.`);
  console.log("👉 Pour appliquer les modifications, décommente la ligne de `update` dans le script.");
}

main().catch(console.error);
