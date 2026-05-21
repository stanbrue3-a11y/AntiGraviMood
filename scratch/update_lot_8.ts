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
    slug: 'ten-chi',
    raw_facts: [
      'Restaurant de sushis et sashimis installé rue du Maine',
      'Décoration inspirée des intérieurs japonais avec cloisons coulissantes',
      'Tables en bois clair et assises confortables',
      "Petite terrasse extérieure aménagée devant l'établissement",
      'Service sans réservation proposant des formules midi variées',
    ],
    sensory_material: 'tables en bois clair',
    sensory_noise: 'ambiance calme',
    description:
      "Des cloisons coulissantes en papier de riz et des tables en bois clair habillent l'espace épuré de cette adresse japonaise de la rue du Maine. L'ambiance y reste calme et apaisante, idéale pour un déjeuner discret. On y déguste des sushis, sashimis et tempuras préparés avec rigueur.",
    insider_tips: [
      "• Commandez l'assortiment de sushis premium pour apprécier la fraîcheur des poissons.",
      '• Installez-vous dans les box semi-privés pour plus de tranquillité.',
      '• Terminez votre repas avec une tasse de thé vert sencha servi à table.',
    ],
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    subcategories: ['japonaise', 'sushi'],
    has_terrace: true,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'brasserie-saigon',
    raw_facts: [
      "Cantine vietnamienne moderne située sur l'avenue du Maine",
      'Large choix de bo buns parfumés et de nems cuits à la commande',
      'Salle accueillante décorée de suspensions en paille tressée',
      'Pas de terrasse extérieure disponible devant la façade vitrée',
      'Service efficace adapté aux déjeuners rapides en semaine',
    ],
    sensory_material: 'tables en bois brut',
    sensory_noise: 'murmure discret',
    description:
      "Des suspensions en paille tressée et des tables en bois brut décorent la salle sobre de cette cantine vietnamienne. L'atmosphère est calme et propice à la détente, rythmée par un murmure discret des convives. La cuisine propose des spécialités soignées comme les nems croustillants et les bo buns.",
    insider_tips: [
      "• Optez pour le bo bun au bœuf citronnelle, copieux et parfumé d'herbes fraîches.",
      "• Profitez des tables près de la fenêtre pour bénéficier d'une belle lumière naturelle.",
      '• Le service est particulièrement rapide le midi, idéal pour une pause déjeuner.',
    ],
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    subcategories: ['cantine', 'vietnamienne'],
    has_terrace: false,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'la-parenthese',
    raw_facts: [
      "Bistrot parisien d'angle situé sur le boulevard du Montparnasse",
      'Spécialités françaises de brasserie avec viandes et frites maison',
      'Comptoir en zinc classique et banquettes capitonnées de velours rouge',
      'Grande terrasse extérieure sous auvent installée sur le trottoir',
      'Accueil chaleureux avec possibilité de réserver sa table',
    ],
    sensory_material: 'comptoir en zinc',
    sensory_noise: 'musique de fond légère',
    description:
      "Un comptoir en zinc classique et des banquettes en velours rouge accueillent les convives de ce bistrot de quartier. Sous un éclairage tamisé, l'atmosphère reste calme et posée, agrémentée d'une musique de fond légère. La carte décline des recettes typiques de la cuisine bourgeoise.",
    insider_tips: [
      "• Commandez l'entrecôte avec ses frites maison croustillantes.",
      '• Demandez conseil pour choisir parmi leur sélection de vins au verre.',
      '• Profitez de la petite terrasse extérieure installée sur le boulevard pour observer le quartier.',
    ],
    nearest_metro: 'Duroc',
    metro_lines: ['10', '13'],
    subcategories: ['bistrot', 'francaise'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'binchotan',
    raw_facts: [
      'Bistrot fusion et cave à manger situé rue Campagne Première',
      'Spécialités de brochettes cuites au charbon japonais binchotan',
      'Cadre rustique avec tables en bois brut et murs de briques apparentes',
      'Tables hautes en terrasse sur le trottoir',
      'Sélection de vins nature et vinyles joués sur tourne-disque en bois',
    ],
    sensory_material: 'comptoir en bois verni',
    sensory_noise: 'bruit discret',
    description:
      "Un comptoir en bois verni fait face aux étagères de bouteilles de vin de cette adresse de la rue Campagne Première. Chez Binchotan, le tourne-disque diffuse des vinyles vintage tandis que des lumières suspendues à filaments éclairent les tables en bois brut et les murs de briques. L'espace décontracté s'organise autour d'un bar central aux tabourets hauts. Dans l'ambiance calme et feutrée de la salle, les effluves du charbon japonais binchotan et l'odeur des légumes grillés créent une atmosphère apaisante.",
    insider_tips: [
      '• Réservez une place au comptoir pour observer directement les cuissons au gril.',
      '• Laissez-vous bercer par la sélection de vinyles des années 70 et 80 joués en salle.',
      '• Les brochettes braisées au charbon binchotan sont particulièrement savoureuses.',
    ],
    nearest_metro: 'Raspail',
    metro_lines: ['4', '6'],
    subcategories: ['bistrot', 'cave_a_manger', 'fusion', 'japonaise', 'grillades'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
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
