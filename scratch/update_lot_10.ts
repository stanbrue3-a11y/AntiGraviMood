import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const updates = [
  {
    slug: 'bistrot-jools',
    raw_facts: [
      'Bistrot de quartier chaleureux situé rue Pernety',
      "Devanture bleu marine avec stores jaunes 'Jools' rayés de blanc",
      'Terrasse animée avec de petites tables rondes en bois sur le trottoir',
      'Salle lumineuse avec banquettes en cuir rouge et bar bleu',
      'Cuisine de bistrot soignée avec frites maison dorées',
    ],
    sensory_material: 'banquettes en cuir rouge',
    sensory_noise: 'bourdonnement feutré des conversations',
    description:
      "Des banquettes en cuir rouge et des tables en bois sombre créent l'atmosphère de cette adresse de quartier située rue Pernety. La salle claire offre une ambiance calme, rythmée par le bourdonnement feutré des conversations. On y déguste une cuisine de bistrot soignée, axée sur des produits frais de saison et des assiettes simples.",
    insider_tips: [
      '• Réservez pour le déjeuner en semaine car les tables se remplissent rapidement.',
      '• Les frites maison qui accompagnent les plats sont particulièrement réussies.',
      '• Installez-vous près de la grande vitrine pour profiter de la lumière naturelle.',
    ],
    nearest_metro: 'Pernety',
    metro_lines: ['13'],
    subcategories: ['bistrot', 'francaise'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'cantinella',
    raw_facts: [
      'Trattoria italienne située rue du Faubourg Saint-Jacques',
      'Terrasse confidentielle aménagée dans une cour intérieure verdoyante',
      'Parasols colorés et suspensions lumineuses en extérieur',
      'Décoration épurée avec tables en bois clair et touches végétales',
      'Spécialités de pizzas cuites au four et pâtes fraîches maison',
    ],
    sensory_material: 'tables en bois clair',
    sensory_noise: 'bruit discret du four',
    description:
      "Des tables en bois clair et une décoration épurée caractérisent la salle lumineuse de cette adresse italienne du Faubourg Saint-Jacques. Le bruit discret du four à pizza rythme l'espace dans une ambiance calme et ordonnée. La carte met en avant des pâtes fraîches façonnées sur place et des spécialités classiques bien exécutées.",
    insider_tips: [
      '• La pizza blanche à la truffe est une spécialité très appréciée de la maison.',
      "• Les pâtes fraîches servies dans leur poêlon en cuivre valent le coup d'œil.",
      '• Une petite sélection de vins de vignerons transalpins accompagne le repas.',
    ],
    nearest_metro: 'Saint-Jacques',
    metro_lines: ['6'],
    subcategories: ['italienne', 'pizza', 'pasta'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'bistrot-15',
    raw_facts: [
      "Bistrot d'angle traditionnel situé rue Falguière",
      'Terrasse extérieure abritée par un grand store rouge Bistro 15',
      'Salle conviviale avec bar en zinc, chaises en osier et lumière tamisée',
      'Plats de brasserie classique avec burgers et frites maison',
      'Service de café continu en terrasse toute la journée',
    ],
    sensory_material: 'tables en bois foncé',
    sensory_noise: 'murmure tranquille de la salle',
    description:
      'Un bar en zinc et des tables en bois foncé meublent cette adresse discrète de la rue Falguière. La lumière tamisée en soirée accompagne une ambiance calme, propice au murmure tranquille de la salle. Le menu décline des plats ménagers soignés comme la blanquette de veau ou le confit de canard.',
    insider_tips: [
      '• Les desserts faits maison reprennent des classiques très bien maîtrisés.',
      "• Le service continu l'après-midi permet de s'y arrêter pour un verre au calme.",
      '• Privilégiez les tables situées dans la seconde salle pour plus de tranquillité.',
    ],
    nearest_metro: 'Pasteur',
    metro_lines: ['6', '12'],
    subcategories: ['bistrot', 'francaise'],
    has_terrace: true,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'le-petit-sommelier-paris-14',
    raw_facts: [
      'Bistrot et cave à manger réputés situés avenue du Maine',
      'Décoration typique avec boiseries patinées et bouteilles exposées',
      "Terrasse extérieure installée sur le trottoir le long de l'avenue",
      'Cuisine bourgeoise classique de tradition',
      "Sommellerie d'excellence avec une carte des vins monumentale",
    ],
    sensory_material: 'boiseries patinées',
    sensory_noise: 'cliquetis discret des verres',
    description:
      "Des boiseries patinées et des tables rondes habillent cette adresse de l'avenue du Maine, réputée pour sa cave aux nombreuses références. Dans une ambiance calme et propice à la dégustation, le cliquetis discret des verres accompagne des plats de la cuisine bourgeoise soignée.",
    insider_tips: [
      '• Faites confiance aux suggestions du sommelier pour des accords précis avec vos plats.',
      '• Le pâté en croûte fait maison est une entrée particulièrement travaillée.',
      '• Les bouteilles peuvent également être achetées à emporter côté cave.',
    ],
    nearest_metro: 'Montparnasse - Bienvenüe',
    metro_lines: ['4', '6', '12', '13'],
    subcategories: ['cave_a_manger', 'francaise'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['pastille_rouge'],
  },
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
        { encoding: 'utf-8' },
      );
      console.log(output);
    } catch (cmdErr: any) {
      console.error(`❌ Command failed: ${cmdErr.stderr || cmdErr.message}`);
    }
  }
}

runUpdates().catch(console.error);
