const { execFileSync } = require('child_process');

const payloadTaverne = {
  dominant_mood: 'festif',
  has_terrace: true,
  closes_late: false,
  nearest_metro: 'Vavin',
  metro_lines: ['4'],
  reservation_policy: 'sans_resa',
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'Les nouilles biang biang sont incroyables',
  raw_facts: [
    'devanture en bois écarlate',
    'lanterne traditionnelle en papier',
    'nouilles Biang Biang étirées à la main',
    'Liang Pi et pains fourrés (Mo)',
    'cuisine traditionnelle du Shaanxi',
  ],
  sensory_material: "la lanterne en papier suspendue et la façade d'un rouge éclatant",
  sensory_noise: 'le vacarme des conversations autour des grands bols fumants',
  description:
    "Derrière une devanture en bois écarlate flanquée d'une imposante lanterne en papier, cette enclave dédiée à la province du Shaanxi sert ses bols fumants dans un joyeux vacarme. L'endroit reproduit l'effervescence des rues de Xi'an avec ses plats portés par le piment et l'ail cru. On s'y attable au coude-à-coude pour aspirer bruyamment de longues nouilles plates étirées sous vos yeux, une vraie claque gustative en plein cœur du 14ème.",
  insider_tips: [
    "L'adresse est très demandée au déjeuner comme au dîner, visez le début de service pour espérer avoir une table.",
    "Le 'Tong Guan Mo', un pain chinois croustillant farci à la viande mijotée, est idéal pour éponger les sauces pimentées.",
    "Les 'Liang Pi', pâtes de blé servies froides avec du concombre et une sauce au sésame, sont le secret le mieux gardé de la carte.",
  ],
  subcategories: ['cuisine_chinoise', 'specialite_shaanxi'],
  tags: ['new_lot', 'pastille_rouge'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] La photo montre une belle façade rouge et une terrasse avec des tables métalliques vertes.',
  ],
};

const payloadChow = {
  dominant_mood: 'festif',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Vavin',
  metro_lines: ['4'],
  reservation_policy: 'sans_resa',
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'Excellent dim sum',
  raw_facts: [
    'tables en marbre et néons rouges',
    'décor inspiré du Hong Kong des années 60',
    'raviolis pochés aux crevettes',
    'cuisine ouverte',
    'poulet frit façon popcorn',
  ],
  sensory_material:
    'les tables en marbre froid et les néons rouges rappelant les ruelles hongkongaises',
  sensory_noise: 'le tintement des verres de vin et le ballet frénétique de la cuisine ouverte',
  description:
    "Derrière sa belle façade sombre, cette adresse nous plonge directement dans le Hong Kong des années soixante, avec une atmosphère feutrée et électrique aux airs de 'In the Mood for Love'. Autour des lourdes tables en marbre baignées par la lueur des néons rouges, la cuisine ouverte envoie une street-food frontale et moderne. On y partage de copieux paniers de dim sum fumants, des Dandan noodles et des toasts de crevettes frits, le tout arrosé d'un verre de vin naturel.",
  insider_tips: [
    "Le poulet frit façon popcorn au sel et poivre est l'assiette à partager par excellence pour lancer le repas.",
    'Idéal pour un dîner décontracté entre amis avec de multiples assiettes parfumées posées au centre de la table.',
    'Ne manquez pas leurs raviolis pochés, dont la pâte fine fond littéralement en bouche dès la première bouchée.',
  ],
  subcategories: ['cuisine_chinoise', 'street_food'],
  tags: ['new_lot', 'pastille_rouge'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photo vérifiée : table en marbre, raviolis pimentés, poulet, vin rouge.',
  ],
};

try {
  console.log('Updating La Taverne de Zhao...');
  execFileSync(
    'npx',
    [
      'tsx',
      'scripts/agent_bridge.ts',
      '--update',
      'la-taverne-de-zhao',
      JSON.stringify(payloadTaverne),
    ],
    {
      stdio: 'inherit',
    },
  );
  console.log('Updating MR CHOW...');
  execFileSync(
    'npx',
    [
      'tsx',
      'scripts/agent_bridge.ts',
      '--update',
      'mr-chow-cuisine-chinoise',
      JSON.stringify(payloadChow),
    ],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed to update.', e);
}
