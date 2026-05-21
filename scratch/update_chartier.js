const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'festif',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Montparnasse - Bienvenüe',
  metro_lines: ['4', '6', '12', '13'],
  reservation_policy: 'sans_resa',
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'Les serveurs sont vraiment aux petits soins',
  raw_facts: [
    'boiseries hautes et miroirs',
    'immense verrière',
    'chaises en bois',
    'addition écrite sur la nappe en papier',
    'escargots et bouillons classiques',
  ],
  sensory_material: 'les hautes boiseries sculptées et les nappes en papier blanc',
  sensory_noise: 'le fracas permanent de la vaisselle et le brouhaha des tablées serrées',
  description:
    "Sous l'immense verrière de ce grand bouillon frénétique, le temps semble s'être arrêté à la fin du dix-neuvième siècle. Les boiseries massives et les céramiques fleuries encadrent un ballet incessant de serveurs en gilet noir qui naviguent entre les tables. On y vient pour saucer une assiette d'escargots au beurre persillé ou un bœuf bourguignon directement sur les nappes en papier où le prix final est griffonné au stylo, baignant dans le vacarme d'une salle toujours pleine.",
  insider_tips: [
    "Prévoyez d'arriver en dehors des heures de pointe ou armez-vous de patience dans la file d'attente, le lieu ne prend aucune réservation.",
    "L'œuf mayonnaise est un classique absolu pour démarrer le repas à moindre coût.",
    'Observez bien votre serveur à la fin du repas : le calcul de tête de votre addition directement sur la nappe en papier est un rituel immuable.',
  ],
  subcategories: ['bouillon', 'cuisine_francaise'],
  tags: ['new_lot'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : boiseries, verrière, escargots persillés et vin rouge.',
  ],
};

try {
  console.log('Updating Bouillon Chartier Montparnasse...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'bouillon-chartier', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed to update.', e);
}
