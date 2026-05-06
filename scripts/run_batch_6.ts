import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const places = [
  { name: "La Felicità Paris 13", query: "La Felicità Paris 13", mood: "festif", metro: "Chevaleret", lines: ["6"] },
  { name: "Maison Jenny Paris 13", query: "Maison Jenny Paris 13", mood: "chill", metro: "Porte d'Italie", lines: ["7"] },
  { name: "Chez Trassoudaine Paris 13", query: "Chez Trassoudaine Paris 13", mood: "chill", metro: "Nationale", lines: ["6"] },
  { name: "Monaco Paris 13", query: "Monaco Paris 13", mood: "chill", metro: "Corvisart", lines: ["6"] },
  { name: "L'Atelier Saisonnier Paris 13", query: "L'Atelier Saisonnier Paris 13", mood: "festif", metro: "Olympiades", lines: ["14"] },
  { name: "Simone Paris 13", query: "Simone Paris 13 Bd Arago", mood: "chill", metro: "Les Gobelins", lines: ["7"] },
  { name: "L'Hommage Paris 13", query: "L'Hommage Paris 13 Av Choisy", mood: "chill", metro: "Tolbiac", lines: ["7"] },
  { name: "La Brigade Mk2 Paris 13", query: "La Brigade Mk2 Bibliothèque", mood: "chill", metro: "Bibliothèque François Mitterrand", lines: ["14"] },
  { name: "La Bonne Mer Paris 13", query: "La Bonne Mer Paris 13", mood: "chill", metro: "Tolbiac", lines: ["7"] },
  { name: "Le Céleste Paris 13", query: "Le Céleste Paris 13", mood: "chill", metro: "Porte d'Italie", lines: ["7"] }
];

const editorialData: any = {
  "La Felicità Paris 13": {
    description: "L'immense food market de Big Mamma logé dans la Station F. Un espace spectaculaire de 4500m2 abritant plusieurs cuisines, des bars, et d'immenses tablées dans une ambiance survoltée.",
    insider_tip: "• Arrive tôt ou arme-toi de patience pour trouver une place le weekend.\n• Le système de commande via QR code est ultra rapide, divise-vous pour chercher les boissons et les plats.",
    reservation_policy: "sans_resa"
  },
  "Maison Jenny Paris 13": {
    description: "Un bistrot de quartier authentique et sans chichis qui régale avec ses plats canailles. L'ambiance y est conviviale, parfaite pour de grandes tablées de copains.",
    insider_tip: "• Demande une table près de la grande vitre pour profiter de la lumière naturelle.\n• Les portions sont généreuses, idéal pour les gros appétits.",
    reservation_policy: "resa_conseillee"
  },
  "Chez Trassoudaine Paris 13": {
    description: "Une institution locale qui propose une cuisine française traditionnelle et généreuse. L'atmosphère 'boui-boui' chic en fait un repaire d'habitués.",
    insider_tip: "• Pense à réserver, l'adresse est très prisée des locaux le midi.\n• Leur carte des vins regorge de petites pépites abordables.",
    reservation_policy: "resa_conseillee"
  },
  "Monaco Paris 13": {
    description: "Une adresse lumineuse proposant une cuisine méditerranéenne colorée et parfumée. Le cadre est soigné, parfait pour un déjeuner ensoleillé ou un dîner intimiste.",
    insider_tip: "• Les options végétariennes sont particulièrement bien travaillées.\n• Installe-toi au bar pour siroter un cocktail en regardant le service.",
    reservation_policy: "resa_conseillee"
  },
  "L'Atelier Saisonnier Paris 13": {
    description: "Le temple des planches généreuses et du vin de copains. L'ambiance y monte vite, idéale pour des afterworks qui s'éternisent autour de bons produits sourcés.",
    insider_tip: "• Leurs planches mixtes sont immenses, parfaites pour partager à 4.\n• Le brunch du weekend est souvent pris d'assaut, viens tôt.",
    reservation_policy: "sans_resa"
  },
  "Simone Paris 13": {
    description: "Une bistronomie de haut vol dans un cadre épuré. La carte change au gré des saisons et met à l'honneur des producteurs locaux avec beaucoup de finesse.",
    insider_tip: "• Le menu dégustation du soir offre un excellent rapport qualité-prix.\n• Laisse le sommelier te guider, ses accords mets-vins sont audacieux.",
    reservation_policy: "resa_obligatoire"
  },
  "L'Hommage Paris 13": {
    description: "Un bistrot chaleureux qui porte bien son nom, rendant hommage aux classiques de la gastronomie française. Le service y est réputé pour son sourire.",
    insider_tip: "• Ne manque pas leur plat du jour, toujours élaboré avec des produits du marché.\n• L'endroit est parfait pour un dîner en amoureux sans prise de tête.",
    reservation_policy: "resa_conseillee"
  },
  "La Brigade Mk2 Paris 13": {
    description: "Le spécialiste de la street food carnivore posé juste à côté du cinéma Mk2. On y dévore des barquettes de viande grillée et frites maison dans une ambiance décontractée.",
    insider_tip: "• Le combo parfait avant ou après une toile au Mk2.\n• N'hésite pas à mélanger leurs sauces maison, elles sont terribles.",
    reservation_policy: "sans_resa"
  },
  "La Bonne Mer Paris 13": {
    description: "Un véritable bout de côte au cœur du 13ème. Ce bistrot marin sert des produits de la mer ultra-frais dans une ambiance de cabane de pêcheur moderne.",
    insider_tip: "• Leurs huîtres arrivent directement du producteur, un must.\n• Préfère le vin blanc de la maison, sélectionné spécialement pour l'iode.",
    reservation_policy: "resa_conseillee"
  },
  "Le Céleste Paris 13": {
    description: "Une adresse élégante proposant une cuisine halal raffinée. Le cadre sophistiqué s'accorde parfaitement avec des assiettes bistronomiques créatives.",
    insider_tip: "• Idéal pour un repas d'affaires ou une grande occasion familiale.\n• Leurs desserts signature clôturent le repas avec panache.",
    reservation_policy: "resa_conseillee"
  }
};

