import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const updates = [
  {
    slug: 'yakitori-montparnasse',
    raw_facts: [
      "Restaurant de yakitori et sushi situé rue du Montparnasse",
      "Petite terrasse avec parasol et chaises brasserie devant la façade noire",
      "Lampions rouges et enseigne japonaise à l'entrée",
      "Tables en bois clair et salle sobre avec comptoir",
      "Brochettes de poulet caramélisées cuites au gril à la commande"
    ],
    sensory_material: "tables en bois clair",
    sensory_noise: "crépitement du gril",
    description: "Des comptoirs en bois clair et des chaises hautes entourent la cuisine ouverte de cette adresse japonaise de la rue du Montparnasse. Les lampions rouges à l'entrée et la salle sobre dégagent une atmosphère calme. On y savoure des brochettes de poulet caramélisées au gril et des sashimis coupés minute.",
    insider_tips: [
      "• Commandez l'assortiment de yakitori au charbon de bois pour goûter les différentes pièces.",
      "• Les places au comptoir permettent d'observer directement la cuisson des brochettes.",
      "• Accompagnez votre repas de leur sélection de sakés servis chauds."
    ],
    nearest_metro: "Edgar Quinet",
    metro_lines: ["6"],
    subcategories: ["japonaise", "sushi", "grillades"],
    has_terrace: true,
    reservation_policy: "sans_resa",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'toritcho',
    raw_facts: [
      "Izakaya japonais historique ouvert depuis les années 70 rue du Montparnasse",
      "Façade en pierre patinée avec enseigne en caractères japonais sculptés",
      "Salle intime et boisée sans terrasse extérieure",
      "Comptoir en bois sombre face à la cuisine ouverte",
      "Sashimis variés et yakitori grillés sur commande"
    ],
    sensory_material: "bois sombre",
    sensory_noise: "murmure feutré",
    description: "Des comptoirs en bois sombre patinés par le temps accueillent les habitués de cette adresse japonaise ouverte depuis les années 70. Dans une ambiance calme jalonnée par un murmure feutré, des brochettes yakitori et des poissons crus sont préparés devant les convives. Les murs en crépi et les lampions en papier diffusent une atmosphère apaisante.",
    insider_tips: [
      "• Réservez au comptoir pour profiter du spectacle des cuissons au charbon.",
      "• Goûtez la brochette de boulettes de poulet maison, fondante et caramélisée.",
      "• Cet établissement historique est prisé le soir, la réservation est recommandée."
    ],
    nearest_metro: "Edgar Quinet",
    metro_lines: ["6"],
    subcategories: ["japonaise", "grillades", "sushi"],
    has_terrace: false,
    reservation_policy: "resa_conseillee",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'bistrot-pia',
    raw_facts: [
      "Café-bistrot de quartier situé boulevard du Montparnasse",
      "Grande terrasse avec store vert et tables bistrot sur le trottoir",
      "Salle lumineuse avec comptoir central et banquettes",
      "Carte brasserie avec entrecôte et frites maison",
      "Happy hour et service continu toute la journée"
    ],
    sensory_material: "zinc",
    sensory_noise: "bruit de vaisselle",
    description: "Un long comptoir en zinc brillant et des tabourets de bar accueillent les convives de ce café-bistrot de quartier. La salle lumineuse dégage une ambiance calme et détendue, rythmée par le bruit de vaisselle feutré en cuisine. La carte fait la part belle aux spécialités maison comme l'entrecôte et les frites dorées.",
    insider_tips: [
      "• Installez-vous en terrasse sur le boulevard pour profiter de l'animation du quartier.",
      "• L'entrecôte avec ses frites maison croustillantes est la valeur sûre de la carte.",
      "• Profitez du happy hour en fin d'après-midi pour une sélection de vins au verre."
    ],
    nearest_metro: "Montparnasse - Bienvenüe",
    metro_lines: ["4", "6", "12", "13"],
    subcategories: ["bistrot", "francaise"],
    has_terrace: true,
    reservation_policy: "sans_resa",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'madame-ngo',
    raw_facts: [
      "Restaurant vietnamien de haut niveau situé rue Daguerre",
      "Salle intime avec cloisons en bois sombre et lumières tamisées",
      "Terrasse extérieure sur la rue piétonne aux beaux jours",
      "Spécialités vietnamiennes soignées avec raviolis vapeurs faits maison",
      "Réservation conseillée, fermé le dimanche"
    ],
    sensory_material: "tables en bois sombre",
    sensory_noise: "musique de fond discrète",
    description: "Des cloisons en bois sombre et des banquettes confortables habillent la salle de cette adresse vietnamienne de la rue Daguerre. Dans une ambiance calme et intimiste, baignée par une lumière tamisée, une musique de fond discrète accompagne le repas. La carte décline des spécialités de la cuisine du Vietnam avec une précision chirurgicale.",
    insider_tips: [
      "• Les raviolis vapeurs faits maison sont réputés pour la finesse de leur pâte.",
      "• Réservez la table du fond à côté de la bibliothèque pour plus d'intimité.",
      "• Profitez de la terrasse extérieure installée sur la rue piétonne aux beaux jours."
    ],
    nearest_metro: "Denfert-Rochereau",
    metro_lines: ["4", "6"],
    subcategories: ["vietnamienne", "gastronomique"],
    has_terrace: true,
    reservation_policy: "resa_conseillee",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  }
];

async function runUpdates() {
  for (const item of updates) {
    console.log(`\n🔄 Processing updates for: ${item.slug}`);

    const { data: place, error: fetchErr } = await supabase
      .from('places')
      .select('internal_audit_logs')
      .eq('slug', item.slug)
      .single();

    if (fetchErr) {
      console.error(`❌ Error fetching existing place: ${fetchErr.message}`);
      continue;
    }

    const existingLogs: string[] = place?.internal_audit_logs || [];
    const auditLog = `[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]`;
    const payload = { ...item, internal_audit_logs: [...existingLogs, auditLog] };

    const payloadStr = JSON.stringify(payload);
    try {
      console.log(`🚀 Running agent_bridge.ts --update ${item.slug}`);
      const output = execSync(
        `npx tsx scripts/agent_bridge.ts --update ${item.slug} '${payloadStr.replace(/'/g, "'\\''")}'`,
        { encoding: 'utf-8' }
      );
      console.log(output);
    } catch (cmdErr: any) {
      console.error(`❌ Command failed: ${cmdErr.stderr || cmdErr.message}`);
    }
  }
}

runUpdates().catch(console.error);
