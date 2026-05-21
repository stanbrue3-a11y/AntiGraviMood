const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: true,
  closes_late: false,
  nearest_metro: 'Vavin',
  metro_lines: ['4'],
  reservation_policy: 'resa_conseillee',
  subcategories: ['restaurant_italien', 'pates', 'trattoria'],
  raw_facts: [
    'terrasse en bois couverte avec bâches transparentes',
    'spaghetti alle vongole frais maison',
    'carte de charcuteries et fromages en forme de carte d’Italie',
    'bistro italien intimiste',
    'rue calme et résidentielle à deux pas du boulevard du Montparnasse',
  ],
  sensory_material:
    'les assiettes de spaghetti alle vongole fumantes sur la terrasse en bois abritée',
  sensory_noise:
    'le tintement des verres de Chianti et les conversations murmurées sous la terrasse couverte',
  description:
    "Niché dans une rue calme derrière le boulevard du Montparnasse, Il Barone est une trattoria reposante et intimiste. Sa terrasse en bois, entièrement couverte et abritée par des bâches transparentes en hiver, offre un abri bienvenu pour déguster des spécialités transalpines parfaitement exécutées, à l'instar des spaghetti alle vongole. Une adresse de quartier précieuse et simple.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'La cuisson des pâtes est parfaite',
  insider_tips: [
    'La terrasse couverte est très demandée hiver comme été, pensez à la mentionner à la réservation.',
    'Les pâtes fraîches sont le point fort de la maison, en particulier les vongole et les pâtes à la truffe.',
    'Pour le dessert, le tiramisu maison garde une légèreté de bon ton, parfait pour clore le repas.',
  ],
  tags: ['new_lot'],
  internal_audit_logs: [
    "[AUDIT F.I.P.P OK] Photos vérifiées : terrasse bois couverte avec bâches transparentes, carte d'Italie d'ingrédients, assiette de spaghetti vongole.",
  ],
};

try {
  console.log('Updating Il Barone...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'il-barone', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