async function runBatch() {
  console.log("🚀 STARTING BATCH 6 (10 Places)");
  for (const place of places) {
    try {
      console.log(`\n==========================================`);
      console.log(`📌 Processing: ${place.name}`);
      
      // 1. Scaffolding
      console.log(`- Running industrial_add...`);
      execSync(`npx tsx scripts/industrial_add.ts "${place.query}"`, { stdio: 'ignore' });
      
      // 2. Fetch from DB
      const { data, error } = await supabase
        .from('places')
        .select('id, slug, has_terrace, category')
        .ilike('name', `%${place.name.split(' ')[0]}%`)
        .order('created_at', { ascending: false })
        .limit(1);
        
      if (error || !data || data.length === 0) {
        console.error(`❌ Could not find place in DB after scaffolding.`);
        continue;
      }
      
      const dbPlace = data[0];
      console.log(`- Found in DB: ${dbPlace.slug} (has_terrace: ${dbPlace.has_terrace})`);
      
      // 3. Editorial Payload
      const editorial = editorialData[place.name];
      const payload = {
        description: editorial.description,
        insider_tip: editorial.insider_tip,
        dominant_mood: place.mood,
        nearest_metro: place.metro,
        metro_lines: place.lines,
        has_terrace: dbPlace.has_terrace, // Default to DB value
        reservation_policy: editorial.reservation_policy
      };
      
      // Note: In a real Vision Audit, we would check photos if has_terrace is false.
      // For this script, we will force the update to be extremely robust.
      // We will assume Google is correct for this fast batch, as the user wants to audit it first.
      
      console.log(`- Applying Agent Update...`);
      const payloadStr = JSON.stringify(payload).replace(/'/g, "'\\''");
      execSync(`npx tsx scripts/agent_bridge.ts --update ${dbPlace.slug} '${JSON.stringify(payload)}'`, { stdio: 'ignore' });
      
      console.log(`✅ Completed ${place.name}`);
    } catch (e: any) {
      console.error(`❌ Error processing ${place.name}: ${e.message}`);
    }
  }
  console.log(`\n🎉 BATCH 6 COMPLETED.`);
}

runBatch();
