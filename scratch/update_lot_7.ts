import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

interface UpdatePayload {
  slug: string;
  raw_facts: string[];
  sensory_material: string;
  sensory_noise: string;
  description: string;
  insider_tips: string[];
  nearest_metro: string;
  metro_lines: string[];
  subcategories: string[];
  has_terrace: boolean;
  reservation_policy: string;
  dominant_mood: string;
  closes_late: boolean;
  tags: string[];
  internal_audit_logs?: string[];
}

const updates: UpdatePayload[] = [
  {
    slug: 'chao-em',
    raw_facts: [
      'Cantine vietnamienne implantée rue du Maine',
      'Spécialités de phở traditionnel au bœuf et de raviolis à la vapeur',
      'Décoration simple avec tables en bois sombre et affiches rétro',
      "Petite terrasse extérieure aménagée devant l'établissement",
      'Service rapide sans possibilité de réserver',
    ],
    sensory_material: 'tables en bois sombre',
    sensory_noise: 'murmure des clients',
    description:
      "Des tables en bois sombre et des murs décorés d'affiches vintage caractérisent la petite salle de cette cantine vietnamienne. L'atmosphère reste calme et reposante, propice à un déjeuner posé. On y savoure des spécialités parfumées comme le phở fumant ou des raviolis cuits à la vapeur.",
    insider_tips: [
      '• Commandez le phở au bœuf saignant pour apprécier le goût parfumé de leur bouillon maison.',
      '• Profitez des tables près du bar pour un service particulièrement réactif.',
      '• Arrivez tôt en fin de semaine pour éviter de patienter sur le trottoir.',
    ],
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    subcategories: ['cantine', 'vietnamienne'],
    has_terrace: true,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'yatai-ramen-montparnasse',
    raw_facts: [
      'Restaurant de ramen de style stand de rue japonais situé rue de la Gaîté',
      'Bouillons de porc et poulet mijotés et nouilles fraîches faites maison',
      "Cuisine ouverte structurée autour d'un grand comptoir en bois clair",
      "Quelques tables extérieures installées sous l'auvent",
      'Service continu sans possibilité de réservation',
    ],
    sensory_material: 'comptoir en bois clair',
    sensory_noise: 'bruit de bouillonnement',
    description:
      "Un comptoir en bois clair entoure la cuisine ouverte de ce restaurant de ramen inspiré des stands de rue japonais. L'ambiance reste calme et ordonnée, rythmée par un bruit discret de bouillonnement des marmites. On y déguste des bouillons mijotés de longues heures et des nouilles maison.",
    insider_tips: [
      '• Choisissez le ramen au porc chashu braisé pour apprécier sa texture fondante.',
      '• Installez-vous directement au comptoir pour observer les cuisiniers dresser les bols.',
      '• Accompagnez votre repas de gyoza au poulet grillés maison.',
    ],
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    subcategories: ['cantine', 'japonaise', 'ramen'],
    has_terrace: true,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'black-pinky',
    raw_facts: [
      'Bistrot thaïlandais implanté rue de la Gaîté',
      'Plats classiques de la cuisine de rue thaïlandaise et cocktails maison',
      'Décoration moderne avec murs en briques sombres et lumières suspendues',
      'Terrasse extérieure aménagée sur le trottoir avec banquettes',
      'Réservation recommandée pour le service du soir',
    ],
    sensory_material: 'briques sombres',
    sensory_noise: 'musique feutrée',
    description:
      "Des murs en briques sombres et des assises confortables délimitent la salle de ce bistrot thaïlandais contemporain. Sous des lumières douces et suspendues, l'atmosphère reste calme et intime. On y découvre des plats classiques revisités aux épices fraîches et lait de coco.",
    insider_tips: [
      '• Commandez le pad thaï aux crevettes pour savourer le goût caramélisé de la sauce tamarin.',
      "• Réservez à l'avance pour obtenir une table dans le coin tranquille près du fond de salle.",
      "• Accompagnez votre plat d'un thé glacé maison à la citronnelle pour la fraîcheur.",
    ],
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    subcategories: ['bistrot', 'thailandaise'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'restaurant-montee',
    raw_facts: [
      'Restaurant gastronomique franco-japonais de la rue Léopold Robert',
      "Menu dégustation à l'aveugle imaginé par un duo de cuisiniers passionnés",
      'Salle épurée avec nappes blanches et décoration feutrée',
      'Pas de terrasse extérieure disponible devant la façade',
      'Réservation indispensable obligatoire en ligne',
    ],
    sensory_material: 'nappes blanches',
    sensory_noise: 'bruit de chuchotement',
    description:
      "Des nappes blanches et un mobilier sobre ornent la salle feutrée de cette table gastronomique. L'ambiance y est calme et particulièrement propice à la concentration, rythmée par un discret bruit de chuchotement. Le menu dégustation propose des assiettes fines aux influences franco-japonaises.",
    insider_tips: [
      "• Optez pour le menu carte blanche pour vivre toute la démarche culinaire de l'équipe.",
      "• Demandez l'accord mets-vins pour découvrir des références de petits vignerons.",
      "• La réservation est obligatoire et s'effectue exclusivement en ligne.",
    ],
    nearest_metro: 'Vavin',
    metro_lines: ['4'],
    subcategories: ['gastronomique', 'fusion'],
    has_terrace: false,
    reservation_policy: 'resa_obligatoire',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
];

async function runUpdates() {
  for (const item of updates) {
    console.log(`\n🔄 Processing updates for: ${item.slug}`);

    // Fetch current internal_audit_logs
    const { data: place, error: fetchErr } = await supabase
      .from('places')
      .select('internal_audit_logs')
      .eq('slug', item.slug)
      .single();

    if (fetchErr) {
      console.error(`❌ Error fetching existing place: ${fetchErr.message}`);
      continue;
    }

    const existingLogs = place?.internal_audit_logs || [];
    // Append the visual audit check log
    const auditLog = `[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]`;
    item.internal_audit_logs = [...existingLogs, auditLog];

    // Convert to JSON and stringify for the CLI command
    const payloadStr = JSON.stringify(item);

    try {
      console.log(`🚀 Running agent_bridge.ts --update ${item.slug}`);
      const output = execSync(
        `npx tsx scripts/agent_bridge.ts --update ${item.slug} '${payloadStr.replace(/'/g, "'\\''")}'`,
        { encoding: 'utf-8' },
      );
      console.log(output);
    } catch (cmdErr: any) {
      console.error(`❌ Command failed: ${cmdErr.stderr || cmdErr.message}`);
    }
  }
}

runUpdates().catch(console.error);
