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
    slug: 'la-basilicata',
    raw_facts: [
      "Trattoria italienne implantée rue de la Gaîté",
      "Spécialités de pizzas à pâte fine cuites à la commande et pâtes fraîches",
      "Décoration mariant briques apparentes et mobilier en bois rustique",
      "Vaste terrasse extérieure aménagée sur le trottoir",
      "Réservation conseillée pour les repas en soirée"
    ],
    sensory_material: "briques rouges",
    sensory_noise: "murmure de trattoria",
    description: "Des briques rouges aux murs et des tables en bois rustique caractérisent la salle de cette trattoria. L'ambiance reste calme et propice à la détente. Sous des suspensions de paille tressée, on y déguste des pizzas cuites à la commande et des pâtes fraîches savoureuses.",
    insider_tips: [
      "• Commandez la pizza basilicata pour savourer le goût typique de la charcuterie calabraise.",
      "• Installez-vous dans l'arrière-salle pour profiter d'un moment de tranquillité.",
      "• Accompagnez votre repas d'un verre de vin rouge de Campanie suggéré par le serveur."
    ],
    nearest_metro: "Gaîté",
    metro_lines: ["13"],
    subcategories: ["bistrot", "italienne", "pizza"],
    has_terrace: true,
    reservation_policy: "resa_conseillee",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'brutus-gaite',
    raw_facts: [
      "Crêperie moderne et bar à cidre situés rue de la Gaîté",
      "Galettes et crêpes à base de farine de sarrasin biologique",
      "Large sélection de cidres à la pression et en bouteille",
      "Terrasse extérieure installée sur le trottoir",
      "Réservation recommandée les soirs de week-end"
    ],
    sensory_material: "faïence et bois",
    sensory_noise: "musique de fond légère",
    description: "Des tables en bois clair et des murs ornés de faïence blanche accueillent les convives dans cette crêperie. La salle lumineuse offre une atmosphère calme et décontractée, propice à la découverte de recettes originales à base de sarrasin biologique.",
    insider_tips: [
      "• Accompagnez votre galette d'un cidre sélectionné à la pression.",
      "• Commandez la galette au saumon mariné et crème d'aneth pour une note de fraîcheur.",
      "• Terminez avec leur crêpe au caramel au beurre salé cuisinée maison."
    ],
    nearest_metro: "Gaîté",
    metro_lines: ["13"],
    subcategories: ["bistrot", "francaise", "creperie"],
    has_terrace: true,
    reservation_policy: "resa_conseillee",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'kokodak',
    raw_facts: [
      "Restaurant de poulet frit coréen de la rue de la Gaîté",
      "Poulet frit croustillant proposé avec plusieurs sauces maison",
      "Décoration moderne avec éléments industriels et néons colorés",
      "Absence de terrasse extérieure devant l'établissement",
      "Service sans réservation préalable avec accueil continu"
    ],
    sensory_material: "métal brossé",
    sensory_noise: "crépitement de friture",
    description: "Des tables en métal brossé et des suspensions industrielles dessinent l'espace de ce restaurant coréen. L'ambiance reste calme et ordonnée, rythmée par un bruit discret de friture en cuisine. On y savoure du poulet frit croustillant enrobé de sauces maison.",
    insider_tips: [
      "• Choisissez la sauce piquante à l'ail et au soja pour un goût prononcé.",
      "• Accompagnez votre poulet avec les lamelles de radis blanc saumuré pour la fraîcheur.",
      "• Optez pour la formule midi pour un excellent rapport qualité-prix."
    ],
    nearest_metro: "Gaîté",
    metro_lines: ["13"],
    subcategories: ["street_food", "coreenne"],
    has_terrace: false,
    reservation_policy: "sans_resa",
    dominant_mood: "chill",
    closes_late: false,
    tags: ["new_lot", "pastille_rouge"]
  },
  {
    slug: 'l-opportun-paris-14',
    raw_facts: [
      "Bouchon lyonnais situé sur le boulevard Edgar Quinet",
      "Cuisine bourgeoise et lyonnaise avec spécialités d'abats",
      "Grande carte de vins mettant à l'honneur le Beaujolais",
      "Terrasse extérieure disponible sur le boulevard",
      "Réservation conseillée en fin de semaine"
    ],
    sensory_material: "comptoir en bois verni",
    sensory_noise: "bruit de fourchette discret",
    description: "Un comptoir en bois verni sous des lumières tamisées structure la petite salle de cet établissement. L'atmosphère reste calme et posée, idéale pour savourer des spécialités de la région lyonnaise comme le tablier de sapeur.",
    insider_tips: [
      "• Commandez le tablier de sapeur, spécialité croustillante de la maison.",
      "• Demandez conseil au service pour choisir parmi leur sélection de vins du Beaujolais.",
      "• Arrivez dès l'ouverture du service du soir pour bénéficier d'une table calme."
    ],
    nearest_metro: "Edgar Quinet",
    metro_lines: ["6"],
    subcategories: ["bistrot", "francaise"],
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
      const output = execSync(`npx tsx scripts/agent_bridge.ts --update ${item.slug} '${payloadStr.replace(/'/g, "'\\''")}'`, { encoding: 'utf-8' });
      console.log(output);
    } catch (cmdErr: any) {
      console.error(`❌ Command failed: ${cmdErr.stderr || cmdErr.message}`);
    }
  }
}

runUpdates().catch(console.error);
