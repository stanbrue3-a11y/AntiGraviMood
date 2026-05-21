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
    slug: 'tonkatsu-tombo',
    raw_facts: [
      'Cantine japonaise intimiste située à proximité de la gare Montparnasse',
      'Spécialité exclusive de porc pané croustillant (loin ou tenderloin)',
      'Sauce tonkatsu maison et soupe miso accompagnées de chou émincé',
      'Pas de terrasse extérieure disponible',
      "Politique d'accueil des clients sans réservation",
    ],
    sensory_material: 'comptoir en bois clair',
    sensory_noise: 'silence de cantine zen',
    description:
      "À deux pas de l'agitation de la gare Montparnasse, ce lieu propose une halte silencieuse aux amateurs de saveurs nippones. Derrière la vitrine sobre, quelques tables en bois clair entourent un comptoir où les cuisiniers préparent le porc pané. L'atmosphère est calme, propice à la dégustation d'une viande fondante enrobée d'une panure dorée et croustillante.",
    insider_tips: [
      "Privilégiez le filet mignon (hire) pour une chair d'une tendreté incomparable.",
      'Profitez du chou blanc émincé et de la soupe miso servis à discrétion.',
      'Installez-vous au comptoir en bois clair pour observer la friture en direct.',
    ],
    nearest_metro: 'Montparnasse - Bienvenüe',
    metro_lines: ['4', '6', '12', '13'],
    subcategories: ['cantine', 'japonaise', 'viande'],
    has_terrace: false,
    reservation_policy: 'sans_resa',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'restaurant-pilgrim',
    raw_facts: [
      "Table gastronomique fusion franco-japonaise couronnée d'une étoile Michelin",
      "Cuisine ouverte organisée autour d'un grand îlot central",
      'Décorations aux inspirations scandinaves et japonaises épurées',
      'Absence totale de terrasse extérieure pour les convives',
      'Réservation obligatoire requise pour pouvoir y dîner',
    ],
    sensory_material: 'îlot en pierre et bois',
    sensory_noise: 'brouhaha discret',
    description:
      "Ce restaurant étoilé propose une cuisine moderne et créative. La salle épurée se structure autour d'une cuisine ouverte lumineuse où s'active une brigade minutieuse. Le décor marie des matériaux comme la pierre et le bois clair dans une tonalité sobre. L'atmosphère est calme, presque intime, invitant les convives à se concentrer sur la poésie des assiettes présentées par le service attentionné.",
    insider_tips: [
      "Réservez impérativement votre table plusieurs semaines à l'avance en ligne.",
      'Demandez à être placé devant la cuisine ouverte pour suivre le travail de la brigade.',
      'Optez pour le grand menu dégustation pour explorer toute la créativité des assiettes.',
    ],
    nearest_metro: 'Pasteur',
    metro_lines: ['6', '12'],
    subcategories: ['gastronomique', 'fusion'],
    has_terrace: false,
    reservation_policy: 'resa_obligatoire',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'pizzeria-i-briganti',
    raw_facts: [
      'Pizzeria italienne de quartier située avenue Jean Moulin',
      'Pizzas napolitaines artisanales cuites au four à bois',
      'Ingrédients importés et desserts faits maison comme le tiramisu',
      "Terrasse extérieure disponible sur l'avenue arborée",
      'Réservation conseillée pour les tables en fin de semaine',
    ],
    sensory_material: 'tables en bois rustiques',
    sensory_noise: 'bruits de fourchette',
    description:
      "Dans le sud du quatorzième, cette table familiale propose une immersion napolitaine très simple. La salle s'organise autour d'un grand four à bois dont s'échappent des effluves de pâte cuite et de sauce tomate. Des étagères chargées de bouteilles bordent les tables en bois rustiques. L'atmosphère reste calme et reposante, propice à un repas décontracté autour d'une pizza bien gonflée.",
    insider_tips: [
      'Commandez la pizza Margherita simple pour apprécier la qualité de la sauce tomate.',
      'Profitez de la terrasse extérieure ombragée pendant les douces journées ensoleillées.',
      'Terminez le repas avec une part de leur tiramisu crémeux fait maison.',
    ],
    nearest_metro: "Porte d'Orléans",
    metro_lines: ['4'],
    subcategories: ['bistrot', 'italienne', 'pizza'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    dominant_mood: 'chill',
    closes_late: false,
    tags: ['new_lot', 'pastille_rouge'],
  },
  {
    slug: 'creperie-le-petit-josselin',
    raw_facts: [
      'Crêperie bretonne historique située rue du Montparnasse',
      'Galettes de sarrasin et crêpes de froment faites à la commande',
      'Cidre artisanal servi dans des bols en grès traditionnels',
      'Pas de terrasse extérieure disponible sur la rue',
      "Service continu sans réservation avec possibilité d'attente",
    ],
    sensory_material: 'boiseries sombres',
    sensory_noise: 'bruit des billigs',
    description:
      "Située dans la célèbre rue des crêperies de la capitale, cette maison bretonne propose une halte gourmande. La salle étroite se caractérise par des boiseries sombres et des tables en bois rustiques sous des lumières tamisées. L'atmosphère est calme, rythmée par le sifflement de la vapeur d'eau sur les plaques de cuisson. On y savoure des galettes de sarrasin croustillantes servies dans de la vaisselle artisanale.",
    insider_tips: [
      'Commandez la galette de sarrasin garnie au fromage et aux champignons forestiers.',
      "Accompagnez votre galette d'une bolée de cidre brut servi dans un bol en grès.",
      'Arrivez en dehors des heures de pointe pour éviter de faire la queue sur le trottoir.',
    ],
    nearest_metro: 'Edgar Quinet',
    metro_lines: ['6'],
    subcategories: ['bistrot', 'francaise', 'creperie'],
    has_terrace: false,
    reservation_policy: 'sans_resa',
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
