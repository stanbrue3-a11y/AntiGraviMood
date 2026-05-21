const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: true,
  closes_late: false,
  nearest_metro: 'Edgar Quinet',
  metro_lines: ['6'],
  reservation_policy: 'sans_resa',
  subcategories: ['cuisine_japonaise', 'yakitori', 'sushis'],
  raw_facts: [
    'brochettes yakitori cuites au feu de bois',
    'banquettes de similicuir rouge réhaussées de coussins zébrés',
    'comptoir en laque noire',
    'décoration feutrée avec lumière orangée',
    'chirashi à l’anguille grillée et assortiments de sushis',
    'takoyaki servis dans des coupelles en céramique bleue',
  ],
  sensory_material:
    'les tables en bois sombre et le comptoir de laque noire sous une lumière orangée feutrée',
  sensory_noise:
    'les chuchotements calmes des habitués et le grésillement discret du gril à yakitori',
  description:
    "À quelques pas des théâtres historiques de la rue de la Gaîté, Yaki est une escale japonaise sans artifice dédiée à l'art des yakitoris cuits au feu de bois. Dans une salle tout en longueur, des tables en bois sombre sont installées devant des banquettes de similicuir rouge réhaussées de coussins zébrés, le tout sous une lumière orangée feutrée. Derrière le comptoir de laque noire, le chef s'active sur le gril où l'odeur des brochettes caramélisées embaume l'espace. La carte fait la part belle aux classiques maîtrisés — makis saumon-fromage fondants, chirashis d'anguille ou assortiment de sushis — servis avec simplicité pour un repas serein.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'Brochettes yakitori au feu de bois excellentes',
  insider_tips: [
    'Prenez le menu yakitori : les brochettes de poulet caramélisées ont un goût fumé de cuisson au feu de bois.',
    'Idéal pour un dîner serein et rapide à la sortie des théâtres voisins de la rue de la Gaîté.',
    "Accompagnez votre plateau de sushis d'un verre de vin de leur petite sélection pour un accord original.",
  ],
  tags: ['new_lot', 'pastille_bleue'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : salle feutrée avec banquettes rouges/zebra, comptoir laque noire, plats sushis/yakitoris de qualité. Terrasse de trottoir validée.',
  ],
};

try {
  console.log('Updating Yaki...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'yaki', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
