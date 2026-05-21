const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Pernety',
  metro_lines: ['13'],
  reservation_policy: 'resa_obligatoire',
  subcategories: ['gastronomique', 'bistronomie', 'cuisine_fusion'],
  raw_facts: [
    'salle minimaliste et épurée aux tons beiges doux',
    'nappage blanc soigné',
    'chef japonais Michihiro Kigawa mariant techniques françaises et rigueur nipponne',
    'poisson noble cuisiné avec émulsions légères et légumes croquants',
    'mille-feuille aux fraises aérien fait minute',
    'adresse intime de moins de vingt couverts',
  ],
  sensory_material:
    'le nappage blanc amidonné et le bouquet de fleurs central sous la lumière douce',
  sensory_noise: 'le silence presque religieux d’une pièce intime concentrée sur les assiettes',
  description:
    "Dans une portion tranquille de la rue du Château, le chef Michihiro Kigawa orchestre une table de moins de vingt couverts disposée autour de tables en bois sobre. Dans une pièce épurée aux tons beiges et nappes blanches, sa cuisine associe la rigueur technique japonaise et la gourmandise classique française. Les assiettes sont des tableaux épurés, à l'image du poisson noble aux émulsions légères ou du magistral mille-feuille aux fraises dressé à la minute.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'Les plats étaient raffinés, délicats et les saveurs très équilibrées',
  insider_tips: [
    "Avec seulement quelques tables disponibles, la réservation en ligne plusieurs jours à l'avance est obligatoire.",
    'Le mille-feuille maison aux fraises est une réussite absolue, à ne manquer sous aucun prétexte.',
    "Le menu déjeuner offre un rapport qualité-prix bistronomique exceptionnel pour s'initier à la cuisine du chef.",
  ],
  tags: ['new_lot'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : salle épurée beiges/nappes blanches, poisson gastronomique aux émulsions, mille-feuille fraise dressé minute.',
  ],
};

try {
  console.log('Updating Kigawa...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'kigawa', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
