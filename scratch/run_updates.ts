import { spawnSync } from 'child_process';
import path from 'path';

const updates: Record<string, any> = {
  'la-creperie-de-josselin': {
    description: "C'est le phare de la rue du Montparnasse. Sous ses plafonds bas, le décor est resté figé : boiseries sombres patinées, carrelage d'époque et rideaux de dentelle. On y vient pour ses galettes de blé noir fortement beurrées et sa spécialité, 'Le Couple' (une galette à deux étages), servie dans un vacarme de brasserie vivant où l'on s'attable au coude-à-coude.",
    insider_tips: [
      "Prévoyez du liquide : la maison refuse historiquement la carte bancaire.",
      "Sans réservations, l'attente est quasi-systématique : visez l'ouverture pour éviter la file.",
      "Si le n°67 est bondé, tentez votre chance au Petit Josselin au n°59 : c'est la même carte."
    ],
    dominant_mood: "culturel",
    nearest_metro: "Edgar Quinet",
    metro_lines: ["6"],
    has_terrace: true,
    subcategories: ["bistrot", "creperie"],
    raw_facts: ["Maison fondée en 1969", "Galettes double épaisseur"],
    sensory_material: "boiseries sombres",
    sensory_noise: "vacarme de brasserie",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] Ordre validé : Façade (#3) -> Intérieur (#1) -> Cidre (#4).",
      "[DOGME PROOF] Ref: GOOGLE_REVIEWS | Citation exacte: \"Ils refusent toujours la carte bleue, prévoyez du liquide.\""
    ]
  },
  'la-manifattura': {
    description: "Des briques sombres et le crépi blanc structurent la salle vibrante de cette pizzeria, dominée par l'éclat doré du grand four à bois. L'atmosphère est bruyante et animée, portée par le vacarme des conversations et le tintement des verres de Chianti. On s'y attable sur des tables en bois brut serrées pour déguster des pizzas napolitaines aux bords gonflés et à la pâte élastique sous les suspensions industrielles en métal noir.",
    insider_tips: [
      "Commandez la pizza C.P.2019, sacrée championne de Paris avec sa confiture de figues.",
      "Le four à bois chauffe fort, demandez une table près de l'entrée en été pour respirer.",
      "Leur baba au limoncello maison est bien imbibé et offre une fin de repas rafraîchissante."
    ],
    dominant_mood: "festif",
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    has_terrace: false,
    subcategories: ["bistrot", "italienne", "pizza", "pasta"],
    raw_facts: ["Champion de Paris 2019", "Four à bois napolitain"],
    sensory_material: "four à bois",
    sensory_noise: "bruyante et animée",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Pizza (#2)."
    ]
  },
  'la-petite-soeur': {
    description: "Sur la calme Place Michel Audiard, La Petite Sœur se repère à sa devanture rouge carmin abritée sous un store de la même couleur. Devant la porte, deux oliviers en pot entourent quelques petites tables de bistrot. À l'intérieur, les tables en bois brut accueillent des plats d'inspiration méditerranéenne : un crémeux de labneh aux tomates cerises rôties et cacahuètes, ou un caviar d'aubergines au sésame fumé. L'atmosphère est bercée par un léger brouhaha de quartier et l'odeur d'huile d'olive qui s'échappe de la petite cuisine.",
    insider_tips: [
      "Pensez à réserver car la salle est exiguë et se remplit très rapidement le soir.",
      "Installez-vous en terrasse sur la place piétonne pour profiter du soleil lors des beaux jours.",
      "Accompagnez vos tapas de l'une de leurs bières artisanales locales ou de leur sélection de vins nature."
    ],
    dominant_mood: "chill",
    nearest_metro: "Mouton-Duvernet",
    metro_lines: ["4"],
    has_terrace: true,
    subcategories: ["bistrot", "cave_a_manger", "mediterraneenne", "tapas", "vins_naturels"],
    raw_facts: ["Vins nature", "Place piétonne"],
    sensory_material: "tables en bois brut",
    sensory_noise: "brouhaha de quartier",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] Ordre validé : Façade (#4) -> Terrasse (#0) -> Tomates (#1) -> Aubergine (#2) -> Hummus (#3)."
    ]
  },
  'la-taverne-de-zhao': {
    description: "Derrière une devanture en bois écarlate flanquée d'une imposante lanterne en papier, cette enclave dédiée à la province du Shaanxi sert ses bols fumants dans un joyeux vacarme. L'endroit reproduit l'effervescence des rues de Xi'an avec ses plats portés par le piment et l'ail cru. On s'y attable sur des tables métalliques vertes au coude-à-coude pour aspirer de longues nouilles plates étirées sous vos yeux, une claque gustative en plein cœur du quatorzième.",
    insider_tips: [
      "L'adresse est très demandée au déjeuner comme au dîner, visez le début de service.",
      "Le pain croustillant Tong Guan Mo farci à la viande mijotée est parfait avec les sauces pimentées.",
      "Les nouilles de blé Liang Pi servies froides avec du concombre sont rafraîchissantes en été."
    ],
    dominant_mood: "festif",
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    has_terrace: true,
    subcategories: ["chinoise", "street_food", "cantine"],
    raw_facts: ["Spécialités de Xi'an", "Nouilles Biang Biang maison"],
    sensory_material: "devanture en bois écarlate",
    sensory_noise: "joyeux vacarme",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] La photo montre une belle façade rouge et une terrasse avec des tables métalliques vertes.",
      "[DOGME PROOF] Ref: GOOGLE_REVIEWS | Citation exacte: \"Les nouilles biang biang sont incroyables\""
    ]
  },
  'le-bistrot-des-campagnes-paris-14': {
    description: "Des étagères chargées de livres anciens recouvrent les murs de briques de cette adresse de la rue Léopold Robert. Au Bistrot des Campagnes, les tables en chêne sombre et les chaises au bois patiné accueillent une cuisine de terroir rustique. Sous une lumière douce qui met en valeur le sol en tomettes et les barres de laiton du comptoir, le tintement discret des verres à pied accompagne les repas. L'odeur du bœuf bourguignon mijoté et du confit de canard s'échappe de la cuisine ouverte, offrant un moment serein à l'écart des grands boulevards.",
    insider_tips: [
      "Réservez une table près de la bibliothèque pour profiter d'un coin particulièrement tranquille.",
      "Leur terrine de campagne aux épices Rabelais est un délice rustique à partager.",
      "La carte met en avant les vins de vignerons indépendants, parfaits pour accompagner les viandes."
    ],
    dominant_mood: "chill",
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    has_terrace: false,
    subcategories: ["bistrot", "francaise"],
    raw_facts: ["Cuisine de terroir", "Murs de briques"],
    sensory_material: "murs de briques",
    sensory_noise: "tintement discret des verres",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Assiette (#2)."
    ]
  },
  'le-bistrot-du-dome-paris-14': {
    description: "Des boiseries blondes vernies et un comptoir en marbre crème habillent cette annexe marine de la rue Delambre. Le chuchotement feutré des conversations se mêle au bruit métallique des couverts. On s'y assoit sur des chaises en rotin tressé pour savourer des poissons de ligne cuits à la plancha, des huîtres salines ouvertes à la minute et des darnes de lotte rôties servies sur des nappes blanches immaculées.",
    insider_tips: [
      "La sole meunière est préparée dans les règles de l'art, nappe blanche oblige.",
      "Installez-vous sous le grand auvent jaune en terrasse pour observer le passage.",
      "Leur sélection de Muscadet et de Chablis est taillée pour accompagner les huîtres."
    ],
    dominant_mood: "chill",
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    has_terrace: true,
    subcategories: ["bistrot", "poisson", "fruits_de_mer", "francaise"],
    raw_facts: ["Annexe du Dôme", "Arrivages sauvages quotidiens"],
    sensory_material: "comptoir en marbre crème",
    sensory_noise: "chuchotement feutré",
    internal_audit_logs: [
      "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Assiette (#2)."
    ]
  }
};

const slugArg = process.argv[2];

async function run() {
  const slugsToUpdate = slugArg ? [slugArg] : Object.keys(updates);
  for (const slug of slugsToUpdate) {
    const payload = updates[slug];
    if (!payload) {
      console.error(`No payload found for ${slug}`);
      continue;
    }
    console.log(`Running agent_bridge.ts --update for ${slug}...`);
    const result = spawnSync('npx', [
      'tsx',
      'scripts/agent_bridge.ts',
      '--update',
      slug,
      JSON.stringify(payload)
    ], {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf-8'
    });
    console.log(result.stdout);
    if (result.stderr) {
      console.error(result.stderr);
    }
    if (result.status !== 0) {
      console.error(`Failed to update ${slug} (exit code ${result.status})`);
      process.exit(result.status ?? 1);
    }
  }
  console.log("All updates completed!");
}

run();
