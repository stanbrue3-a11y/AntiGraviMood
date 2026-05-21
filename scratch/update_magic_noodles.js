const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Montparnasse - Bienvenüe',
  metro_lines: ['4', '6', '12', '13'],
  reservation_policy: 'sans_resa',
  subcategories: ['cuisine_chinoise', 'nouilles'],
  raw_facts: [
    'façade rouge avec enseigne en mandarin 惊鸿一面',
    'mur intérieur doré rétro-éclairé',
    'logo central lumineux en médaillon',
    'tables en granit noir',
    'bols bleu-blanc traditionnels',
    'nouilles main-tirées biāng biāng',
    'raviolis frits maison',
    'bouillon épicé au bœuf braisé',
  ],
  sensory_material:
    'les bols bleu et blanc posés sur les tables de granit noir, sous le mur doré rétro-éclairé',
  sensory_noise: 'le bruit de la salle exiguë aux heures de pointe, table contre table',
  description:
    "Le nom s'affiche en mandarin sur une façade rouge tranchée : 惊鸿一面, «nouilles de la grue effarouchée», spécialité du Shaanxi. À l'intérieur, la lumière ambrée du mur doré rétro-éclairé tombe sur des tables de granit noir où arrivent des bols bleu-blanc remplis de larges rubans de pâte main-tirée — le biāng biāng — noyés dans un bouillon épicé au bœuf braisé. Les raviolis, frits ou à la vapeur, partent en quelques minutes après l'ouverture.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: "Un des meilleurs restaurants de nouilles que j'ai pu manger dans la capitale",
  insider_tips: [
    'Les larges rubans de pâte biāng biāng sont la commande canonique — évitez les formats fins.',
    'Le restaurant est exigu et sans réservation, arrivez avant 12h30 ou après 14h pour éviter la queue.',
    "Les raviolis maison partent vite, à commander dès l'arrivée.",
  ],
  tags: ['new_lot'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : façade rouge mandarin, mur doré rétro-éclairé, bols bleu-blanc, nouilles et raviolis.',
  ],
};

try {
  console.log('Updating Magic Noodles...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'magic-noodles', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
